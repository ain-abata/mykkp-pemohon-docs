---
title: PEMBAHARUAN PENAKSIR RISIKO BISING
description: Panduan lengkap pembaharuan sijil Penaksir Risiko Bising
hide_table_of_contents: true
sidebar_label: 'Pembaharuan'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pembaharuan Sijil Penaksir Risiko Bising

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import PembaharuanOk from '../../../src/components/menu-renewal-ok';

import imgMaklumatOk from '@site/assets/images/orang-kompeten/pengapit/pembaharuan/menu-kiri.png';

import tambahMaklumatOk from '@site/assets/images/orang-kompeten/pengapit/pembaharuan/butang-pembaharuan.png';

<PembaharuanOk
  stepNumber={2}
  pageName="Penaksir Risiko Bising"
  moduleName="OYKPEB"
  pageImgSrc={imgMaklumatOk}
  tambahImgSrc={tambahMaklumatOk}/>

<div className="step-card">

### Langkah 3: Pengisian Borang Pembaharuan Penaksir Risiko Bising

{/* Step A. Tab 1: Maklumat Am */}

import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm}/>

{/* Step B. Tab 2: Maklumat Majikan */}

import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={true}
    tabImgSrc={imgOkMaklumatMajikan} />


{/* Step C. Tab 3: Pengalaman Kerja */}
import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_pengalaman_bising.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tambah_pengalaman_bising.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step D. Tab 4: Maklumat CEP */}

import OkMaklumatCep from '../../../src/components/tab-ok/maklumat-cep';

import imgMaklumatCep from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_maklumat_cep.png';

import imgTambahMaklumatCep from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tambah_maklumat_cep.png';

import imgUploadMaklumatCep from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/upload_maklumat_cep.png';

<OkMaklumatCep
  alphabetNumbering="D"
  tabNumber={4}
  tabName="Maklumat CEP"
  tabImgSrc={imgMaklumatCep}
  tambahImgSrc={imgTambahMaklumatCep}
  uploadImgSrc={imgUploadMaklumatCep}/>

  {/* Step E. Tab 5: Kursus/Peperiksaan Berkaitan */}

import imgJadualKursusBerkaitan from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_kursus_berkaitan.png';

import imgTambahKursusBerkaitan from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tambah_kursus_berkaitan.png';

<OkMaklumatJadual
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Kursus/Peperiksaan Berkaitan"
    tabImgSrc={imgJadualKursusBerkaitan}
    tambahImgSrc={imgTambahKursusBerkaitan} />

{/* Step F. Tab 6: Sijil Kompetensi */}

import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step G. Tab 7: Maklumat Perubatan */}
import OkMaklumatPerubatanOHD from '@site/src/components/tab-ok/maklumat-perubatan-ohd';

import imgOkMaklumatPerubatan from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_maklumat_perubatan.png';

<OkMaklumatPerubatanOHD
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Maklumat Perubatan"
    tabImgSrc={imgOkMaklumatPerubatan} />

{/* Step H. Tab 8: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step I. Tab 9: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/risiko-bising/pembaharuan/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />
</div>

import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />