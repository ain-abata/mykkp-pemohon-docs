import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

interface WhatNextProps {
  canBatalPermohonan?: boolean;
  hasPayment?: boolean;
  linkPembatalan: string;
  linkPembayaran: string;
}

export default function WhatNext ({ 
  canBatalPermohonan,
  hasPayment,
  linkPembatalan,
  linkPembayaran,
}: WhatNextProps) {
  return (
    <div className="step-card">
      <h3>Apa yang boleh anda lakukan seterusnya</h3>
      <ul>
        {canBatalPermohonan && (
          <li><Link to={linkPembatalan}>Bagaimana ingin membatalkan permohonan?</Link></li>
        )}
        {hasPayment && (
          <li><Link to={linkPembayaran}>Bagaimana cara untuk membuat bayaran pemulaan dan bayaran akhir?</Link></li>
        )}
      </ul>
    </div>
  );
}