import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahSuratMenyuratProps {
  stepNumber: number;
  suratMenyuratImgSrc?: string;
}

export default function LangkahSuratMenyurat({
  stepNumber,
  suratMenyuratImgSrc,
}: LangkahSuratMenyuratProps) {
  return (
    <div>
      <h3>{stepNumber}. Laman Surat Menyurat</h3>

      <ol>
        <li>Pilih menu yang betul sama ada <b>Kilang/Jentera</b> atau <b>OYK</b>.</li>
        <li>Klik menu <b>Surat Menyurat</b>.</li>
        <li>Skrin <b>Surat Menyurat</b> akan dipaparkan seperti di bawah.</li>
      </ol>

      <ExpandableImage
        src={suratMenyuratImgSrc}
        alt="Laman Surat Menyurat"
        caption="Laman Surat Menyurat"
        width={650}
      />

      <Admonition type="info">
        Menu <b>Surat Menyurat</b> digunakan untuk menyemak surat atau dokumen berkaitan permohonan.
      </Admonition>
    </div>
  );
}