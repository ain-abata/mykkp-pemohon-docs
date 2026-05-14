import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahTemudugaVerifikasiProps {
  stepNumber: number;
  temudugaVerifikasiImgSrc?: string;
}

export default function LangkahTemudugaVerifikasi({
  stepNumber,
  temudugaVerifikasiImgSrc,
}: LangkahTemudugaVerifikasiProps) {
  return (
    <div>
      <h3>{stepNumber}. Laman Temuduga/Verifikasi</h3>

      <ol>
        <li>Pilih menu yang betul sama ada <b>Kilang/Jentera</b> atau <b>OYK</b>.</li>
        <li>Klik menu <b>Temuduga/Verifikasi</b>.</li>
        <li>Skrin <b>Temuduga/Verifikasi</b> akan dipaparkan seperti di bawah.</li>
      </ol>

      <ExpandableImage
        src={temudugaVerifikasiImgSrc}
        alt="Laman Temuduga/Verifikasi"
        caption="Laman Temuduga/Verifikasi"
        width={650}
      />

      <Admonition type="info">
        Menu <b>Temuduga/Verifikasi</b> digunakan untuk menyemak maklumat berkaitan temuduga atau verifikasi bagi permohonan yang berkaitan.
      </Admonition>
    </div>
  );
}