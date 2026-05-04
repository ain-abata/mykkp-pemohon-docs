---
title: PENDAFTARAN ORANG KOMPETEN PENGAPIT (OYKCHRA(R))
description: Panduan lengkap pendaftaran sijil Orang Kompeten Pengapit
hide_table_of_contents: true
sidebar_label: 'Pendaftaran'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Sijil Orang Kompeten Pengapit

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
  
import MenuOk from '../../../src/components/menu-ok';

<MenuOk
  stepNumber={2}
  pageName="Pengapit"
  okType="Pengurusan Kimia"
  hasDropdown={false}
  moduleName="[CHRA(R)] - Orang Kompeten Pengapit"
 />

<div className="step-card">

### Langkah 3: Pengisian Borang Pendaftaran Orang Kompeten Pegawai Pengapit

{/* Step A. Tab 1: Maklumat Am */}

import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm}/>

{/* Step B. Tab 2: Maklumat Majikan */}

import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={true}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Maklumat Kelayakan Akademik */}

import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualKelayakanAkademik from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_maklumat_kelayakan_akademik.png';

import imgTambahKelayakanAkademik from '@site/assets/images/orang-kompeten/pengapit/daftar/tambah_maklumat_kelayakan_akademik.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgJadualKelayakanAkademik}
    hasDropdown={true}
    tambahImgSrc={imgTambahKelayakanAkademik} />

{/* Step D. Tab 4: Pengalaman Kerja */}

import imgJadualPengalamanKerja from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_pengalaman_kerja.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/pengapit/daftar/tambah_pengalaman_kerja.png';

<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgJadualPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step E. Tab 5: Kursus/Peperiksaan Berkaitan */}

import imgJadualKursusBerkaitan from '@site/assets/images/orang-kompeten/major-hazard/daftar/tab_kursus_berkaitan.png';

import imgTambahKursusBerkaitan from '@site/assets/images/orang-kompeten/major-hazard/daftar/tambah_kursus_berkaitan.png';

<OkMaklumatJadual
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Kursus/Peperiksaan Berkaitan"
    tabImgSrc={imgJadualKursusBerkaitan}
    tambahImgSrc={imgTambahKursusBerkaitan} />

{/* Step F. Tab 6: Pengalaman Penaksiran Risiko Kimia */}

import imgPengalamanRisiko from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_pengalaman_risiko.png';

import imgTambahPengalamanRisiko from '@site/assets/images/orang-kompeten/pengapit/daftar/tambah_pengalaman_risiko.png';

<OkMaklumatJadual
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Pengalaman Penaksiran Risiko Kimia"
    tabImgSrc={imgPengalamanRisiko}
    tambahImgSrc={imgTambahPengalamanRisiko} />

{/* Step G. Tab 7: Maklumat Keahlian */}

import imgMaklumatKeahlian from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_maklumat _keahlian.png';

import imgTambahMaklumatKeahlian from '@site/assets/images/orang-kompeten/pengapit/daftar/tambah_maklumat_keahlian.png';

<OkMaklumatJadual
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Pengalaman Penaksiran Risiko Kimia"
    tabImgSrc={imgMaklumatKeahlian}
    tambahImgSrc={imgTambahMaklumatKeahlian} />

{/* Step H. Tab 8: Sijil Kompetensi */}

import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step I. Tab 9: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step J. Tab 10: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/pengapit/daftar/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="J"
    tabNumber={10}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />
</div>


import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />