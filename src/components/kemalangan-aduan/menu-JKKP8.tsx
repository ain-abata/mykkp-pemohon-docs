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

import imgMenu from '@site/assets/images/kemalangan-aduan/jkkp8-minor/menu-utama.png';
import imgProfilTahun from '@site/assets/images/kemalangan-aduan/jkkp8-minor/psm-profiltahun.png';

interface MenuJKKP8Props {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuJKKP8({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleType,
}: MenuJKKP8Props) {
  return (
    <div>
      
      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />

      <ol>
        <li>Klik pada butang <b>Pelaporan Sepanjang Masa</b> dan seterusnya pada butang <b>{kategoriPermohonan}</b>.</li>
      </ol>

      <Admonition type="info">
      <ul>  
        <li>Pastikan dashboard yang dipilih adalah dashboard <b>Tempat Kerja/Kilang</b>.</li>
        <li>Modul Pelaporan Sepanjang Masa hanya boleh dilakukan oleh <b>Wakil PATK Tahap 1</b> bagi tempat kerja yang telah didaftarkan di dalam sistem MyKKP.</li>
      </ul>
      </Admonition>

      <ol start={2}>
        <li>Halaman <b>{pageName}</b> akan dipaparkan.</li>
      </ol>

      <ExpandableImage
        src={imgProfilTahun}
        alt={`Halaman Pelaporan Sepanjang Masa`}
        caption={`Halaman Pelaporan Sepanjang Masa - Tukar Profil Tahun`}
        width={650}
      />

      <ol start={3}>
        <li>Klik butang <b>Tukar Profil Tahun</b> untuk menukar profil tahun Pelaporan Sepanjang Masa.</li>
        <li>Pilih tahun yang dikehendaki dan klik butang <b>Pilih</b>.</li>
      </ol>

    </div>
  );
}