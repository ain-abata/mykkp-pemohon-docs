---
title: PEMBAHARUAN ORANG KOMPETEN HIGIEN 1 (JHI)
description: Panduan lengkap pembaharuan sijil orang kompeten Higien 1
hide_table_of_contents: true
sidebar_label: 'Pembaharuan'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pembaharuan Sijil Orang Kompeten Higien-1

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import PembaharuanOk from '../../../src/components/menu-renewal-ok';

import imgMaklumatOk from '@site/assets/images/orang-kompeten/pengapit/pembaharuan/menu-kiri.png';

import tambahMaklumatOk from '@site/assets/images/orang-kompeten/pengapit/pembaharuan/butang-pembaharuan.png';

<PembaharuanOk
  stepNumber={2}
  pageName="Orang Kompeten Higien 1"
  moduleName="OYKJHI"
  pageImgSrc={imgMaklumatOk}
  tambahImgSrc={tambahMaklumatOk}
/>

<div className="step-card">

### Langkah 3: Pengisian Borang Pembaharuan Orang Kompeten Higien-1

{/* Step A. Tab 1: Maklumat Am */}

import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm}/>

{/* Step B. Tab 2: Maklumat Majikan */}

import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={false}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Pengalaman Kerja */}
import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_pengalaman_kimia.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tambah_pengalaman_kimia.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step D. Tab 4: Maklumat CEP */}

import OkMaklumatCep from '../../../src/components/tab-ok/maklumat-cep';

import imgMaklumatCep from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_maklumat_cep.png';

import imgTambahMaklumatCep from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tambah_maklumat_cep.png';

import imgUploadMaklumatCep from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/upload_maklumat_cep.png';

<OkMaklumatCep
  alphabetNumbering="D"
  tabNumber={4}
  tabName="Maklumat CEP"
  tabImgSrc={imgMaklumatCep}
  tambahImgSrc={imgTambahMaklumatCep}
  uploadImgSrc={imgUploadMaklumatCep}/>


{/* Step E. Tab 5: Sijil Kompetensi */}

import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step F. Tab 6: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step G. Tab 7: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/higien-1/pembaharuan/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />
</div>

import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />























