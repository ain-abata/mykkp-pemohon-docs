#!/usr/bin/env node
/**
 * embed-docs.js
 * Reads knowledge-base.json, generates embeddings via Cloudflare AI,
 * and upserts vectors into Cloudflare Vectorize.
 *
 * Usage: node scripts/embed-docs.js
 *
 * Requirements:
 * - CLOUDFLARE_API_TOKEN env var (or wrangler login)
 * - CLOUDFLARE_ACCOUNT_ID env var
 */

const fs = require('fs');
const path = require('path');

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const INDEX_NAME = 'mykkp-docs';
const KB_PATH = path.join(__dirname, '../worker/knowledge-base.json');
const BATCH_SIZE = 10; // Vectorize upsert limit per batch

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('❌ Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN');
  console.error('   Set them as environment variables or run: wrangler login');
  process.exit(1);
}

const headers = {
  'Authorization': `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json'
};

// Generate embedding using Cloudflare AI REST API
async function getEmbedding(text) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/baai/bge-m3`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ text: [text.slice(0, 2000)] }) // truncate for embedding
    }
  );
  const data = await res.json();
  if (!data.success) {
    throw new Error(`Embedding failed: ${JSON.stringify(data.errors)}`);
  }
  return data.result.data[0];
}

// Upsert a batch of vectors into Vectorize
async function upsertVectors(vectors) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/vectorize/v2/indexes/${INDEX_NAME}/upsert`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ vectors })
    }
  );
  const data = await res.json();
  if (!data.success) {
    throw new Error(`Upsert failed: ${JSON.stringify(data.errors)}`);
  }
  return data.result;
}

async function main() {
  console.log('📖 Reading knowledge base...');
  const chunks = JSON.parse(fs.readFileSync(KB_PATH, 'utf-8'));
  console.log(`   Found ${chunks.length} chunks\n`);

  const vectors = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    console.log(`⚙️  [${i + 1}/${chunks.length}] Embedding: ${chunk.title}`);

    try {
      // Use title + first 500 chars of content for embedding
      const textToEmbed = `${chunk.title}\n\n${chunk.content.slice(0, 500)}`;
      const embedding = await getEmbedding(textToEmbed);

      vectors.push({
        id: `chunk-${i}`,
        values: embedding,
        metadata: {
          title: chunk.title,
          url: chunk.url,
          // Store truncated content in metadata for retrieval
          content: chunk.content.slice(0, 2000)
        }
      });

      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 200));

    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
    }
  }

  console.log(`\n📤 Uploading ${vectors.length} vectors to Vectorize...`);

  // Upload in batches
  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    const batch = vectors.slice(i, i + BATCH_SIZE);
    console.log(`   Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(vectors.length / BATCH_SIZE)}`);
    await upsertVectors(batch);
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('\n✅ Done! All vectors uploaded to Vectorize.');
  console.log(`   Index: ${INDEX_NAME}`);
  console.log(`   Total: ${vectors.length} vectors`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
