---
title: PEMBAHARUAN ORANG KOMPETEN MAJOR HAZARD (OYKMH)
description: Panduan lengkap pembaharuan sijil orang kompeten major hazard
hide_table_of_contents: true
sidebar_label: 'Pembaharuan'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pembaharuan Sijil Orang Kompeten Major Hazard

import LoginStep from '../../../src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import PembaharuanOk from '../../../src/components/menu-renewal-ok';

import imgMaklumatOk from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/menu-kiri.png';

import tambahMaklumatOk from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/butang-pembaharuan.png';

<PembaharuanOk
  stepNumber={2}
  pageName="Orang Kompeten Major Hazard"
  moduleName="OYKMH"
  pageImgSrc={imgMaklumatOk}
  tambahImgSrc={tambahMaklumatOk}
/>

<div className="step-card">

### Langkah 3: Pengisian Borang Pembaharuan Orang Kompeten Major Hazard

{/* Step A. Tab 1: Maklumat Am */}

import OkMaklumatAm from '../../../src/components/tab-ok/maklumat-am';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_maklumat_am.png';

<OkMaklumatAm
    hasPanduan={false}
    tabImgSrc={imgOkMaklumatAm}/>

{/* Step B. Tab 2: Maklumat Majikan */}

import OkMaklumatMajikan from '../../../src/components/tab-ok/maklumat-majikan';

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_maklumat_majikan.png';

<OkMaklumatMajikan
    hasOptionTiadaMajikan={true}
    tabImgSrc={imgOkMaklumatMajikan} />

{/* Step C. Tab 3: Maklumat Kelayakan Akademik */}

import OkMaklumatJadual from '../../../src/components/tab-ok/maklumat-jadual';

import imgJadualKelayakanAkademik from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_maklumat_kelayakan_akademik.png';

import imgTambahKelayakanAkademik from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tambah_maklumat_kelayakan_akademik.png';

<OkMaklumatJadual
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgJadualKelayakanAkademik}
    tambahImgSrc={imgTambahKelayakanAkademik} />   

{/* Step D. Tab 4: Kursus/Peperiksaan Berkaitan */}

import imgJadualKursusBerkaitan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_kursus_berkaitan.png';

import imgTambahKursusBerkaitan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tambah_kursus_berkaitan.png';

<OkMaklumatJadual
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Kursus/Peperiksaan Berkaitan"
    tabImgSrc={imgJadualKursusBerkaitan}
    tambahImgSrc={imgTambahKursusBerkaitan} />

{/* Step E. Tab 5: Makluumat CEP */}

import OkMaklumatCep from '../../../src/components/tab-ok/maklumat-cep';

import imgMaklumatCep from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_maklumat_cep.png';

import imgTambahMaklumatCep from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tambah_maklumat_cep.png';

import imgUploadMaklumatCep from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/upload_maklumat_cep.png';

<OkMaklumatCep
  alphabetNumbering="E"
  tabNumber={5}
  tabName="Maklumat CEP"
  tabImgSrc={imgMaklumatCep}
  tambahImgSrc={imgTambahMaklumatCep}
  uploadImgSrc={imgUploadMaklumatCep}
/>

{/* Step F. Tab 6: Pengalaman Kerja */}

import imgPengalamanKerja from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_pengalaman_kerja.png';

import imgTambahPengalamanKerja from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tambah_pengalaman_kerja.png';

<OkMaklumatJadual
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Pengalaman Kerja"
    tabImgSrc={imgPengalamanKerja}
    tambahImgSrc={imgTambahPengalamanKerja} />

{/* Step G. Tab 7: Pengalaman Berkaitan Kawalan Terhadap Bahaya Kemalangan Besar  */}

import imgPengalamanKawalan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_pengalaman_kawalan.png';

import imgTambahPengalamanKawalan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tambah_pengalaman_kawalan.png';

<OkMaklumatJadual
    alphabetNumbering="G"
    tabNumber={7}
    tabName="Pengalaman Berkaitan Kawalan Terhadap Bahaya Kemalangan Besar"
    tabImgSrc={imgPengalamanKawalan}
    tambahImgSrc={imgTambahPengalamanKawalan} />

{/* Step H. Tab 8: Senarai Laporan Aktiviti Industri atau Pelan Kecemasan Tapak (Terkini)  */}

import imgLaporanAktiviti from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_pengalaman_kawalan.png';

import imgTambahLaporanAktiviti from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tambah_pengalaman_kawalan.png';

<OkMaklumatJadual
    alphabetNumbering="H"
    tabNumber={8}
    tabName="Pengalaman Berkaitan Kawalan Terhadap Bahaya Kemalangan Besar"
    tabImgSrc={imgLaporanAktiviti}
    tambahImgSrc={imgTambahLaporanAktiviti} />

{/* Step I. Tab 9: Sijil Kompetensi */}

import OkMaklumatSijil from '@site/src/components/tab-ok/sijil-kompetensi';

import imgOkSijil from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_sijil_kompetensi.png';

<OkMaklumatSijil
    alphabetNumbering="I"
    tabNumber={9}
    tabName="Sijil Kompetensi"
    tabImgSrc={imgOkSijil} />

{/* Step J. Tab 10: Dokumen Sokongan */}

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="K"
    tabNumber={10}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

{/* Step L. Tab 11: Perakuan */}

import OkPerakuan from '@site/src/components/tab-ok/perakuan';

import imgOkPerakuan from '@site/assets/images/orang-kompeten/major-hazard/pembaharuan/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

<OkPerakuan
    alphabetNumbering="L"
    tabNumber={11}
    tabName="Perakuan"
    tabImgSrc={imgOkPerakuan}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />
</div>


import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />