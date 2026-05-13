---
title: PENDAFTARAN MEDICAL SURVEILLANCE (MS)
description: Panduan lengkap pendaftaran sijil Medical Surveillance
hide_table_of_contents: true
sidebar_label: 'Pendaftaran'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Medical Surveillance

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
  
import MenuOk from '../../../src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Medical Surveillance"
  okType="Doktor Kesihatan"
  hasDropdown={false}
  moduleName="[MS] - Medical Surveillance"
 />

<div className="step-card">

### Langkah 3: Pengisian Borang Pendaftaran Medical Surveillance

{/* Step A. Tab 1: Maklumat tempat Kerja */}

import MaklumatTempatKerja from '../../../src/components/medical-surveillance/maklumat-tempat-kerja';

import imgTab1TempatKerja from '@site/assets/images/orang-kompeten/medical-surveillance/tab1_maklumat_tempat_kerja.png';

import imgCarianTempatKerja from '@site/assets/images/orang-kompeten/medical-surveillance/popup_carian_tempat_kerja.png';


<MaklumatTempatKerja
  alphabetNumbering="A"
  tabNumber={1}
  tabName="Maklumat Tempat Kerja"
  tabImgSrc={imgTab1TempatKerja}
  carianImgSrc={imgCarianTempatKerja}
/>

{/* Step B. Tab 2: Maklumat Bahan Kimia */}
import MaklumatBahanKimia from '../../../src/components/medical-surveillance/maklumat-bahan-kimia';

import imgTab2BahanKimia from '@site/assets/images/orang-kompeten/medical-surveillance/tab2_maklumat_bahan_kimia.png';
import imgPopupBahanKimia from '@site/assets/images/orang-kompeten/medical-surveillance/popup_maklumat_bahan_kimia.png';

<MaklumatBahanKimia
  alphabetNumbering="B"
  tabNumber={2}
  tabName="Maklumat Bahan Kimia"
  tabImgSrc={imgTab2BahanKimia}
  popupImgSrc={imgPopupBahanKimia}
/>

{/* Step C. Tab 3: Maklumat Pekerja */}

import MaklumatPekerja from '../../../src/components/medical-surveillance/maklumat-pekerja';

import imgTab3MaklumatPekerja from '@site/assets/images/orang-kompeten/medical-surveillance/tab3_maklumat_pekerja.png';

<MaklumatPekerja
  alphabetNumbering="C"
  tabNumber={3}
  tabName="Maklumat Pekerja"
  tabImgSrc={imgTab3MaklumatPekerja}
/>

{/* Step D. Tab 4: Butiran Pemeriksaan Abnormal */}
import ButiranPemeriksaanAbnormal from '../../../src/components/medical-surveillance/butiran-pemeriksaan-abnormal';


import imgTab4Abnormal from '@site/assets/images/orang-kompeten/medical-surveillance/tab4_butiran_pemeriksaan_abnormal.png';
import imgPopupAbnormal from '@site/assets/images/orang-kompeten/medical-surveillance/popup_keputusan_pemeriksaan_abnormal.png';

<ButiranPemeriksaanAbnormal
  alphabetNumbering="D"
  tabNumber={4}
  tabName="Butiran Pemeriksaan Abnormal"
  tabImgSrc={imgTab4Abnormal}
  popupImgSrc={imgPopupAbnormal}
/>

{/* Step I. Tab 9: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/medical-surveillance/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step F. Tab 6: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/medical-surveillance/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />
</div>


import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />























