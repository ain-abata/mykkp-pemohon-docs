import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

// ⚠️ Replace with your deployed Cloudflare Worker URL
const WORKER_URL = 'https://mykkp-chatbot-worker.ain-a53.workers.dev';

const SUGGESTIONS = [
  'Macam mana nak daftar akaun?',
  'Bagaimana nak mohon permit loji?',
  'Apa itu Orang Kompeten?',
  'Macam mana nak buat pembayaran?',
];

// Simple markdown renderer — handles bold, headings, lists, links
function renderMarkdown(text) {
  if (!text) return '';
  let html = text
    // Escape HTML
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Headings
    .replace(/^### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^## (.+)$/gm, '<h3>$1</h3>')
    .replace(/^# (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links — restore < > from escape first for URLs
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Numbered lists
    .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
    // Bullet lists
    .replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ol> or <ul>
    .replace(/(<li>.*<\/li>\n?)+/gs, (match) => `<ul>${match}</ul>`)
    // Line breaks — double newline = paragraph
    .replace(/\n\n/g, '</p><p>')
    // Single newlines
    .replace(/\n/g, '<br/>');

  return `<p>${html}</p>`;
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hai! Saya pembantu dokumentasi MyKKP. Tanya saya apa-apa soalan tentang sistem MyKKP.',
      sources: []
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 100);
    }
  }, [messages, isOpen, isMinimized]);

  const getHistory = () => {
    return messages
      .slice(1) // skip welcome message
      .slice(-6)
      .map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.text }));
  };

  const sendMessage = async (text) => {
    const question = (text || input).trim();
    if (!question || loading) return;

    setInput('');
    setShowSuggestions(false);
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setLoading(true);

    try {
      const res = await fetch(`${WORKER_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history: getHistory() })
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, {
        role: 'assistant',
        text: data.answer,
        sources: data.sources || []
      }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: 'Maaf, ralat berlaku. Sila cuba lagi atau hubungi mykkp@mohr.gov.my',
        sources: []
      }]);
    }

    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && !isMinimized && (
        <div className={styles.overlay} onClick={() => setIsMinimized(true)} />
      )}

      {/* Side panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''} ${isMinimized ? styles.panelMinimized : ''}`}>

        {/* Header — always visible when panel is open */}
        <div className={styles.header} onClick={isMinimized ? () => setIsMinimized(false) : undefined}
          style={isMinimized ? { cursor: 'pointer' } : {}}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>💬</div>
            <div>
              <div className={styles.headerTitle}>Pembantu MyKKP</div>
              {!isMinimized && <div className={styles.headerSub}>Soal jawab dokumentasi</div>}
            </div>
          </div>
          <div className={styles.headerActions}>
            <button
              className={styles.headerBtn}
              onClick={(e) => { e.stopPropagation(); setIsMinimized(m => !m); }}
              aria-label={isMinimized ? 'Buka' : 'Minimumkan'}
              title={isMinimized ? 'Buka' : 'Minimumkan'}
            >
              {isMinimized ? '▲' : '▼'}
            </button>
            <button
              className={styles.headerBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
              title="Tutup"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body — hidden when minimized */}
        {!isMinimized && (
          <>
            <div className={styles.messages}>
              {messages.map((msg, i) => (
                <div key={i} className={`${styles.msgRow} ${msg.role === 'user' ? styles.user : styles.bot}`}>
                  {msg.role === 'assistant' && (
                    <div className={styles.avatar}>AI</div>
                  )}
                  <div className={styles.bubble}>
                    <div
                      className={styles.msgText}
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                    />
                    {msg.sources && msg.sources.length > 0 && (
                      <div className={styles.sources}>
                        <span className={styles.sourcesLabel}>📄 Rujukan:</span>
                        {msg.sources.map((s, j) => (
                          <a key={j} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                            {s.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className={`${styles.msgRow} ${styles.bot}`}>
                  <div className={styles.avatar}>AI</div>
                  <div className={styles.bubble}>
                    <span className={styles.typing}>
                      <span /><span /><span />
                    </span>
                  </div>
                </div>
              )}

              {showSuggestions && !loading && (
                <div className={styles.suggestions}>
                  <p className={styles.sugLabel}>Cuba tanya:</p>
                  {SUGGESTIONS.map((s, i) => (
                    <button key={i} className={styles.sugBtn} onClick={() => sendMessage(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
              <input
                ref={inputRef}
                className={styles.input}
                type="text"
                placeholder="Taip soalan anda..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={loading}
              />
              <button
                className={styles.sendBtn}
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                aria-label="Hantar"
              >
                ➤
              </button>
            </div>
          </>
        )}
      </div>

      {/* Floating button — only when panel is closed */}
      {!isOpen && (
        <button className={styles.fab} onClick={handleOpen} aria-label="Buka pembantu MyKKP">
          💬
        </button>
      )}
    </>
  );
}

export default ChatWidget;
