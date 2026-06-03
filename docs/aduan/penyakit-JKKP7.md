---
title: Pemberitahuan Pemberitahuan Keracunan dan Penyakit Pekerjaan - JKKP7
description: Panduan lengkap Pemberitahuan Pemberitahuan Keracunan dan Penyakit Pekerjaan - JKKP7
hide_table_of_contents: false
sidebar_label: 'Penyakit - JKKP7'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pemberitahuan Keracunan dan Penyakit Pekerjaan - JKKP7

import LoginStep from '@site/src/components/login-step';

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

import MenuAduan from '@site/src/components/kemalangan-aduan/menu-aduan';

<div className="step-card">

### Halaman Pemberitahuan Kemalangan

<MenuAduan
    stepNumber={2}
    pageName="Pemberitahuan Keracunan dan Penyakit Pekerjaan"
    kategoriPermohonan="Pemberitahuan Keracunan dan Penyakit Pekerjaan"
    moduleType="Pemberitahuan Keracunan dan Penyakit Pekerjaan (JKKP7)" />
</div>

<div className="step-card">

### Pengisian Borang Pemberitahuan Aduan

import TabSemakanPemberitahuan from '@site/src/components/kemalangan-aduan/tab/tab-semakan-pemberitahuan';

import imgSemakanPemberitahuan from '@site/assets/images/kemalangan-aduan/jkkp7/tab1_semakan_pemberitahuan.png';

<TabSemakanPemberitahuan
  tabNumber={1}
  tabName="Semakan Pemberitahuan"
  tabImgSrc={imgSemakanPemberitahuan}
/>
---

import TabMaklumatPemberitahu from '@site/src/components/kemalangan-aduan/tab/tab-maklumat-pemberitahu-jkkp7';

import imgOhd from '@site/assets/images/kemalangan-aduan/jkkp7/tab2_ohd.png';
import imgMajikan from '@site/assets/images/kemalangan-aduan//jkkp7/tab2_majikan.png';
import imgMaklumatInd from '@site/assets/images/kemalangan-aduan/jkkp7/tab2_maklumat_industri.png';
import popupImgSrc from '@site/assets/images/kemalangan-aduan/jkkp7/popup_carian_premis.png';

<TabMaklumatPemberitahu
  tabNumber={2}
  tabName="Maklumat Pemberitahu"
  ohdImgSrc={imgOhd}
  majikanImgSrc={imgMajikan}
  maklumatIndSrc={imgMaklumatInd}
  popupImgSrc={popupImgSrc}
/>
----

import TabTempatKejadian from '@site/src/components/kemalangan-aduan/tab/tab-tempat-kejadian-jkkp7';

import imgMaklumatKejadian from '@site/assets/images/kemalangan-aduan/jkkp7/tab3_tempat_kejadian.png';

<TabTempatKejadian
  tabNumber={3}
  tabName="Tempat kejadian"
  tabImgSrc={imgMaklumatKejadian}
  popupImgSrc={popupImgSrc}
/>

----

import TabOrangYangTerlibat from '@site/src/components/kemalangan-aduan/tab/tab-orang-yang-terlibat-jkkp7';

import imgOrangYangTerlibat from '@site/assets/images/kemalangan-aduan/jkkp7/tab4_orang_yang_terlibat.png';

import imgtambah from '@site/assets/images/kemalangan-aduan/jkkp7/tab4_tambah_pekerjaan.png';

import popupTambahKerja from '@site/assets/images/kemalangan-aduan/jkkp7/tab4_popup.png';

<TabOrangYangTerlibat
  tabNumber={4}
  tabName="Orang Yang Terlibat"
  tabImgSrc={imgOrangYangTerlibat}
  tambahImgSrc={imgtambah}
  popupImgSrc={popupTambahKerja}
/>
---

import TabMaklumatPenyakit from '@site/src/components/kemalangan-aduan/tab/tab-orang-yang-terlibat-jkkp7';

import imgmaklumatPenyakit from '@site/assets/images/kemalangan-aduan/jkkp7/tab5_maklumat_penyakit.png';


import imgtambahHosp from '@site/assets/images/kemalangan-aduan/jkkp7/tab5_maklumat_hospital.png';

<TabMaklumatPenyakit
  tabNumber={5}
  tabName="Maklumat Penyakit"
  tabImgSrc={imgmaklumatPenyakit}
  maklumatHospSrc={imgtambahHosp}
  popupImgSrc={popupTambahKerja}
/>
---

import TabKawalanRisiko from '@site/src/components/kemalangan-aduan/tab/tab-kawalan-risiko';

import imgKawalanRisiko from '@site/assets/images/kemalangan-aduan/jkkp7/tab6_kawalan_risiko.png';

<TabKawalanRisiko
  tabNumber={6}
  tabName="Kawalan Risiko"
  tabImgSrc={imgKawalanRisiko}
/>
---

import TabDokumenSokongan from '@site/src/components/kemalangan-aduan/tab/tab-dokumen-sokongan';

import imgDokumenSokongan from '@site/assets/images/kemalangan-aduan/jkkp7/tab7_dokumen_sokongan.png';

<TabDokumenSokongan
  tabNumber={7}
  tabName="Dokumen Sokongan"
  tabImgSrc={imgDokumenSokongan}
/>

---
import TabPerakuan from '@site/src/components/kemalangan-aduan/tab/tab-perakuan';

import imgPerakuan from '@site/assets/images/kemalangan-aduan/jkkp7/tab8_perakuan.png';

import imgMakluman from '@site/assets/images/kemalangan-aduan/jkkp7/popup_makluman.png';

<TabPerakuan
  tabNumber={8}
  tabName="Perakuan"
  moduleName="JKKP7"
  tabImgSrc={imgPerakuan}
  maklumanImgSrc={imgMakluman}
/>

</div>
import WhatNext from '@site/src/components/loji/what-next';

<WhatNext
  canBatalPermohonan={true}
  linkPembatalan="pembatalan-permohonan" />