/**
 * MyKKP Docs Chatbot — Cloudflare Worker
 * Handles chat requests, searches knowledge base, calls Claude API
 */

import knowledgeBase from './knowledge-base.json';

const SITE_URL = 'https://mykkp-pemohon-docs-stg.pages.dev';
const MODEL = 'claude-haiku-4-5';

// Simple keyword search — finds most relevant doc chunks for a question
function searchDocs(question, topK = 4) {
  const q = question.toLowerCase();
  const words = q.split(/\s+/).filter(w => w.length > 2);

  const scored = knowledgeBase.map(chunk => {
    const text = (chunk.title + ' ' + chunk.content).toLowerCase();
    let score = 0;
    for (const word of words) {
      const count = (text.match(new RegExp(word, 'g')) || []).length;
      score += count;
    }
    // Boost score if words appear in title
    const titleText = chunk.title.toLowerCase();
    for (const word of words) {
      if (titleText.includes(word)) score += 5;
    }
    return { ...chunk, score };
  });

  return scored
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

function buildContext(chunks) {
  return chunks.map(c =>
    `### ${c.title}\nURL: ${c.url}\n\n${c.content.slice(0, 1500)}`
  ).join('\n\n---\n\n');
}

async function handleChat(request) {
  const { question, history = [] } = await request.json();

  if (!question || question.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'Soalan tidak boleh kosong.' }), { status: 400 });
  }

  // Search relevant docs
  const relevant = searchDocs(question);
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

  // Build messages with history
  const messages = [
    ...history.slice(-6), // keep last 3 exchanges
    { role: 'user', content: question }
  ];

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
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
    return new Response(JSON.stringify({ error: 'Ralat API. Cuba lagi.' }), { status: 500 });
  }

  const data = await response.json();
  const answer = data.content?.[0]?.text || 'Maaf, tiada jawapan diterima.';

  // Return answer + sources
  const sources = relevant.map(c => ({ title: c.title, url: c.url }));

  return new Response(JSON.stringify({ answer, sources }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export default {
  async fetch(request, env) {
    // Make API key available
    globalThis.ANTHROPIC_API_KEY = env.ANTHROPIC_KEY;

    const url = new URL(request.url);

    // CORS headers — update origin to your real domain when going live
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === 'POST' && url.pathname === '/chat') {
      const res = await handleChat(request);
      // Add CORS headers to response
      const newRes = new Response(res.body, res);
      Object.entries(corsHeaders).forEach(([k, v]) => newRes.headers.set(k, v));
      return newRes;
    }

    return new Response('MyKKP Chatbot Worker is running.', { headers: corsHeaders });
  }
};
