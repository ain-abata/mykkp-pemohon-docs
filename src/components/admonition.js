import React from 'react';

export default function admonition({ type = "info", children }) {
  const config = {
    tip: {
      title: "💡 TIP",
      className: "tip",
    },
    warning: {
      title: "⚠️ AMARAN",
      className: "warning",
    },
    info: {
      title: "ℹ️ INFO",
      className: "info",
    },
    do: {
        title: "✅ DO",
        className: "do",
    },
    dont: {
        title: "❌ DON'T",
        className: "dont",
    },
  };

  const selected = config[type];

  return (
    <div className={`admonition ${selected.className}`}>
      <div className="admonition-title">
        {selected.title}
      </div>
      <div className="admonition-content">
        {children}
      </div>
    </div>
  );
  
}