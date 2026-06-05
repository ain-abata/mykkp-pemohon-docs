---
title: Pemberitahuan Aduan
description: Panduan lengkap Pemberitahuan Aduan
hide_table_of_contents: false
sidebar_label: 'Aduan'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pemberitahuan Aduan berkaitan Keselamatan & Kesihatan Pekerjaan


<div className="step-card">

import LoginStep from '@site/src/components/login-step';

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

import MenuAduan from '@site/src/components/kemalangan-aduan/menu-aduan';

<div className="step-card">

### Halaman Pemberitahuan Aduan

<MenuAduan
    stepNumber={2}
    pageName="Pemberitahuan Aduan"
    kategoriPermohonan="Pemberitahuan Aduan"
    moduleType="Pemberitahuan Aduan (Hanya berkaitan Keselamatan dan Kesihatan Pekerjaan di tempat kerja sahaja)" />
</div>

<div className="step-card">

### Pengisian Borang Pemberitahuan Aduan

import TabButirPengadu from '@site/src/components/kemalangan-aduan/tab/tab-butir-pengadu';
import imgButirPengadu from '@site/assets/images/kemalangan-aduan/aduan/tab1_butir_pengadu.png';

<TabButirPengadu
  tabNumber={1}
  tabName="Butir Pengadu"
  tabImgSrc={imgButirPengadu}
/>
---

import TabPremisYangDiadu from '@site/src/components/kemalangan-aduan/tab/tab-premis-yang-diadu';

import imgPremisYangDiadu from '@site/assets/images/kemalangan-aduan/aduan/tab2_premis_yang_diadu.png';
import popupImgSrc from '@site/assets/images/kemalangan-aduan/aduan/popup_carian_premis.png';

<TabPremisYangDiadu
  tabNumber={2}
  tabName="Premis Yang Diadu"
  tabImgSrc={imgPremisYangDiadu}
  popupImgSrc={popupImgSrc}

/>

---
import TabButiranAduan from '@site/src/components/kemalangan-aduan/tab/tab-butiran-aduan';

import imgButiranAduan from '@site/assets/images/kemalangan-aduan/aduan/tab3_butiran_aduan.png';
import imgButiran from '@site/assets/images/kemalangan-aduan/aduan/butiran_aduan.png';


<TabButiranAduan
  tabNumber={3}
  tabName="Butiran Aduan"
  tabImgSrc={imgButiranAduan}
  butiranImgSrc={imgButiran}
/>
---
import TabLampiran from '@site/src/components/kemalangan-aduan/tab/tab-lampiran';

import imgLampiran from '@site/assets/images/kemalangan-aduan/aduan/tab4_lampiran.png';

<TabLampiran
  tabNumber={4}
  tabName="Lampiran"
  tabImgSrc={imgLampiran}
/>
---
import TabPerakuan from '@site/src/components/kemalangan-aduan/tab/tab-perakuan';

import imgPerakuan from '@site/assets/images/kemalangan-aduan/aduan/tab5_perakuan.png';
import imgMakluman from '@site/assets/images/kemalangan-aduan/aduan/popup_makluman.png';

<TabPerakuan
  tabNumber={5}
  tabName="Perakuan"
  moduleName="SAD"
  tabImgSrc={imgPerakuan}
  maklumanImgSrc={imgMakluman}
/>
</div>
import WhatNext from '@site/src/components/loji/what-next';

<WhatNext
  canBatalPermohonan={true}
  linkPembatalan="pembatalan-permohonan" />