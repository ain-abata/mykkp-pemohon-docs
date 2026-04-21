---
title: Pendaftaran Sijil Operator Dandang Stim (Gred 1)
description: Panduan lengkap pendaftaran sijil operator dandang stim gred 1
hide_table_of_contents: true
sidebar_label: 'Operator Dandang Stim Gred 1'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Operator Dandang Stim (Gred 1)

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuOk from '@site/src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Operator Dandang Stim (Gred 1)"
  okType="Keselamatan"
  hasDropdown={true}
  moduleName="[DES] - Operator Dandang Stim"
  moduleType="Gred 1" />

<div className="step-card">

### Langkah 3: Pengisian Borang Pendaftaran Operator Dandang Stim Gred 1

{/* Step A. Tab 1: Maklumat Am */}
import OkMaklumatAm from '@site/src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={true}
    tabImgSrc={imgOkMaklumatAm} />

{/* Step B. Tab 2: Maklumat Majikan */}
import OkMaklumatMajikan from '@site/src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={true}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Maklumat Kelayakan Akademik */}
import OkMaklumatJadual from '@site/src/components/tab-ok/maklumat-jadual';

import imgJadualKelayakanAkademik from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_kelayakan_akademik.png';

import imgTambahKelayakanAkademik from '@site/assets/images/orang-kompeten/ods-gred2/tambah_maklumat_kelayakan_akademik.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgJadualKelayakanAkademik}
    tambahImgSrc={imgTambahKelayakanAkademik} />

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/ods-gred2/tab_pengalaman_kerja.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/ods-gred2/tambah_pengalaman_kerja.png';

{/* Step D. Tab 4: Pengalaman Kerja */}
<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

import imgJadualKursusBerkaitan from '@site/assets/images/orang-kompeten/ods-gred2/tab_kursus_berkaitan.png';

import imgTambahKursusBerkaitan from '@site/assets/images/orang-kompeten/ods-gred2/tambah_kursus_berkaitan.png';

{/* Step E. Tab 5: Kursus Berkaitan */}
<OkMaklumatJadual
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Kursus Berkaitan"
    tabImgSrc={imgJadualKursusBerkaitan}
    tambahImgSrc={imgTambahKursusBerkaitan} />

import imgJadualPeperiksaan from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_peperiksaan.png';

import imgTambahPeperiksaan from '@site/assets/images/orang-kompeten/ods-gred2/tambah_maklumat_peperiksaan.png';

{/* Step F. Tab 6: Maklumat Peperiksaan */}
<OkMaklumatJadual
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Maklumat Peperiksaan"
    tabImgSrc={imgJadualPeperiksaan}
    tambahImgSrc={imgTambahPeperiksaan} />

{/* Step G. Tab 7: Sijil Kompetensi */}
import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/ods-gred2/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step H. Tab 8: Maklumat Perubatan */}
import OkMaklumatPerubatanOHD from '@site/src/components/tab-ok/maklumat-perubatan-ohd';

import imgOkMaklumatPerubatan from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_perubatan.png';

<OkMaklumatPerubatanOHD
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Maklumat Perubatan"
    tabImgSrc={imgOkMaklumatPerubatan} />

{/* Step I. Tab 9: Dokumen Sokongan */}
import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/ods-gred2/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step J. Tab 10: Perakuan Kebolehan */}
import OkPerakuanKebolehan from '@site/src/components/tab-ok/perakuan-kebolehan';

import imgOkPerakuanKebolehan from '@site/assets/images/orang-kompeten/ods-gred2/tab_perakuan_kebolehan.png';

<OkPerakuanKebolehan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Perakuan Kebolehan"
    tabImgSrc={imgOkPerakuanKebolehan} />

{/* Step K. Tab 11: Perakuan */}
import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/ods-gred2/tab_perakuan.png';
import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/ods-gred2/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="K"
    tabNumber={10}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />

</div>

import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />