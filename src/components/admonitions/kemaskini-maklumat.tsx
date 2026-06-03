import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

export default function KemaskiniMaklumat ({ jenisMaklumat }: { jenisMaklumat: string }) {
  return (
    <Admonition type="info">
      Untuk mengemaskini {jenisMaklumat}, sila rujuk 👉 <b><a href="/docs/lain-lain/kemaskini-maklumat-am" target="_blank" rel="noopener noreferrer">Kemaskini {jenisMaklumat}</a></b>.
    </Admonition>
  )
}

