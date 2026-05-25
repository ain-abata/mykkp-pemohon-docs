---
title: Pemberitahuan Projek dan Tapak Pembinaan (JKKP12) Sebagai Klien
description: Panduan lengkap permohonan pemberitahuan berkenaan JKKP12 klien 
hide_table_of_contents: false
sidebar_label: 'Klien'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

## 📌 Ringkasan Modul

**Pemberitahuan Projek dan Tapak Pembinaan (JKKP12)** adalah modul yang digunakan untuk membuat pemberitahuan berkaitan projek dan tapak pembinaan kepada pihak JKKP.

Modul ini melibatkan beberapa peranan penting seperti klien, pemberitahu, kontraktor prinsipal, kontraktor kerja pembinaan, pereka bentuk prinsipal dan pereka bentuk kerja pembinaan.

<Admonition type="tip">
    **Klien** adalah mana-mana prinsipal atau mana-mana orang yang baginya suatu projek dijalankan.
</Admonition>

## 📘 Glosari

Berikut merupakan kata kunci peranan yang terlibat dalam **Pemberitahuan Projek dan Tapak Pembinaan** sebagai rujukan.

| Bil. | Kata Kunci  | Keterangan                    |
|------|------------ |-------------------------------|
| 1.   | Klien       | Klien                         |
| 2.   | Pemberitahu | Wakil Klien Domestik          |
| 3.   | PC          | Kontraktor Prinsipal          |
| 4.   | CC          | Kontraktor Kerja Pembinaan    |
| 5.   | PD          | Pereka Bentuk Prinsipal       |
| 6.   | CD          | Pereka Bentuk Kerja Pembinaan |

## 📋 Syarat Pemberitahu

Kriteria pemberitahu yang dibenarkan untuk menghantar pemberitahuan JKKP 12 adalah seperti berikut:
- Klien yang telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.

## 🧭 Langkah-langkah Pemberitahuan dan Tapak Pembinaan Projek (JKKP12) - Klien

import LoginStep from '@site/src/components/login-step';

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

<div className="step-card">

### Halaman Permohonan Pemberitahuan Projek

import MenuLoji from '@site/src/components/JKKP12/menu-jkkp12';

<MenuLoji
    stepNumber={2}
    pageName="Pemberitahuan Projek"
    kategoriPermohonan="Pemberitahuan Projek Pembinaan"
    moduleType="Pemberitahuan JKKP12- Klien" />
</div>

<div className="step-card">

### Pemberitahuan Projek- Klien

import MaklumatAm from '@site/src/components/jkkp12/maklumat-am';
import imgMaklumatAm from '@site/assets/images/jkkp12/klien/maklumat-am.png';
import imgmaklumatHubungan from '@site/assets/images/jkkp12/klien/maklumat-hubungan.png';

<MaklumatAm
    tabNumber={1}
    tabImgSrc={imgMaklumatAm}
    maklumatHubunganImgSrc={imgmaklumatHubungan}
     />
    
---

import MaklumatProjek from '@site/src/components/jkkp12/maklumat-projek';

import maklumatProjekTabImg from '@site/assets/images/jkkp12/klien/maklumat-projek.png';
import maklumatPegawaiKlienImg from '@site/assets/images/jkkp12/klien/maklumat-pegawai-klien.png';


  <MaklumatProjek
    tabNumber={2}
    tabImgSrc={maklumatProjekTabImg}
    maklumatPegawaiImgSrc={maklumatPegawaiKlienImg}
    id="toMenuStep" />
    
---
 
import MaklumatTapak from '@site/src/components/jkkp12/maklumat-tapak';

import maklumatTapakTabImg from '@site/assets/images/jkkp12/klien/maklumat-tapak.png';

  <MaklumatTapak
    tabNumber={3}
    tabImgSrc={maklumatTapakTabImg}
  />
---

import Perakuan from '@site/src/components/jkkp12/perakuan';

import PerakuanImg from '@site/assets/images/jkkp12/klien/perakuan.png';
import mesejBerjayaImg from '@site/assets/images/jkkp12/klien/mesej-berjaya.png';

<Perakuan
    tabNumber={4}
    tabImgSrc={PerakuanImg}
    mesejBerjayaImgSrc={mesejBerjayaImg}
  />
</div>

<div className="step-card">
<a id="pemberitahuan-tapak-pembinaan"></a>

### Pemberitahuan Tapak Pembinaan Projek

import MaklumatProjekTapakPembinaan from '@site/src/components/jkkp12/maklumat-projek-tapak-pembinaan';


import maklumatProjekImg from '@site/assets/images/jkkp12/klien/maklumat-projek-tapak-pembinaan.png';


  <MaklumatProjekTapakPembinaan
    tabNumber={1}
    tabImgSrc={maklumatProjekImg}
  />
---

import MaklumatTapakTapakPembinaan from '@site/src/components/jkkp12/maklumat-tapak-tapak-pembinaan';

import maklumatTapakImg from '@site/assets/images/jkkp12/klien/maklumat-tapak-tapak-pembinaan.png';

import tambahKategoriKerjaImg from '@site/assets/images/jkkp12/klien/tambah-kategori-kerja-tapak-pembinaan.png';

import popupKategoriKerjaImg from '@site/assets/images/jkkp12/klien/popup-kategori-kerja-tapak-pembinaan.png';
  
  <MaklumatTapakTapakPembinaan
    tabNumber={2}
    tabImgSrc={maklumatTapakImg}
    tambahBtnImgSrc={tambahKategoriKerjaImg}
    popupKategoriKerjaImgSrc={popupKategoriKerjaImg}
  />
---

import MaklumatKemajuanTapakPembinaan from '@site/src/components/jkkp12/maklumat-kemajuan-tapak-pembinaan';

import maklumatKemajuanImg from '@site/assets/images/jkkp12/klien/maklumat-kemajuan-tapak-pembinaan.png';



  <MaklumatKemajuanTapakPembinaan
    tabNumber={3}
    tabImgSrc={maklumatKemajuanImg}
  />
---

import MaklumatKontraktorTapakPembinaan from '@site/src/components/jkkp12/maklumat-kontraktor-tapak-pembinaan';

import maklumatKontraktorTabImg from '@site/assets/images/jkkp12/klien/maklumat-kontraktor-tapak-pembinaan.png';

import maklumatKontraktorImg from '@site/assets/images/jkkp12/klien/bahagian-maklumat-kontraktor-tapak-pembinaan.png';

import popupMaklumatKontraktorImg from '@site/assets/images/jkkp12/klien/popup-maklumat-kontraktor-tapak-pembinaan.png';

import pilihanKontraktorPrinsipalImg from '@site/assets/images/jkkp12/klien/pilihan-kontraktor-prinsipal-tapak-pembinaan.png';

import popupPilihanKontraktorImg from '@site/assets/images/jkkp12/klien/popup-pilihan-kontraktor-tapak-pembinaan.png';


  <MaklumatKontraktorTapakPembinaan
    tabNumber={4}
    tabImgSrc={maklumatKontraktorTabImg}
    maklumatKontraktorImgSrc={maklumatKontraktorImg}
    popupMaklumatKontraktorImgSrc={popupMaklumatKontraktorImg}
    pilihanKontraktorPrinsipalImgSrc={pilihanKontraktorPrinsipalImg}
    popupPilihanKontraktorImgSrc={popupPilihanKontraktorImg}
  />
---
import MaklumatRekaBentukTapakPembinaan from '@site/src/components/jkkp12/maklumat-reka-bentuk-tapak-pembinaan';

import maklumatRekaBentukTabImg from '@site/assets/images/jkkp12/klien/maklumat-reka-bentuk-tapak-pembinaan.png';

import maklumatPerekaBentukImg from '@site/assets/images/jkkp12/klien/bahagian-maklumat-pereka-bentuk-tapak-pembinaan.png';

import popupMaklumatPerekaBentukImg from '@site/assets/images/jkkp12/klien/popup-maklumat-pereka-bentuk-tapak-pembinaan.png';

import pilihanPerekaBentukPrinsipalImg from '@site/assets/images/jkkp12/klien/pilihan-pereka-bentuk-prinsipal-tapak-pembinaan.png';

import popupPilihanPerekaBentukImg from '@site/assets/images/jkkp12/klien/popup-pilihan-pereka-bentuk-tapak-pembinaan.png';

  <MaklumatRekaBentukTapakPembinaan
    tabNumber={5}
    tabImgSrc={maklumatRekaBentukTabImg}
    maklumatPerekaBentukImgSrc={maklumatPerekaBentukImg}
    popupMaklumatPerekaBentukImgSrc={popupMaklumatPerekaBentukImg}
    pilihanPerekaBentukPrinsipalImgSrc={pilihanPerekaBentukPrinsipalImg}
    popupPilihanPerekaBentukImgSrc={popupPilihanPerekaBentukImg}
  />
  ---
import MaklumatBilanganPekerjaTapakPembinaan from '@site/src/components/jkkp12/maklumat-bilPekerja-tapak-pembinaan';

import maklumatBilPekerjaImg from '@site/assets/images/jkkp12/klien/maklumat-bilangan-pekerja.png';

  <MaklumatBilanganPekerjaTapakPembinaan
    tabNumber={6}
    tabImgSrc={maklumatBilPekerjaImg}
  />
---

import MaklumatOrangKompeten from '@site/src/components/jkkp12/maklumat-orang-kompeten-tapak-pembinaan';

import maklumatOrangKompetenTabImg from '@site/assets/images/jkkp12/klien/maklumat-orang-kompeten-tapak-pembinaan.png';

import maklumatOYKSHOImg from '@site/assets/images/jkkp12/klien/maklumat-OYKSHO-tapak-pembinaan.png';

import popupMaklumatOYKSHOImg from '@site/assets/images/jkkp12/klien/popup-maklumat-OYKSHO-pembinaan.png';

import maklumatOYKSSSImg from '@site/assets/images/jkkp12/klien/maklumat-OYKSSS-tapak-pembinaan.png';

import popupMaklumatOYKSSSImg from '@site/assets/images/jkkp12/klien/popup-maklumat-OYKSSS-pembinaan.png';

import maklumatOYKLainImg from '@site/assets/images/jkkp12/klien/maklumat-OYKLain-tapak-pembinaan.png';

import popupMaklumatOYKLainImg from '@site/assets/images/jkkp12/klien/popup-OYKLain-tapak-pembinaan.png';

  <MaklumatOrangKompeten
    tabNumber={7}
    tabImgSrc={maklumatOrangKompetenTabImg}
    maklumatOYKSHOImgSrc={maklumatOYKSHOImg}
    popupMaklumatOYKSHOImgSrc={popupMaklumatOYKSHOImg}
    maklumatOYKSSSImgSrc={maklumatOYKSSSImg}
    popupMaklumatOYKSSSImgSrc={popupMaklumatOYKSSSImg}
    maklumatOYKLainImgSrc={maklumatOYKLainImg}
    popupMaklumatOYKLainImgSrc={popupMaklumatOYKLainImg}
  />
  ---

import MaklumatOrangTerlibat from '@site/src/components/jkkp12/maklumat-reka-bentuk-tapak-pembinaan';

import maklumatOrangTerlibatTabImg from '@site/assets/images/jkkp12/klien/maklumat-orang-terlibat.png';

import maklumatOrangDitetapkanImg from '@site/assets/images/jkkp12/klien/maklumat-orang-ditetapkan.png';

import popupMaklumatOrangDitetapkanImg from '@site/assets/images/jkkp12/klien/popup-orang-ditetapkan.png';

import maklumatSenaraiPembantuImg from '@site/assets/images/jkkp12/klien/maklumat-senarai-pembantu.png';

import popupMaklumatSenaraiPembantuImg from '@site/assets/images/jkkp12/klien/popup-senarai-pembantu.png';

  <MaklumatRekaBentukTapakPembinaan
    tabNumber={5}
    tabImgSrc={maklumatOrangTerlibatTabImg}
    maklumatOrangDitetapkanImgSrc={maklumatOrangDitetapkanImg}
    popupMaklumatOrangDitetapkanImgSrc={popupMaklumatOrangDitetapkanImg}
    maklumatSenaraiPembantuImgSrc={maklumatSenaraiPembantuImg}
    popupMaklumatSenaraiPembantuImgSrc={popupMaklumatSenaraiPembantuImg}
  />
  ---
import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/jkkp12/klien/dokumen-sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

6. Klik pada butang Simpan untuk menyimpan Maklumat Pemberitahuan Tapak Pembinaan yang telah diisi. Skrin akan memaparkan kembali halaman Pemberitahuan Projek. 
</div>

<div className="step-card">
  <h3>Apa yang boleh anda lakukan seterusnya</h3>
  <ul>
    <li><Link to="pengaktifan-tapak">Bagaimana ingin mengaktifkan tapak?</Link></li>
  </ul>
</div>