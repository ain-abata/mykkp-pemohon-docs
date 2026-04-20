---
title: Pendaftaran Sijil Operator Dandang Stim (Gred 1)
description: Panduan lengkap pendaftaran sijil operator dandang stim gred 1
hide_table_of_contents: true
sidebar_label: 'Operator Dandang Stim Gred 1'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Operator Dandang Stim (Gred 1)

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuOk from '../../../src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Operator Dandang Stim (Gred 1)"
  okType="Keselamatan"
  hasDropdown={true}
  moduleName="[DES] - Operator Dandang Stim"
  moduleType="Gred 1" />

<div className="step-card">

### Langkah 3: Pengisian Borang Pendaftaran Operator Dandan Stim Gred 1

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

{/* Step E. Tab 5: Kursus Berkaitan */}


{/* Step F. Tab 6: Maklumat Peperiksaan */}


{/* Step G. Tab 7: Sijil Kompetensi */}
import OkMaklumatSijil from '../../../src/components/tab-ok/sijil-kompetensi';

<OkMaklumatSijil
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Sijil Kompetensi" />

{/* Step H. Tab 8: Maklumat Perubatan */}
import OkMaklumatPerubatan from '../../../src/components/tab-ok/maklumat-perubatan';

<OkMaklumatPerubatan
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Maklumat Perubatan" />

{/* Step I. Tab 9: Dokumen Sokongan */}
import OkDokumenSokongan from '../../../src/components/tab-ok/dokumen-sokongan';

<OkDokumenSokongan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Dokumen Sokongan" />

{/* Step J. Tab 10: Perakuan Kebolehan */}
import OkPerakuanKebolehan from '../../../src/components/tab-ok/perakuan-kebolehan';

<OkPerakuanKebolehan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Perakuan Kebolehan" />

{/* Step K. Tab 11: Perakuan */}
import OkPerakuan from '../../../src/components/tab-ok/perakuan';

<OkPerakuan
    alphabetNumbering="K"
    tabNumber={10}
    tabName="Perakuan" />

</div>