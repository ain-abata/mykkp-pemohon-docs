---
title: Permohonan Pemeriksaan Berkala (PEKALA)
description: Panduan lengkap permohonan pemeriksaan berkala
hide_table_of_contents: true
sidebar_label: 'Pemeriksaan Berkala Loji'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 📌 Ringkasan Modul
Pemohon membuat permohonan pemeriksaan berkala dengan memilih senarai loji yang dikehendaki dan menghantar permohonan.

## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar **Pemeriksaan Berkala** adalah seperti berikut:
1. Penghuni dan Pemunya loji yang telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.

Syarat-syarat bagi status loji yang dibenarkan untuk **Pemeriksaan Berkala** adalah seperti berikut:
1. Aktif.   
2. Tidak Digunakan.

Jenis jentera yang terlibat bagi **Pemeriksaan Berkala** adalah seperti berikut:
1. PMA
2. PMA (Lif / Eskalator / Laluan Gerak)
3. PMD
4. PMT

## 🧭 Langkah-langkah Permohonan

<Tabs>
  <TabItem value="pemunya" label="Pemunya" default>
    <h2 className="print-only">Permohonan Pemeriksaan Berkala - Pemunya</h2>

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuLoji from '@site/src/components/loji/menu-loji';

<MenuLoji
    stepNumber={2}
    pageName="Pemeriksaan Berkala Loji"
    kategoriPermohonan="Pemeriksaan Berkala Loji Berperakuan"
    moduleType="Pemeriksaan Berkala - Pemunya" />

<div className="step-card">

### Langkah 3: Pengisian Borang Permohonan Pemeriksaan Berkala Loji

import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';

import imgMaklumatAm from '@site/assets/images/loji/pekala/tab_maklumat_am.png';

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Am"
    hasRujukan={true}
    tabImgSrc={imgMaklumatAm} />

---

import SenaraiLoji from '@site/src/components/loji/tab/senarai-loji';

import imgSenaraiLojiPemunya from '@site/assets/images/loji/pekala/tab_senarai_loji_pemunya.png';

<SenaraiLoji
    alphabetNumbering="B"
    tabNumber={2}
    tabName="Senarai Loji"
    tabImgSrc={imgSenaraiLojiPemunya}
    leftTableName="Senarai Loji"
    rightTableName="Senarai Loji Dipilih Untuk Pemeriksaan"
    hasDropdownSearch={true} />

---

import PengesahanSpesifikasi from '@site/src/components/loji/tab/pengesahan-spesifikasi';

import imgPengesahanSpesifikasi from '@site/assets/images/loji/pekala/tab_pengesahan_spesifikasi.png';

<PengesahanSpesifikasi
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Pengesahan Spesifikasi"
    tabImgSrc={imgPengesahanSpesifikasi} />

---

import SenaraiCaj from '@site/src/components/loji/tab/senarai-caj';

import imgSenaraiCaj from '@site/assets/images/loji/pekala/tab_senarai_caj.png';

<SenaraiCaj
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Senarai Caj"
    tabImgSrc={imgSenaraiCaj} />

---

import Perakuan from '@site/src/components/loji/tab/perakuan';

import imgPerakuan from '@site/assets/images/loji/pekala/tab_perakuan.png';

import imgMesejBerjaya from '@site/assets/images/loji/pekala/mesej_penghantaran_berjaya.png';

<Perakuan 
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PEKALA/XX/XXXXX"
    hasPayment={true} />

</div>

  </TabItem>
  <TabItem value="penghuni" label="Penghuni">
    <h2 className="print-only">Permohonan Pemeriksaan Berkala - Penghuni</h2>

<LoginStep 
    stepNumber={1}
    title="Akses Halaman Log Masuk MyKKP" />

<MenuLoji
    stepNumber={2}
    pageName="Pemeriksaan Berkala Loji"
    kategoriPermohonan="Pemeriksaan Berkala Loji Berperakuan"
    moduleType="Pemeriksaan Berkala - Penghuni" />

<div className="step-card">

### Langkah 3: Pengisian Borang Permohonan Pemeriksaan Berkala Loji

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Am"
    hasRujukan={true}
    tabImgSrc={imgMaklumatAm} />

import imgSenaraiLojiPenghuni from '@site/assets/images/loji/pekala/tab_senarai_loji_penghuni.png';

<SenaraiLoji
    alphabetNumbering="B"
    tabNumber={2}
    tabName="Senarai Loji"
    tabImgSrc={imgSenaraiLojiPenghuni} />

<PengesahanSpesifikasi
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Pengesahan Spesifikasi"
    tabImgSrc={imgPengesahanSpesifikasi} />

<SenaraiCaj
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Senarai Caj"
    tabImgSrc={imgSenaraiCaj} />

<Perakuan 
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PEKALA/XX/XXXXX"
    hasPayment={true} />

</div>

  </TabItem>
</Tabs>

import SemakStatus from '@site/src/components/loji/semak-status';

import imgSedangProses from '@site/assets/images/loji/pekala/halaman_permohonan_sedang_diproses.png'

import imgSelesaiProses from '@site/assets/images/loji/pekala/halaman_permohonan_selesai_diproses.png'

<SemakStatus 
    stepNumber={4}
    moduleName="PEKALA"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />

import WhatNext from '@site/src/components/loji/what-next';

<WhatNext
  canBatalPermohonan={true}
  hasPayment={true}
  linkPembatalan="pembatalan-permohonan"
  linkPembayaran="pembayaran" />