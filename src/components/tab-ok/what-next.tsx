import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

export default function WhatNext () {
  return (
    <div className="step-card">
      <h3>Apa yang boleh anda lakukan seterusnya</h3>
      <ul>
        <li><Link to="../pembatalan-permohonan">Bagaimana ingin membatalkan permohonan?</Link></li>
        <li><Link to="../pembayaran-fi">Bagaimana cara untuk membuat pembayaran Fi Pemprosesan dan Fi Pendaftaran?</Link></li>
        <li><Link to="../kelulusan-permohonan">Bagaimana cara untuk Semak Slip Ringkas selepas lulus permohonan?</Link></li>
      </ul>
    </div>
  );
}