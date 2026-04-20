import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

export default function WhatNext () {
  return (
    <div className="step-card">
      <h3>Pilihan Seterusnya</h3>
      <ul>
        <li><Link to="../pembatalan-permohonan">Bagaimana ingin membatalkan permohonan.</Link></li>
        <li><Link to="../pembayaran-fi">Pembayaran Fi Pemprosesan dan Fi Pendaftaran</Link></li>
        <li><Link to="../kelulusan-permohonan">Kelulusan Permohonan dan Penyemakan Slip Ringkas</Link></li>
      </ul>
    </div>
  );
}