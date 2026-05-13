import React from 'react';
import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import imgMenu from '@site/assets/images/orang-kompeten/bosh/menu_bosh.png';

interface MenuBoshProps {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuBosh({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleType,
}: MenuBoshProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: Masuk Ke Halaman {pageName}</h3>
      
      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />

      <ol>
        <li>Klik pada butang <b>Lain-Lain Permohonan</b>.</li>
        <li>Klik <b>{kategoriPermohonan}</b>.</li>
      </ol>

      <Admonition type="tip">
        Pastikan dashboard yang dipilih adalah dashboard <b>Tempat Kerja/Kilang</b>.
      </Admonition>

      <ol start={3}>
        <li>Pilih butang radio <b>{moduleType}</b>.</li>
        <li>Klik butang <strong>Seterusnya</strong>.</li>
      </ol>

      <Admonition type="info">
        Halaman <b>{pageName}</b> akan dipaparkan pada tab baru.
      </Admonition>
    </div>
  );
}