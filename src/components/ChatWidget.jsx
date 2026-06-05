import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

const WORKER_URL = 'https://mykkp-chatbot-worker.ain-a53.workers.dev';

const SUGGESTIONS = [
  'Macam mana nak daftar akaun?',
  'Bagaimana nak mohon permit loji?',
  'Apa itu Orang Kompeten?',
  'Macam mana nak buat pembayaran?',
];

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
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
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const getHistory = () => {
    return messages
      .filter(m => m.role !== 'assistant' || messages.indexOf(m) > 0)
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

  return (
    <div className={styles.wrapper}>
      {/* Chat window */}
      {isOpen && (
        <div className={styles.window}>
          <div className={styles.header}>
            <div className={styles.headerIcon}>💬</div>
            <div className={styles.headerText}>
              <div className={styles.headerTitle}>Pembantu MyKKP</div>
              <div className={styles.headerSub}>Soal jawab dokumentasi</div>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Tutup">✕</button>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.msgRow} ${msg.role === 'user' ? styles.user : styles.assistant}`}>
                <div className={styles.bubble}>
                  <p>{msg.text}</p>
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
              <div className={`${styles.msgRow} ${styles.assistant}`}>
                <div className={styles.bubble}>
                  <span className={styles.typing}>
                    <span>.</span><span>.</span><span>.</span>
                  </span>
                </div>
              </div>
            )}

            {showSuggestions && !loading && (
              <div className={styles.suggestions}>
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
        </div>
      )}

      {/* Floating button */}
      <button
        className={styles.fab}
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Tutup chat' : 'Buka chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}

export default ChatWidget;
