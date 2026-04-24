import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

interface WhatNextProps {
  linkPembatalan: string;
  linkPembayaran: string;
  linkSemakStatus: string;
}

export default function WhatNext ({ 
  linkPembatalan,
  linkPembayaran,
  linkSemakStatus,
}: WhatNextProps) {
  return (
    <div className="step-card">
      <h3>Apa yang boleh anda lakukan seterusnya</h3>
      <ul>
        <li><Link to={linkPembatalan}>Bagaimana ingin membatalkan permohonan?</Link></li>
        <li><Link to={linkPembayaran}>Bagaimana cara untuk membuat bayaran pemulaan dan bayaran akhir?</Link></li>
        <li><Link to={linkSemakStatus}>Bagaimana cara untuk Semak Status Permohonan?</Link></li>
      </ul>
    </div>
  );
}