/**
 * MyKKP Docs Chatbot — Cloudflare Worker
 * Uses Vectorize for semantic search + Claude for answers
 */

const SITE_URL = 'https://mykkp-pemohon-docs-stg.pages.dev';
const MODEL = 'claude-haiku-4-5-20251001';

// Generate embedding for a query using Cloudflare AI
async function getEmbedding(text, env) {
  const response = await env.AI.run('@cf/baai/bge-m3', {
    text: [text]
  });
  return response.data[0];
}

// Search Vectorize for most relevant doc chunks
async function searchDocs(question, env, topK = 4) {
  const embedding = await getEmbedding(question, env);

  const results = await env.VECTORIZE.query(embedding, {
    topK,
    returnMetadata: 'all'
  });

  return results.matches
    .filter(m => m.score > 0.3) // minimum relevance threshold
    .map(m => ({
      title: m.metadata.title,
      url: m.metadata.url,
      content: m.metadata.content,
      score: m.score
    }));
}

function buildContext(chunks) {
  return chunks.map(c =>
    `### ${c.title}\nURL: ${c.url}\n\n${c.content.slice(0, 1500)}`
  ).join('\n\n---\n\n');
}

async function handleChat(request, env) {
  const { question, history = [] } = await request.json();

  if (!question || question.trim().length === 0) {
    return Response.json({ error: 'Soalan tidak boleh kosong.' }, { status: 400 });
  }

  // Semantic search — works in any language
  const relevant = await searchDocs(question, env);

  const context = relevant.length > 0
    ? buildContext(relevant)
    : 'Tiada dokumen relevan ditemui.';

  const systemPrompt = `Anda adalah pembantu dokumentasi rasmi untuk portal MyKKP Pemohon (${SITE_URL}).

Jawab soalan pengguna HANYA berdasarkan dokumentasi yang disediakan di bawah.

PERATURAN PENTING:
- Hanya gunakan URL yang disenaraikan dalam dokumentasi — JANGAN cipta atau andaikan URL
- Jika pengguna bertanya dalam Bahasa Malaysia, jawab dalam Bahasa Malaysia
- Jika pengguna bertanya dalam Bahasa Inggeris, jawab dalam Bahasa Inggeris
- Jika maklumat tiada dalam dokumentasi, beritahu pengguna dan cadangkan mereka hubungi mykkp@mohr.gov.my atau 03-6419 2525
- Jawapan hendaklah ringkas dan jelas
- Apabila menyebut halaman berkaitan, sertakan URL sebenar dari dokumentasi

DOKUMENTASI RELEVAN:
${context}`;

  const messages = [
    ...history.slice(-6),
    { role: 'user', content: question }
  ];

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system: systemPrompt,
      messages
    })
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('Anthropic API error:', err);
    return Response.json({ error: 'Ralat API. Cuba lagi.' }, { status: 500 });
  }

  const data = await response.json();
  const answer = data.content?.[0]?.text || 'Maaf, tiada jawapan diterima.';
  const sources = relevant.map(c => ({ title: c.title, url: c.url }));

  return Response.json({ answer, sources });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === 'POST' && url.pathname === '/chat') {
      const res = await handleChat(request, env);
      const newRes = new Response(res.body, res);
      Object.entries(corsHeaders).forEach(([k, v]) => newRes.headers.set(k, v));
      return newRes;
    }

    return new Response('MyKKP Chatbot Worker is running ✓', { headers: corsHeaders });
  }
};
