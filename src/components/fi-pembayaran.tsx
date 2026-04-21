import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

interface PembayaranFiProps {
  stepNumber: number;
  title: string;
  imgSenaraiPermohonanSrc?: string;
  imgSenaraiPembayaranSrc?: string;
}

export default function PembayaranFi({
  stepNumber,
  title,
  imgSenaraiPermohonanSrc,
  imgSenaraiPembayaranSrc,
}: PembayaranFiProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: {title}</h3>
      <p>Terdapat <b>dua (2)</b> cara untuk menyemak dokumen Sebut Harga Pemprosesan:</p>
      <h4>A. Dari Halaman Senarai Permohonan</h4>
        <div className="doc-image">
            <img src={imgSenaraiPermohonanSrc} style={{ width: 450 }} />
            <p>Halaman</p>
        </div>
        <ol>
            <li>Rekod <b>Sijil Kompetensi</b> akan terpapar sekiranya pemohon memiliki sijil kompetensi yang lain.</li>
            <li>Klik butang <b>Seterusnya</b>.</li>
        </ol>
      <h4>A. Dari Halaman Senarai Pembayaran</h4>
    </div>
  );
}