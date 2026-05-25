---
title: Pemberitahuan Kemalangan - JKKP6
description: Panduan lengkap Pemberitahuan Kemalangan - JKKP6
hide_table_of_contents: false
sidebar_label: 'Kemalangan - JKKP6'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pemberitahuan Kemalangan - JKKP6

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
    pageName="Pemberitahuan Kemalangan"
    kategoriPermohonan="Pemberitahuan Kemalangan"
    moduleType="Pemberitahuan Kemalangan(JKKP6) (Hanya boleh diisi oleh pihak majikan atau PIC yang dilantik oleh majikan sendiri)" />

</div>

<div className="step-card">

### Pengisian Borang Pemberitahuan Aduan

import TabSemakanPemberitahuan from '@site/src/components/kemalangan-aduan/tab/tab-semakan-pemberitahuan';

import imgSemakanPemberitahuan from '@site/assets/images/kemalangan-aduan/jkkp6/tab1_semakan_pemberitahuan.png';

<TabSemakanPemberitahuan
  tabNumber={1}
  tabName="Semakan Pemberitahuan"
  tabImgSrc={imgSemakanPemberitahuan}
/>
---

import TabMaklumatPemberitahu from '@site/src/components/kemalangan-aduan/tab/tab-maklumat-pemberitahu';

import imgMaklumatPemberitahu from '@site/assets/images/kemalangan-aduan/jkkp6/tab2_maklumat_pemberitahu.png';

import popupImgSrc from '@site/assets/images/kemalangan-aduan/jkkp6/popup_carian_premis.png';

<TabMaklumatPemberitahu
  tabNumber={2}
  tabName="Maklumat Pemberitahu"
  tabImgSrc={imgMaklumatPemberitahu}
  popupImgSrc={popupImgSrc}

/>

---

import TabOrangYangTerlibat from '@site/src/components/kemalangan-aduan/tab/tab-orang-yang-terlibat';

import imgOrangYangTerlibat from '@site/assets/images/kemalangan-aduan/jkkp6/tab3_orang_yang_terlibat.png';

import imgOrganisasi from '@site/assets/images/kemalangan-aduan/jkkp6/organisasi_yang_terlibat.png';


<TabOrangYangTerlibat
  tabNumber={3}
  tabName="Orang Yang Terlibat"
  tabImgSrc={imgOrangYangTerlibat}
  organisasiImgSrc={imgOrganisasi}
  popupImgSrc={popupImgSrc}
/>

---

import TabMaklumatKemalangan from '@site/src/components/kemalangan-aduan/tab/tab-maklumat-kemalangan';

import imgMaklumatKemalangan from '@site/assets/images/kemalangan-aduan/jkkp6/tab4_maklumat_kemalangan.png';

<TabMaklumatKemalangan
  tabNumber={4}
  tabName="Maklumat Kemalangan"
  tabImgSrc={imgMaklumatKemalangan}
/>
---
import TabLampiran from '@site/src/components/kemalangan-aduan/tab/tab-lampiran';

import imgLampiran from '@site/assets/images/kemalangan-aduan/jkkp6/tab5_lampiran.png';

<TabLampiran
  tabNumber={5}
  tabName="Lampiran"
  tabImgSrc={imgLampiran}
/>
---
import TabPerakuan from '@site/src/components/kemalangan-aduan/tab/tab-perakuan';

import imgPerakuan from '@site/assets/images/kemalangan-aduan/jkkp6/tab6_perakuan.png';

import imgMakluman from '@site/assets/images/kemalangan-aduan/jkkp6/popup_makluman.png';

<TabPerakuan
  tabNumber={6}
  tabName="Perakuan"
  moduleName="JKKP6"
  tabImgSrc={imgPerakuan}
  maklumanImgSrc={imgMakluman}
/>
</div>
import WhatNext from '@site/src/components/loji/what-next';

<WhatNext
  canBatalPermohonan={true}
  linkPembatalan="pembatalan-permohonan" />