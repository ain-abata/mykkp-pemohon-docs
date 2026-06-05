/**
 * 
Copy below 👇:
<MenuLoji
    stepNumber={2}
    pageName="Pemeriksaan Berkala Loji"
    kategoriPermohonan="Pemeriksaan Berkala Loji Berperakuan"
    moduleType="Pemeriksaan Berkala - Pemunya" />

Explanation of stepNumber:
- Isi dengan angka untuk penomboran langkah.
- Contoh: 1, 2, 3, ...

Explanation of pageName:
- Isi dengan nama halaman pendaftaran yang ingin dituju.

Explanation of kategoriPermohonan:
- Isi dengan nama kategori permohonan yang ingin dipilih di halaman "Sila Pilih Kategori Permohonan".
- Contoh: Pemberitahuan Tempat Kerja, Skim Pemeriksaan Khas, ...

Explanation of moduleType:
- Isi dengan jenis modul yang ingin didaftarkan. Contoh: Pemeriksaan Berkala - Pemunya, ...

*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import imgMenu from '@site/assets/images/kemalangan-aduan/menu_utama.png';

interface MenuAduanProps {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuAduan({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleType,
}: MenuAduanProps) {
  return (
    <div>
      
      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />

      <ol>
        <li>Klik pada butang <b>Pemberitahuan Kemalangan, Kejadian Merbahaya dan Penyakit Pekerjaan</b>.</li>
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