import React from 'react';

type AdmonitionType = 'tip' | 'warning' | 'info' | 'important' | 'do' | 'dont';

interface AdmonitionProps {
  type?: AdmonitionType;
  children: React.ReactNode;
}

export default function Admonition({ type = "info", children }: AdmonitionProps) {
  const config: Record<AdmonitionType, { title: string; className: string }> = {
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
    important: {
      title: "❗ PENTING",
      className: "important",
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

  return React.createElement(
    'div',
    { className: `admonition ${selected.className}` },
    React.createElement(
      'div',
      { className: 'admonition-title' },
      selected.title
    ),
    React.createElement(
      'div',
      { className: 'admonition-content' },
      children
    )
  );
}