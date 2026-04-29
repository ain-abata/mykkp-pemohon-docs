---
title: PENDAFTARAN ORANG KOMPETEN HIGIEN 1 (JHI)
description: Panduan lengkap pendaftaran sijil Orang Kompeten Higien 1
hide_table_of_contents: true
sidebar_label: 'Pendaftaran'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Orang Kompeten Higien 1

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuOk from '../../../src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Higien 1"
  okType="Pengurusan Kimia"
  hasDropdown={false}
  moduleName="[JHI] - Orang Kompeten Higien 1"
 />

 <div className="step-card">

### Langkah 3: Pengisian Borang Pendaftaran Orang Kompeten Higien 1

{/* Step A. Tab 1: Maklumat Am */}

import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm}/>

{/* Step B. Tab 2: Maklumat Majikan */}

import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={true}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Maklumat Kelayakan Akademik */}

import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualKelayakanAkademik from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_maklumat_kelayakan.png';

import imgTambahKelayakanAkademik from '@site/assets/images/orang-kompeten/higien-1/daftar/tambah_maklumat_kelayakan.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgJadualKelayakanAkademik}
    hasDropdown={true}
    tambahImgSrc={imgTambahKelayakanAkademik} />

{/* Step D. Tab 4: Pengalaman Kerja */}

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_pengalaman_kerja.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/higien-1/daftar/tambah_pengalaman_kerja.png';

<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step E. Tab 5: Kursus/Peperiksaan Berkaitan */}

import imgJadualKursusBerkaitan from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_kursus_berkaitan.png';

import imgTambahKursusBerkaitan from '@site/assets/images/orang-kompeten/higien-1/daftar/tambah_kursus_berkaitan.png';

<OkMaklumatJadual
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Kursus/Peperiksaan Berkaitan"
    tabImgSrc={imgJadualKursusBerkaitan}
    tambahImgSrc={imgTambahKursusBerkaitan} />

{/* Step F. Tab 6: Sijil Kompetensi */}

import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step G. Tab 7: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step H. Tab 8: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/higien-1/daftar/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />

</div>

import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />