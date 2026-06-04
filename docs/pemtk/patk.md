---
title: Pengaktifan Tempat Kerja (PATK)
description: Panduan lengkap pengaktifan tempat kerja
hide_table_of_contents: false
sidebar_label: 'Aktif Tempat Kerja'
---
import React from 'react';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

import lamanMenuUtamaImg from '@site/assets/images/pemtk/laman-menu-utama.png';
import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';
import Perakuan from '@site/src/components/loji/tab/perakuan';

import senaraiTempatKerjaImg from '@site/assets/images/pemtk/senarai-tempat-kerja.png';
import senaraiPermohonanTempatKerjaImg from '@site/assets/images/tempat-kerja/patk/senarai-permohonan-tempat-kerja.png';
import tahapPatkImg from '@site/assets/images/tempat-kerja/patk/tahap-patk.png';
import maklumatAmImg from '@site/assets/images/tempat-kerja/patk/maklumat-am.png';
import maklumatTempatKerjaImg from '@site/assets/images/tempat-kerja/patk/maklumat-tempat-kerja.png';
import maklumatDokumenSokonganImg from '@site/assets/images/tempat-kerja/patk/maklumat-dokumen-sokongan.png';
import maklumatPerakuanImg from '@site/assets/images/tempat-kerja/patk/maklumat-perakuan.png';

# 📝 Pengaktifan Tempat Kerja

## 📌 Pengenalan
Pengaktifan Tempat Kerja (PATK) merupakan sebuah proses yang membolehkan pemohon untuk mengaktifkan  tempat kerja yang diingini di dalam akaun pengguna.


| PATK Tahap 1 | PATK Tahap 2 |
|---|---|
| Boleh melaksanakan semua fungsi dalam sistem MyKKP, termasuk: | Hanya terhad kepada capaian fungsi-fungsi di bawah: |
| 1. Semua dalam senarai PATK 2 | 1. Bil / Resit |
| 2. Meluluskan permohonan PATK Tahap 2, termasuk membatalkan permohonan | 2. Pemberitahuan Pembaikan Loji (PBAIK) |
| 3. Permohonan Status Kerajaan (PSK) | 3. Pemberitahuan Pembukaan Loji (PBUKA) |
| 4. Pemberitahuan Status Loji (PSL) | 4. Permohonan Kebenaran Memasang Loji (PTI) dan Permohonan Pemeriksaan Permulaan Loji (PEMULA) |
| 5. Permohonan Pemindahan Lokasi oleh Pemunya (PPLP) dan Permohonan Pemindahan Hak Milik oleh Pemunya (PPLHM) | 5. Permohonan Pemeriksaan Berkala Loji (PEKALA) |
| 6. Pemberitahuan JKKP12 Kerja Pembinaan | 6. Basic Occupational Health Services (BOHS) |
| 7. Pemberitahuan Tempat Kerja (PEMTK) dan kemaskini tempat kerja | 7. Kemalangan / Aduan |
| 8. Notis / Surat Arahan | 8. JKKP5 |
| 9. Permohonan SOHELP | 9. MySKUD |
| 10. Dan lain-lain |  |

## 🧭 Langkah-langkah Pengaktifan


import LoginStep from '../../src/components/login-step';

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
    stepNumber={1}
    title="Akses Halaman Log Masuk MyKKP" />
</div>

<div className="step-card">

### Permohonan Pengaktifan Tempat Kerja

<ol>
  <li>Laman <b>Menu Utama</b> akan terpapar seperti di bawah.</li>
      <ExpandableImage
      src={lamanMenuUtamaImg}
      alt="Laman Menu Utama"
      caption="Laman Menu Utama"
      width={650}
    />
  <li>Klik pada butang <b>Profil Tempat Kerja</b> pada menu sebelah kiri dan seterusnya tekan butang<b> Pengaktifan Tempat Kerja (PATK).</b></li>
  <li>Halaman <b>Pengaktifan Tempat Kerja</b> akan terpapar.</li>
      <ExpandableImage
      src={senaraiPermohonanTempatKerjaImg}
      alt="Senarai Tempat Kerja"
      caption="Senarai Tempat Kerja"
      width={650}
      />
  <li>Klik pada tab <b>Permohonan PATK</b>.</li>
  <li>Isi No. Daftar Tempat Kerja pada medan ruangan Carian.</li>
  <li>Klik butang <b>Carian</b>.</li>
  <li>Klik pada butang <b>Borang PATK Tahap 1</b> untuk memuat turun borang PATK Tahap 1.</li>
    <Admonition type="info">
        Jika anda tidak dapat memuat turun borang melalui sistem, sila gunakan pautan berikut:  
        👉https://mykkp.dosh.gov.my/manual/BORANG%20PATK%20TAHAP%201%20(NEW).pdf
    </Admonition>
  <li>Lengkapkan <b>borang PATK Tahap 1</b>.</li>
    <Admonition type="tip">
        <ul>
          <li><b>Bahagian B</b> hendaklah diisi dengan maklumat pemilik akaun MyKKP tersebut. </li>
          <li><b>Bahagian C</b> pula perlu diisi dengan maklumat majikan atau individu yang memegang jawatan tertinggi di tempat kerja berkenaan.</li>
        </ul>  
    </Admonition>
  <li>Klik butang <b>Mohon PATK</b> selepas pengisian borang PATK Tahap 1.</li>
      <Admonition type="info">
        **Borang permohonan PATK Tahap 1** yang telah diisi perlu dimuat naik pada **[Tab 4: Dokumen Sokongan](#tab-4-dokumen-sokongan)**.
    </Admonition>
</ol>
 ---
 
 </div>


<div className="step-card">

### Penghantaran Borang Permohonan Pengaktifan Tempat Kerja 
#### Tab 1: Tahap PATK
<ol>
  <li>Halaman <b>Tahap PATK</b> akan dipaparkan seperti di bawah.</li>

  <ExpandableImage
    src={tahapPatkImg}
    alt="Halaman Tahap PATK"
    caption="Halaman Tahap PATK"
    width={650}
  />

  <li>Klik butang radio <b>Tahap 1.</b></li>
  <li>Klik butang <b>Seterusnya</b>.</li>
  </ol>
---

#### Tab 2: Maklumat Am
<ol>
  <li>Halaman <b>Maklumat Am</b> akan dipaparkan seperti di bawah.</li>

  <ExpandableImage
    src={maklumatAmImg}
    alt="Halaman Maklumat Am"
    caption="Halaman Maklumat Am"
    width={650}
  />

  <li>Semak maklumat yang dipaparkan.</li>
  <li>Klik butang <b>Seterusnya</b>.</li>
  </ol>
---

#### Tab 3: Maklumat Tempat Kerja Yang Ingin Diaktifkan
  <ol>
  <li>Halaman <b>Maklumat Tempat Kerja Yang Ingin Diaktifkan</b> akan dipaparkan seperti di bawah.</li>

  <ExpandableImage
    src={maklumatTempatKerjaImg}
    alt="Maklumat Tempat Kerja Yang Ingin Diaktifkan"
    caption="Maklumat Tempat Kerja Yang Ingin Diaktifkan"
    width={650}
  />

  <li> Semak maklumat tempat kerja yang ingin diaktifkan.</li>
  <li>Klik butang <b>Seterusnya</b>.</li>
</ol>
---

#### Tab 4: Dokumen Sokongan
<DokumenSokongan
        tabNumber={4}
        tabName="Dokumen Sokongan"
        tabImgSrc={maklumatDokumenSokonganImg} 
/>
---

#### Tab 5: Perakuan

  <Perakuan
        tabNumber={5}
        tabName="Perakuan"
        tabImgSrc={maklumatPerakuanImg}
        hasPayment={false} 
  />

</div>

<div className="step-card">

### Pengaktifan Tempat Kerja

<ol>
  <li>Laman <b>Menu Utama</b> akan terpapar seperti di bawah.</li>
  <ExpandableImage
  src={lamanMenuUtamaImg}
  alt="Laman Menu Utama"
  caption="Laman Menu Utama"
  width={650}
/>
  <li>Klik pada butang <b>Profil Tempat Kerja</b> dan seterusnya pada butang Pengaktifan Tempat Kerja.</li>
  <li>Skrin <b>Pengaktifan Tempat Kerja</b> akan terpapar sperti di bawah.</li>
  <ExpandableImage
  src={senaraiTempatKerjaImg}
  alt="Senarai Tempat Kerja"
  caption="Senarai Tempat Kerja"
  width={650}
/>
<li>Klik pada tab <b>Tempat Kerja Aktif</b>.</li>
<li>Pilih Kategori dan isi carian pada medan ruangan Carian. Klik butang Carian.</li>
<li>Klik butang <b>Carian</b>.</li>
<li>Klik pada butang <b>Aktif</b> pada tempat kerja yang ingin diaktifkan.</li>
</ol>
</div>