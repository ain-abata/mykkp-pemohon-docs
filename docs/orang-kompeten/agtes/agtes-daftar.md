---
title: Pendaftaran Sijil Penguji Gas Bertauliah dan Penyelia Kemasukan
description: Panduan lengkap pendaftaran sijil penguji gas bertauliah dan penyelia kemasukan
hide_table_of_contents: true
sidebar_label: 'Pendaftaran'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Penguji Gas Bertauliah dan Penyelia Kemasukan

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuOk from '@site/src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Penguji Gas Bertauliah dan Penyelia Kemasukan"
  okType="Higien"
  hasDropdown={false}
  moduleName="[AGTES] - Penguji Gas Bertauliah dan Penyelia Kemasukan" />

<div className="step-card">

### Langkah 3: Pengisian Borang Penguji Gas Bertauliah dan Penyelia Kemasukan

{/* Step A. Tab 1: Maklumat Am */}
import OkMaklumatAm from '@site/src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/agtes/daftar/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm} />

{/* Step B. Tab 2: Maklumat Majikan */}
import OkMaklumatMajikan from '@site/src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/agtes/daftar/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={false}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Maklumat Tempat Kerja */}
import OkMaklumatTK from '@site/src/components/tab-ok/maklumat-tempat-kerja';

import imgOkMaklumatTK from '@site/assets/images/orang-kompeten/agtes/daftar/tab_maklumat_tempat_kerja.png';

<OkMaklumatTK
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Maklumat Tempat Kerja"
    tabImgSrc={imgOkMaklumatTK} />

{/* Step D. Tab 4: Maklumat Kelayakan Akademik */}
import OkMaklumatJadual from '@site/src/components/tab-ok/maklumat-jadual';

import imgJadualKelayakanAkademik from '@site/assets/images/orang-kompeten/agtes/daftar/tab_maklumat_kelayakan_akademik.png';

import imgTambahKelayakanAkademik from '@site/assets/images/orang-kompeten/agtes/daftar/tambah_maklumat_kelayakan_akademik.png';

<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgJadualKelayakanAkademik}
    tambahImgSrc={imgTambahKelayakanAkademik} />

{/* Step E. Tab 5: Maklumat Kursus Berkaitan */}
import OkMaklumatKursusBerkaitan from '@site/src/components/tab-ok/maklumat-kursus-berkaitan';

import imgKursusBerkaitan from '@site/assets/images/orang-kompeten/agtes/daftar/tab_maklumat_kursus_berkaitan.png';

<OkMaklumatKursusBerkaitan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Maklumat Kursus Berkaitan"
    tabImgSrc={imgKursusBerkaitan} />

{/* Step F. Tab 6: Pengalaman Kerja */}
import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/agtes/daftar/tab_pengalaman_kerja.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/agtes/daftar/tambah_pengalaman_kerja.png';

<OkMaklumatJadual
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step G. Tab 7: Sijil Kompetensi */}
import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/agtes/daftar/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step H. Tab 8: Dokumen Sokongan */}
import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/agtes/daftar/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step I. Tab 9: Perakuan */}
import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/agtes/daftar/tab_perakuan.png';
import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/agtes/daftar/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />

</div>

import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />