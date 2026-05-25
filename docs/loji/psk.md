---
title: Permohonan Penarafan Status Kerajaan
description: Panduan lengkap permohonan penarafan status kerajaan
hide_table_of_contents: false
sidebar_label: 'Penarafan Status Kerajaan'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## 📌 Ringkasan Modul
Modul **Penarafan Status Kerajaan (PSK)** merupakan sebuah proses yang membolehkan pemohon untuk membuat permohonan penarafan status kerajaan bagi tempat kerja yang telah didaftarkan di dalam MyKKP. Proses ini melibatkan beberapa langkah penting iaitu:

- Pemohon memilih status kerajaan yang berkaitan dengan tempat kerja untuk mendapatkan pengecualian pembayaran (OGS) bagi pemeriksaan – pemeriksaan yang akan dilakukan.
- Pemohon memuat naik lampiran yang diperlukan sebagai dokumen sokongan bagi permohonan yang dibuat.


## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar permohonan **Penarafan Status Kerajaan** adalah seperti berikut:
1. Penghuni (Tempat Loji) telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.
2. Pemunya loji yang telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.


## 📂 Dokumen Sokongan
Pemohon perlu menyediakan dokumen yang diperlukan bagi permohonan **Penarafan Status Kerajaan** seperti:
1. Deklarasi rasmi daripada Ketua Jabatan menggunakan letterhead dan cap rasmi jabatan.
2. Lain-lain dokumen sokongan.

## 🧭 Langkah-langkah Permohonan

<div className="step-card">

### Akses Halaman Log Masuk MyKKP

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP"
  headerId="toLoginStep"
/>

</div>

<div className="step-card">

### Masuk Ke Halaman Permohonan Penarafan Status Kerajaan

import MenuLoji from '@site/src/components/loji/menu-loji';

<MenuLoji
    stepNumber={2}
    pageName="Penarafan Status Kerajaan"
    kategoriPermohonan="Pemberitahuan Tempat Kerja"
    moduleType="Permohonan Penarafan Status Kerajaan" 
/>

</div>

<div className="step-card">

### Pengisian Borang Permohonan Penarafan Status Kerajaan

import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';
import imgMaklumatAm from '@site/assets/images/loji/psk/tab_maklumat_am.png';

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Am"
    hasRujukan={false}
    tabImgSrc={imgMaklumatAm}
    hasPemunyaAsalSection={false}
    hasPemunyaSection={false} 
/>

---

#### B. Tab 2: Perihal Permohonan

import tabImgSrc from '@site/assets/images/loji/psk/tab_perihal_permohonan.png';

<ExpandableImage
    src={tabImgSrc}
    alt="Tab 2: Perihal Permohonan"
    caption="Tab 2: Perihal Permohonan"
    width={450} 
/>

1. Pilih status kerajaan pada butang radio.
2. Isi maklumat di medan **Ulasan / Perihal Permohonan**.
3. Klik butang **Seterusnya**.

---

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';
import imgDokumenSokongan from '@site/assets/images/loji/psk/tab_dokumen_sokongan.png';

<DokumenSokongan
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokumenSokongan} 
/>

---

import Perakuan from '@site/src/components/loji/tab/perakuan';
import imgPerakuan from '@site/assets/images/loji/psk/tab_perakuan.png';

<Perakuan
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    hasPayment={false}
    noRujukan="XX/PSK/XX/XXXXX" 
/>
    
import BatalOlehPemohon from '@site/src/components/admonitions/batal-oleh-pemohon';

<BatalOlehPemohon />

</div>

import SemakStatus from '@site/src/components/loji/semak-status';
import imgSedangProses from '@site/assets/images/loji/psk/halaman_permohonan_sedang_diproses.png';
import imgSelesaiProses from '@site/assets/images/loji/psk/halaman_permohonan_selesai_diproses.png';

<div className="page-break"></div>

## 🔍 Semak Status Permohonan PSL

<div className="step-card">

<SemakStatus 
    stepNumber={4}
    moduleName="PSK"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} 
/>

</div>

## 📩 Semak Surat Menyurat

<div className="step-card">

import SemakSurat from '@site/src/components/loji/semak-surat';

<SemakSurat
  stepNumber={5} 
/>

</div>