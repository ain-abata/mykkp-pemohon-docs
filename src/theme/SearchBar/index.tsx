import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function SearchBar() {
  return (
    <DocSearch
      appId="P14KWFGPWB"
      apiKey="877953df5cf2bdd57f792442f023df7b"
      indexName="MyKKP DOC"
      
      askAi={{
        assistantId: 'f6f425ac-7c90-4fe7-823b-2a0865f57222',
        agentStudio: true,
        
      }}
    />
  );
}