---
title: Pemberitahuan Pembukaan Loji (PBUKA)
description: Panduan lengkap pemberitahuan pembukaan loji
hide_table_of_contents: true
sidebar_label: 'Pemberitahuan Pembukaan Loji'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 📌 Ringkasan Modul
Pemohon membuat **Pemberitahuan Pembukaan Loji (PBUKA)** dengan memilih loji, mengisi perihal pemberitahuan, membuat carian FYK dan memuat naik dokumen sokongan yang diperlukan sebelum menghantar pemberitahuan. 
 
## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar **Pemberitahuan Pembukaan Loji** adalah seperti berikut:
1. Penghuni dan Pemunya loji yang telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.

Syarat-syarat bagi status loji yang dibenarkan untuk **Pemberitahuan Pembukaan Loji** adalah seperti berikut:
1. Aktif.   
2. Tidak Digunakan.


Jenis jentera yang terlibat bagi **Pemberitahuan Pembukaan Loji** adalah seperti berikut:
1. PMA
2. PMA (Lif / Eskalator / Laluan Gerak)
3. PMD
4. PMT


## 📂 Dokumen Sokongan
Pemohon perlu menyediakan dokumen yang diperlukan bagi permohonan **Pemeriksaan Permulaan** seperti:

<Admonition type="important">
    Dokumen yang bertanda ** wajib dimuat naik
</Admonition>

<h3 className="print-only">A. Dandang Stim / Bejana Tekanan</h3>

      | Bil. | Pendaftaran Baru                                          | 
      |------|-----------------------------------------                  |
      | 1    | Surat Pemberitahuan                                       |
      | 2    | Surat Lantikan Firma Kompeten dari pemunya atau penghuni  | 
      | 3    | HIRARC                                                    |
      | 4    | SOP                                                       |      
      | 5    | Lain-Lain Dokumen Sokongan (Jika Perlu)                   | 


## 🧭 Langkah-langkah Permohonan

<Tabs>
  <TabItem value="pemunya" label="Pemunya" default>
    <h2 className="print-only">Pemberitahuan Pembukaan Loji - Pemunya</h2>

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuLoji from '@site/src/components/loji/menu-loji';

<MenuLoji
    stepNumber={2}
    pageName="Pemberitahuan Pembukaan Loji"
    kategoriPermohonan="Pemberitahuan Berkaitan Loji"
    moduleType="Pemberitahuan Pembukaan Loji oleh Pemunya Loji" />

<div className="step-card">

### Langkah 3: Pengisian Borang Permohonan Pemberitahuan Pembukaan Loji

import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';

import imgMaklumatAm from '@site/assets/images/loji/pbuka/tab_maklumat_am.png';

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Am"
    hasRujukan={false}
    tabImgSrc={imgMaklumatAm} />
---

import TabSenaraiLoji from '@site/src/components/loji/tab/senarai-loji-pbuka';

import imgTab2 from '@site/assets/images/loji/pbuka/tab2_senarai_loji.png';

import imgPopupLoji from '@site/assets/images/loji/pbuka/popup_carian_loji.png';

<TabSenaraiLoji
  alphabetNumbering="B"
  tabNumber={2}
  tabName="Senarai Loji"
  tabImgSrc={imgTab2}
  popupImgSrc={imgPopupLoji}
/>
---

import TabPerihalPemberitahuan from '@site/src/components/loji/tab/perihal-pemberitahuan-pbuka';

import imgTab3 from '@site/assets/images/loji/pbuka/tab3_perihal.png';

<TabPerihalPemberitahuan
  alphabetNumbering="C"
  tabNumber={3}
  tabName="Perihal Pemberitahuan"
  tabImgSrc={imgTab3}
/>
---

import TabMaklumatFyk from '@site/src/components/loji/tab/maklumat-fyk-pbuka';

import imgTab4 from '@site/assets/images/loji/pbuka/tab4_fyk.png';

import imgPopupFYK from '@site/assets/images/loji/pbuka/popup_carian_fyk.png';

<TabMaklumatFyk
  alphabetNumbering="D"
  tabNumber={4}
  tabName="Maklumat FYK"
  tabImgSrc={imgTab4}
  popupImgSrc={imgPopupFYK}
/>
---

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';

import imgDokSokongan from '@site/assets/images/loji/pbuka/tab_dokumen_sokongan.png';

<DokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokSokongan} />

---
import Perakuan from '@site/src/components/loji/tab/perakuan';

import imgPerakuan from '@site/assets/images/loji/pbuka/tab_perakuan.png';

import imgMesejBerjaya from '@site/assets/images/loji/pbuka/mesej_penghantaran_berjaya.png';

<Perakuan 
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PBUKA/XX/XXXXX"
    hasPayment={false} />
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
---

<TabSenaraiLoji
  alphabetNumbering="B"
  tabNumber={2}
  tabName="Senarai Loji"
  tabImgSrc={imgTab2}
  popupImgSrc={imgPopupLoji}
/>
---

<TabPerihalPemberitahuan
  alphabetNumbering="C"
  tabNumber={3}
  tabName="Perihal Pemberitahuan"
  tabImgSrc={imgTab3}
/>
---

<TabMaklumatFyk
  alphabetNumbering="D"
  tabNumber={4}
  tabName="Maklumat FYK"
  tabImgSrc={imgTab4}
  popupImgSrc={imgPopupFYK}
/>
---

<DokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokSokongan} />

---

<Perakuan 
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PBUKA/XX/XXXXX"
    hasPayment={false} />
</div>
</TabItem>
</Tabs>

import SemakStatus from '@site/src/components/loji/semak-status';

import imgSedangProses from '@site/assets/images/loji/pbuka/halaman_permohonan_sedang_diproses.png'

import imgSelesaiProses from '@site/assets/images/loji/pbuka/halaman_permohonan_selesai_diproses.png'

<SemakStatus 
    stepNumber={4}
    moduleName="PBUKA"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />

import WhatNext from '@site/src/components/loji/what-next';

<WhatNext
  canBatalPermohonan={true}
  linkPembatalan="pembatalan-permohonan" />