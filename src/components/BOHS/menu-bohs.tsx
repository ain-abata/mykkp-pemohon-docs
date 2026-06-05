import React from 'react';
import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import imgMenu from '@site/assets/images/orang-kompeten/bohs/menu_bohs.png';

interface MenuBohsProps {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuBohs({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleType,
}: MenuBohsProps) {
  return (
    <div >
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