import React from 'react';
import Root from '@theme-original/Root';
import ChatWidget from '@site/src/components/ChatWidget';

export default function RootWrapper(props) {
  return (
    <>
      <Root {...props} />
      <ChatWidget />
    </>
  );
}
