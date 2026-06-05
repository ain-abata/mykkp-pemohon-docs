---
title: Pemberitahuan Pembaikan Loji (PBAIK)
description: Panduan lengkap pemberitahuan pembaikan loji
hide_table_of_contents: false
sidebar_label: 'Pemberitahuan Pembaikan Loji'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 📌 Ringkasan Modul
Pemohon membuat **Pemberitahuan Pembaikan Loji (PBAIK)**  dalam sistem adalah proses yang membolehkan pemohon untuk membuat permohonan bagi pemohon yang ingin menjalankan pembaikan loji bagi tujuan tertentu. Proses permohonan ini melibatkan beberapa langkah penting iaitu: 

<ul>
<li>Pemohon perlu memilih loji yang hendak dibaiki dari senarai loji yang terdapat dalam sistem</li> 
<li>Pemohon perlu memberi perihal pemberitahuan bagi standard pembaikan loji tersebut </li>
 </ul>

## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar **Pemberitahuan Pembaikan Loji** adalah seperti berikut:
1. Penghuni (Tempat Kerja) yang telah berdaftar sebagai **PATK Tahap 1** dan **Tahap 2** pada sistem MyKKP 
2. Pemunya loji yang telah berdaftar sebagai **PATK Tahap 1** dan **Tahap 2** pada sistem MyKKP 

Syarat-syarat bagi status loji yang dibenarkan untuk **Pemberitahuan Pembaikan Loji** adalah seperti berikut:
1. Aktif.   
2. Tidak Digunakan.
3. Dilupuskan.


Jenis jentera yang terlibat bagi **Pemberitahuan Pembaikan Loji** adalah seperti berikut:
1. PMA (Lif / Eskalator / Laluan Gerak)
2. PMD
3. PMT 


## 📂 Dokumen Sokongan
Pemohon perlu menyediakan dokumen yang diperlukan bagi permohonan **Pembaikan Loji** seperti:

<Admonition type="important">
    Dokumen yang bertanda ** wajib dimuat naik
</Admonition>

<h3 className="print-only">A. Dandang Stim / Bejana Tekanan</h3>

      | Bil. | Pendaftaran Baru                                          | 
      |------|-----------------------------------------                  |
      | 1    | Surat Pemberitahuan                                       |
      | 2    | Surat Lantikan Firma Kompeten dari pemunya atau penghuni  | 
      | 3    | Gambar bahagian dibaiki atau penggantian                  |
      | 4    | Lampiran Jadual Perbandingan Spesifikasi Sedia Ada Dengan Naik Taraf Yang Disahkan Oleh Orang Kompeten (Individu) Tahap 1                                                        |      
      | 5    | Lain-Lain Dokumen Sokongan (Jika Perlu)                   | 


## 🧭 Langkah-langkah Permohonan

<Tabs>
  <TabItem value="pemunya" label="Pemunya" default>
    <h2 className="print-only">Pemberitahuan Pembukaan Loji - Pemunya</h2>
      <div className="toc-only" style={{ marginLeft: "35px"}}>    
        ## Pemunya
      </div>  


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

### Masuk Ke Halaman Permohonan Pembaikan Loji

import MenuLoji from '@site/src/components/loji/menu-loji';

<MenuLoji
    stepNumber={2}
    pageName="Pemberitahuan Pembaikan Loji"
    kategoriPermohonan="Pemberitahuan Berkaitan Loji"
    moduleType="Pemberitahuan Pembaikan Loji oleh Pemunya Loji" 
/>

</div>

<div className="step-card">

### Pengisian Borang Permohonan Pemberitahuan Pembaikan Loji

import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';
import imgMaklumatAm from '@site/assets/images/loji/pbaik/tab_maklumat_am.png';

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Am"
    hasRujukan={false}
    tabImgSrc={imgMaklumatAm} 
/>
---

import TabSenaraiLoji from '@site/src/components/loji/tab/senarai-loji-pbuka';
import imgTab2 from '@site/assets/images/loji/pbaik/tab2_senarai_loji.png';
import imgPopupLoji from '@site/assets/images/loji/pbaik/popup_carian_loji.png';

<TabSenaraiLoji
  alphabetNumbering="B"
  tabNumber={2}
  tabName="Senarai Loji"
  tabImgSrc={imgTab2}
  popupImgSrc={imgPopupLoji}
/>
---

import TabPerihalPemberitahuan from '@site/src/components/loji/tab/perihal-pemberitahuan-pbuka';
import imgTab3 from '@site/assets/images/loji/pbaik/tab3_perihal.png';

<TabPerihalPemberitahuan
  alphabetNumbering="C"
  tabNumber={3}
  tabName="Perihal Pemberitahuan"
  tabImgSrc={imgTab3}
/>
---

import TabMaklumatFyk from '@site/src/components/loji/tab/maklumat-fyk-pbuka';
import imgTab4 from '@site/assets/images/loji/pbaik/tab4_fyk.png';
import imgPopupFYK from '@site/assets/images/loji/pbaik/popup_carian_fyk.png';

<TabMaklumatFyk
  alphabetNumbering="D"
  tabNumber={4}
  tabName="Maklumat FYK"
  tabImgSrc={imgTab4}
  popupImgSrc={imgPopupFYK}
/>
---

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';
import imgDokSokongan from '@site/assets/images/loji/pbaik/tab_dokumen_sokongan.png';

<DokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokSokongan} 
/>

---
import Perakuan from '@site/src/components/loji/tab/perakuan';
import imgPerakuan from '@site/assets/images/loji/pbaik/tab_perakuan.png';
import imgMesejBerjaya from '@site/assets/images/loji/pbaik/mesej_penghantaran_berjaya.png';

<Perakuan 
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PBAIK/XX/XXXXX"
    hasPayment={false} 
  />
</div>

</TabItem>
  <TabItem value="penghuni" label="Penghuni">
    <h2 className="print-only">Permohonan Pemberitahuan Pembaikan Loji - Penghuni</h2>
    <div className="toc-only" style={{ marginLeft: "35px"}}>    
        ## Penghuni
    </div>

<div className="step-card">

### Akses Halaman Log Masuk MyKKP

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP"
  headerId="toLoginStep"
/>

</div>

<div className="step-card">

### Masuk Ke Halaman Permohonan Pembaikan Loji

<MenuLoji
    stepNumber={2}
    pageName="Pemberitahuan Pembaikan Loji"
    kategoriPermohonan="Pemberitahuan Berkaitan Loji"
    moduleType="Pemberitahuan Pembaikan Loji oleh penghuni Loji" 
/>

</div>

<div className="step-card">

### Pengisian Borang Permohonan Pemberitahuan Pembaikan Loji

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
    tabImgSrc={imgDokSokongan} 
/>

---

<Perakuan 
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PBAIK/XX/XXXXX"
    hasPayment={false} 
/>
</div>
</TabItem>
</Tabs>

<div className="page-break"></div>

## 🔍 Semak Status Permohonan PBAIK

<div className="step-card">

import SemakStatus from '@site/src/components/loji/semak-status';
import imgSedangProses from '@site/assets/images/loji/pbaik/halaman_permohonan_sedang_diproses.png'
import imgSelesaiProses from '@site/assets/images/loji/pbaik/halaman_permohonan_selesai_diproses.png'

<SemakStatus 
    stepNumber={4}
    moduleName="PBAIK"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />

</div>
import WhatNext from '@site/src/components/loji/what-next';

<WhatNext
  canBatalPermohonan={true}
  linkPembatalan="pembatalan-permohonan" 
/>