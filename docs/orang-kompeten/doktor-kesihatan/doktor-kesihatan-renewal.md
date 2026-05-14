---
title: PEMBAHARUAN DOKTOR KESIHATAN PEKERJAAN (OHD)
description: Panduan lengkap pembaharuan sijil Doktor Kesihatan Pekerjaan
hide_table_of_contents: true
sidebar_label: 'Pembaharuan'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pembaharuan Sijil Doktor Kesihatan Pekerjaan

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import PembaharuanOk from '../../../src/components/menu-renewal-ok';

import imgMaklumatOk from '@site/assets/images/orang-kompeten/pengapit/pembaharuan/menu-kiri.png';

import tambahMaklumatOk from '@site/assets/images/orang-kompeten/pengapit/pembaharuan/butang-pembaharuan.png';

<PembaharuanOk
  stepNumber={2}
  pageName="Doktor Kesihatan Pekerjaan"
  moduleName="OYKOHD"
  pageImgSrc={imgMaklumatOk}
  tambahImgSrc={tambahMaklumatOk}
/>  

<div className="step-card">

### Langkah 3: Pengisian Borang Pembaharuan Doktor Kesihatan Pekerjaan

{/* Step A. Tab 1: Maklumat Am */}

import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm}/>

{/* Step B. Tab 2: Maklumat Majikan */}

import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={true}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Maklumat CEP */}

import OkMaklumatCep from '../../../src/components/tab-ok/maklumat-cep';

import imgMaklumatCep from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tab_maklumat_cep.png';

import imgTambahMaklumatCep from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tambah_maklumat_cep.png';

import imgUploadMaklumatCep from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/upload_maklumat_cep.png';

<OkMaklumatCep
  alphabetNumbering="C"
  tabNumber={3}
  tabName="Maklumat CEP"
  tabImgSrc={imgMaklumatCep}
  tambahImgSrc={imgTambahMaklumatCep}
  uploadImgSrc={imgUploadMaklumatCep}/> 

{/* Step D. Tab 4: Pengalaman Kerja */}
import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tab_pengalaman_perubatan.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tambah_pengalaman_perubatan.png';

<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step E. Tab 5: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step F. Tab 6: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/doktor-kesihatan/pembaharuan/tab_perakuan.png';

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
