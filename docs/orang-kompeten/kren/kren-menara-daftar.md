---
title: PENDAFTARAN OPERATOR KREN MENARA (OKren)
description: Panduan lengkap pendaftaran sijil operator kren menara
hide_table_of_contents: true
sidebar_label: 'Operator Kren Menara'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Operator Kren Menara

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuOk from '../../../src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Operator Kren Menara"
  okType="Keselamatan"
  hasDropdown={true}
  moduleName="[OKren] - Operator Kren"
  moduleType="Menara" />

<div className="step-card">

### Langkah 3: Pengisian Borang Pendaftaran Operator Kren Menara

{/* Step A. Tab 1: Maklumat Am */}
import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

<OkMaklumatAm
    hasPanduanODS={true} />

{/* Step B. Tab 2: Maklumat Majikan */}
import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

<OkMaklumatMajikan
    statusMajikanCount={3} />

{/* Step C. Tab 3: Maklumat Kelayakan Akademik */}
import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualKelayakanAkademik from '@site/assets/images/orang-kompeten/tab/tab_maklumat_kelayakan_akademik.png';

import imgTambahKelayakanAkademik from '@site/assets/images/orang-kompeten/tab/tambah_maklumat_kelayakan_akademik.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgJadualKelayakanAkademik}
    tambahImgSrc={imgTambahKelayakanAkademik} />

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/tab/tab_pengalaman_kerja.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/tab/tambah_pengalaman_kerja.png';

{/* Step D. Tab 4: Pengalaman Kerja */}
<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step E. Tab 5: Kursus/Peperiksaan Berkaitan */}


{/* Step F. Tab 6: Sijil Kompetensi */}
import OkMaklumatSijil from '../../../src/components/tab-ok/sijil-kompetensi';

<OkMaklumatSijil
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Sijil Kompetensi" />

{/* Step G. Tab 7: Maklumat Perubatan */}
import OkMaklumatPerubatan from '../../../src/components/tab-ok/maklumat-perubatan';

<OkMaklumatPerubatan
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Maklumat Perubatan" />

{/* Step H. Tab 8: Dokumen Sokongan */}
import OkDokumenSokongan from '../../../src/components/tab-ok/dokumen-sokongan';

<OkDokumenSokongan
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Dokumen Sokongan" />

{/* Step I. Tab 9: Perakuan */}
import OkPerakuan from '../../../src/components/tab-ok/perakuan';

<OkPerakuan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Perakuan" />

</div>
