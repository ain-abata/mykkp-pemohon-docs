/**
 * 
Copy below 👇:
<MenuOk
  stepNumber={2}
  pageName="Operator Dandang Stim (Gred 1)"
  okType="Keselamatan"
  hasDropdown={true}
  moduleName="[DES] - Operator Dandang Stim"
  moduleType="Gred 1" />

Explanation of stepNumber:
- Isi dengan angka untuk penomboran langkah.
- Contoh: 1, 2, 3, ...

Explanation of pageName:
- Isi dengan nama halaman pendaftaran yang ingin dituju.

Explanation of okType:
- Isi dengan jenis orang kompeten yang ingin didaftarkan.
- Contoh: Keselamatan, Higien, Pengurusan Kimia, Kesihatan Pekerjaan, Orang Terlatih.

Explanation of hasDropdown:
- true: jika pilihan modul dalam dropdown.
- false: jika pilihan modul tiada dropdown.

Explanation of moduleName:
- Isi dengan nama modul yang dipaparkan pada dropdown jika hasDropdown = true.
- Jika hasDropdown = false, isi dengan nama modul yang ingin didaftarkan.
- Contoh: [DES] - Operator Dandang Stim ...

Explanation of moduleType:
- Isi dengan jenis modul yang ingin didaftarkan. Contoh: Gred 1, Gred 2, ...
- Jika hasDropdown = false, delete moduleType.

*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import ExpandableImage from './common/ExpandableImage';

import imgMenu from '@site/assets/images/orang-kompeten/menu_utama.png';

interface MenuOkProps {
  stepNumber: number;
  pageName: string;
  okType: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuOk({
  stepNumber,
  pageName,
  okType,
  hasDropdown,
  moduleName,
  moduleType,
}: MenuOkProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: Masuk Ke Halaman Pendaftaran {pageName}</h3>

      <div className="doc-image">
        <img src={imgMenu} />
        <p>Halaman Menu Utama</p>
      </div>
      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />


      <ol>
        <li>Klik menu <b>Orang Kompeten</b>.</li>
        <li>Klik menu <b>{okType}</b> dan pop-up akan dipaparkan.</li>
      </ol>

      <Admonition type="tip">
        Pastikan dashboard yang dipilih adalah dashboard <b>Orang Kompeten</b>.
      </Admonition>

      <ol start={3}>
        {hasDropdown && (
          <li>
            Klik <i>dropdown</i> <b>{moduleName}</b>.
          </li>
        )}

        <li>
          Pilih butang radio <b>{hasDropdown ? moduleType : moduleName}</b> dan klik butang <strong>Seterusnya</strong>.
        </li>
      </ol>

      <Admonition type="info">
        Halaman <b>Pendaftaran OK {pageName}</b> akan dipaparkan pada tab baru.
      </Admonition>
    </div>
  );
}