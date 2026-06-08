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

import imgMenu from '@site/assets/images/loji/oshwa/menu-utama.png';

interface MenuOSHWAProps {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuOSHWA({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleType,
}: MenuOSHWAProps) {
  return (
    <div>
      
      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />

      <ol>
        <li>Halaman <b>Menu Utama</b> akan dipaparkan.</li>
        <li>Klik pada butang <b>Profil Tempat Kerja</b> dan seterusnya pada butang <b>{kategoriPermohonan}</b>.</li>
      </ol>

      <Admonition type="important" title="Peringatan Penting">
      <ul>  
        <li>Pastikan dashboard yang dipilih adalah dashboard <b>Tempat Kerja/Kilang</b>.</li>
        <li>Sila pastikan <b>tempat kerja yang diaktifkan</b> adalah <b>betul dan tepat</b> sebelum membuat pengisian Penilaian Tempat Kerja (OSHWA).</li>
      </ul>
      </Admonition>
    </div>
  );
}