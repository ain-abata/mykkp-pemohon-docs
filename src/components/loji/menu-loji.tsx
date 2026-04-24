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

import imgMenu from '@site/assets/images/loji/pekala/menu_utama.png';

interface MenuLojiProps {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuLoji({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleType,
}: MenuLojiProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: Masuk Ke Halaman Permohonan {pageName}</h3>

      
      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />

      <ol>
        <li>Klik pada butang <b>Pendaftaran, Pemeriksaan, Pengujian Tempat Kerja/Loji/Projek Pembinaan</b>.</li>
        <li>Klik <b>{kategoriPermohonan}</b>.</li>
      </ol>

      <Admonition type="tip">
        Pastikan dashboard yang dipilih adalah dashboard <b>Tempat Kerja/Kilang</b>.
      </Admonition>

      <ol start={3}>
        <li>
          Pilih butang radio <b>{moduleType}</b> dan klik butang <strong>Seterusnya</strong>.
        </li>
      </ol>

      <Admonition type="info">
        Halaman <b>Permohonan {pageName}</b> akan dipaparkan pada tab baru.
      </Admonition>
    </div>
  );
}