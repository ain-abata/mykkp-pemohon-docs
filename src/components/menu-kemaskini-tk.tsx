import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface LangkahMenuUtamaProps {
  stepNumber: number;
  menuUtamaImgSrc?: string;
}

export default function LangkahMenuUtama({
  stepNumber,
  menuUtamaImgSrc,
}: LangkahMenuUtamaProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: Laman Menu Utama</h3>

      <ol>
        <li>Laman menu utama akan dipaparkan.</li>
        <li>Klik pada butang <b>Profil Tempat Kerja</b>.</li>
        <li>Klik pada submenu <b>Kemaskini Tempat Kerja</b>.</li>
      </ol>

      <ExpandableImage
        src={menuUtamaImgSrc}
        alt="Laman Menu Utama"
        caption="Laman Menu Utama"
        width={650}
      />
    </div>
  );
}