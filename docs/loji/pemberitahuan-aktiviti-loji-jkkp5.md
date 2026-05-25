---
title: Pemberitahuan Aktiviti Industri (JKKP5)
description: Panduan lengkap pemberitahuan Aktiviti Industri
hide_table_of_contents: false
sidebar_label: 'JKKP5'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 📌 Ringkasan Modul

**Pemberitahuan Aktiviti Industri (JKKP5)** adalah borang yang perlu diisi oleh industri yang tertakluk kepada Peraturan-Peraturan Keselamatan dan Kesihatan Pekerjaan (Kawalan Terhadap Bahaya Kemalangan Besar Dalam Perindustrian) 1996.

## 📂 3 jenis klasifikasi pepasangan

1. **Pepasangan Bahaya Besar (MHI)** merupakan suatu aktiviti industri yang mengeluar, memproses, mengendali, mengguna, membuang atau menyimpan sama ada secara kekal atau sementara, satu atau lebih bahan berbahaya atau kategori atau kategori-kategori bahan berbahaya dalam kuantiti atau kuantiti- kuantiti yang adalah atau sama atau melebihi kuantiti ambang. 
2. **Pepasangan Bahaya Bukan Besar (NMHI)** merupakan suatu aktiviti industri yang mengeluar, memproses, mengendali, mengguna, membuang atau menyimpan sama ada secara kekal atau sementara, satu atau lebih bahan berbahaya atau kategori atau kategori-kategori bahan berbahaya dalam kuantiti atau kuantiti- kuantiti kurang daripada kuantiti ambang tetapi melebihi 10% daripada kuantiti ambang. 
3. **Pepasangan yang tidak tertakluk di bawah peraturan ini (NTC)** merupakan suatu aktiviti industri yang mengeluar, memproses, mengendali, mengguna, membuang atau menyimpan sama ada secara kekal atau sementara, satu atau lebih bahan berbahaya atau kategori atau kategori-kategori bahan berbahaya dalam kuantiti atau kuantiti- kuantiti adalah atau sama atau kurang daripada 10% kuantiti ambang bahan atau bahan-bahan berbahaya. 

<table>
  <thead>
    <tr>
      <th>Bil.</th>
      <th>Klasifikasi Pepasangan</th>
      <th>Tindakan Yang Perlu Dilakukan</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Major Hazard Installation (MHI)</td>
      <td>
        <strong>Laporan Yang Perlu Dihantar</strong>
        <ul>
          <li>Laporan Aktiviti Industri (LAI)</li>
          <li>Pelan Kecemasan Tapak (ERP)</li>
          <li>Maklumat Kepada Umum (ITP)</li>
          <li>Consequences Analysis (CA)</li>
        </ul>

        <strong>Pelaksanaan Yang Perlu Dihantar</strong>
        <ul>
          <li>Pelaksanaan ERP (Dalam Tapak)</li>
          <li>Pelaksanaan ERP (Luar Tapak)</li>
          <li>Maklumat Kepada Umum (ITP)</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>2</td>
      <td>Non-Major Hazard Installation (NMHI)</td>
      <td>
        <strong>Laporan Yang Perlu Dihantar</strong>
        <ul>
          <li>Dokumen Demonstrasi Operasi Selamat (DOSO)</li>
          <li>Consequences Analysis (CA)</li>
        </ul>

        <strong>Pelaksanaan Yang Perlu Dihantar</strong>
        <ul>
          <li>Pelaksanaan ERP (Dalam Tapak)</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>3</td>
      <td>Not To Comply (NTC)</td>
      <td>Tiada Laporan Dan Pelaksanaan Yang Perlu Diisi.</td>
    </tr>
  </tbody>
</table>

## Langkah-langkah Pemberitahuan

<div className="step-card">

### Akses Halaman Log Masuk MyKKP

import LoginStep from '@site/src/components/login-step';

<LoginStep 
    stepNumber={1}
    title="Akses Halaman Log Masuk MyKKP" 
/>

</div>

<div className="step-card">

### Halaman Pemberitahuan Aktiviti Industri

import LangkahMenuUtama from '@site/src/components/lain-lain/jkkp5/menu-jkkp5';
import imgMenuUtama from '@site/assets/images/lain-lain/jkkp5/menu_utama.png';
import imgJkkp5 from '@site/assets/images/lain-lain/jkkp5/jkkp5_baru.png';
import imgPopupMakluman from '@site/assets/images/lain-lain/jkkp5/popup_makluman.png';

<LangkahMenuUtama
  stepNumber={2}
  menuUtamaImgSrc={imgMenuUtama}
  jkkp5ImgSrc={imgJkkp5}
  popupMaklumanImgSrc={imgPopupMakluman}
/>

</div>

<div className="step-card">

### Pengisian Borang Pemberitahuan Aktiviti Loji

import TabButiranPepasangan from '@site/src/components/lain-lain/jkkp5/tab-butiran-pepasangan';
import imgTabButiranPepasangan from '@site/assets/images/lain-lain/jkkp5/tab_butiran_pepasangan.png';
import imgMaklumatPepasangan from '@site/assets/images/lain-lain/jkkp5/maklumat_pepasangan.png';

<TabButiranPepasangan
  tabNumber={1}
  tabName="Butiran Pepasangan"
  tabImgSrc={imgTabButiranPepasangan}
  maklumatPepasanganImgSrc={imgMaklumatPepasangan}
/>
---

import TabAktivitiIndustri from '@site/src/components/lain-lain/jkkp5/tab-aktiviti-industri';

import imgTabAktivitiIndustri from '@site/assets/images/lain-lain/jkkp5/tab_aktiviti_industri.png';

<TabAktivitiIndustri
  tabNumber={2}
  tabName="Aktiviti Industri"
  tabImgSrc={imgTabAktivitiIndustri}
/>
---

import TabBahanBerbahaya from '@site/src/components/lain-lain/jkkp5/tab-bahan-berbahaya';

import imgTabBahanBerbahaya from '@site/assets/images/lain-lain/jkkp5/tab_bahan_berbahaya.png';
import imgPopupTambahBahanBerbahaya from '@site/assets/images/lain-lain/jkkp5/popup_bahan_berbahaya.png';
import imgBahanBerbahayaYa from '@site/assets/images/lain-lain/jkkp5/ya_bahan_berbahaya.png';
import imgBahanBerbahayaTidak from '@site/assets/images/lain-lain/jkkp5/tidak_bahan_berbahaya.png';

<TabBahanBerbahaya
  tabNumber={3}
  tabName="Bahan Berbahaya Di Pepasangan"
  tabImgSrc={imgTabBahanBerbahaya}
  tambahImgSrc={imgPopupTambahBahanBerbahaya}
  yaImgSrc={imgBahanBerbahayaYa}
  tidakImgSrc={imgBahanBerbahayaTidak}
/>
---

import OkPerakuan from '@site/src/components/lain-lain/jkkp5/tab-perakuan';
import imgPerakuan from '@site/assets/images/lain-lain/jkkp5/tab_perakuan.png';
import imgMesejBerjaya from '@site/assets/images/lain-lain/jkkp5/mesej_penghantaran_berjaya.png';

<OkPerakuan
    tabNumber={4}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya} 
/>
</div>

<div className="step-card">

## Laporan yang perlu dihantar

<Tabs>
  <TabItem value="lai" label="LAI" default> 
  
import LaporanJkkp5 from '@site/src/components/lain-lain/jkkp5/laporan-jkkp5';
import imgSenaraiJkkp5 from '@site/assets/images/lain-lain/jkkp5/laporan/senarai_jkkp5_dihantar.png';
import imgButangLaporan from '@site/assets/images/lain-lain/jkkp5/laporan/butang_pemberitahuan_laporan.png';
import imgPopupLaporan from '@site/assets/images/lain-lain/jkkp5/laporan/popup_laporan_perlu_dihantar.png';
import imgLai from '@site/assets/images/lain-lain/jkkp5/laporan/lai.png';
import imgLaiDokumen from '@site/assets/images/lain-lain/jkkp5/laporan/popup_dokumen.png';
import imgLaiCarianOykmh from '@site/assets/images/lain-lain/jkkp5/laporan/popup_carian_oykmh.png';
import imgLaiMesej from '@site/assets/images/lain-lain/jkkp5/laporan/lai_mesej_hantar.png';

<LaporanJkkp5
  senaraiJkkp5ImgSrc={imgSenaraiJkkp5}
  butangLaporanImgSrc={imgButangLaporan}
  popupLaporanImgSrc={imgPopupLaporan}
  reportName="Laporan Aktiviti Industri"
  reportShortName="LAI"
  tabImgSrc={imgLai}
  popupDokumenImgSrc={imgLaiDokumen}
  popupCarianOykmhImgSrc={imgLaiCarianOykmh}
  mesejHantarImgSrc={imgLaiMesej}
  hasCarianOykmh = {true}

/>
</TabItem>

<TabItem value="erp" label="ERP">

import imgERP from '@site/assets/images/lain-lain/jkkp5/laporan/erp.png';
import imgErpMesej from '@site/assets/images/lain-lain/jkkp5/laporan/erp_mesej_hantar.png';

<LaporanJkkp5
  senaraiJkkp5ImgSrc={imgSenaraiJkkp5}
  butangLaporanImgSrc={imgButangLaporan}
  popupLaporanImgSrc={imgPopupLaporan}
  reportName="Pelan Kecemasan Tapak"
  reportShortName="ERP"
  tabImgSrc={imgERP}
  popupDokumenImgSrc={imgLaiDokumen}
  popupCarianOykmhImgSrc={imgLaiCarianOykmh}
  mesejHantarImgSrc={imgErpMesej}
  hasCarianOykmh = {true}

/>

  </TabItem>

  <TabItem value="itp" label="ITP">

import imgItp from '@site/assets/images/lain-lain/jkkp5/laporan/itp.png';
import imgItpMesej from '@site/assets/images/lain-lain/jkkp5/laporan/itp_mesej_hantar.png';

<LaporanJkkp5
  senaraiJkkp5ImgSrc={imgSenaraiJkkp5}
  butangLaporanImgSrc={imgButangLaporan}
    popupLaporanImgSrc={imgPopupLaporan}
  reportName="Maklumat Untuk Awam"
  reportShortName="ITP"
  tabImgSrc={imgItp}
  popupDokumenImgSrc={imgLaiDokumen}
  popupCarianOykmhImgSrc={imgLaiCarianOykmh}
  mesejHantarImgSrc={imgItpMesej}
  hasCarianOykmh = {false}/>
</TabItem>

<TabItem value="ca" label="Consequences Analysis">

import LaporanCAJkkp5 from '@site/src/components/lain-lain/jkkp5/laporan-CA-jkkp5';

import butangConsAnalysisImg from '@site/assets/images/lain-lain/jkkp5/cons-analysis/butang-cons-analysis.png';
import tabConsAnalysisImg from '@site/assets/images/lain-lain/jkkp5/cons-analysis/tab-cons-analysis.png';
import popupPilihanBahanBerbahayaImg from '@site/assets/images/lain-lain/jkkp5/cons-analysis/popup-pilihan-bahan-berbahaya.png';
import senaraiBahanBerbahayaImg from '@site/assets/images/lain-lain/jkkp5/cons-analysis/senarai-bahan-berbahaya.png';
import popupMaklumatImpakImg from '@site/assets/images/lain-lain/jkkp5/cons-analysis/popup-maklumat-impak.png';
import gambarJadualConsequencesAnalysisImg from '@site/assets/images/lain-lain/jkkp5/cons-analysis/jadual-consequences-analysis.png';
import imgcaMesej from '@site/assets/images/lain-lain/jkkp5/cons-analysis/ca_mesej_hantar.png';


  <LaporanCAJkkp5
    senaraiJkkp5ImgSrc={imgSenaraiJkkp5}
    butangConsAnalysisImgSrc={butangConsAnalysisImg}
    tabConsAnalysisImgSrc={tabConsAnalysisImg}
    popupPilihanBahanBerbahayaImgSrc={popupPilihanBahanBerbahayaImg}
    senaraiBahanBerbahayaImgSrc={senaraiBahanBerbahayaImg}
    popupMaklumatImpakImgSrc={popupMaklumatImpakImg}
    gambarJadualConsequencesAnalysisImgSrc={gambarJadualConsequencesAnalysisImg}
    mesejHantarImgSrc={imgcaMesej}
  />
  
</TabItem>

<TabItem value="DOSO" label="DOSO">
import LaporanDOSOJkkp5 from '@site/src/components/lain-lain/jkkp5/laporan-DOSO';

import senaraiLaporanDOSOJkkp5Img from '@site/assets/images/lain-lain/jkkp5/DOSO/senarai-laporanDoso.png';
import butangDosoImg from '@site/assets/images/lain-lain/jkkp5/DOSO/butang-doso.png';
import popupDosoImg from '@site/assets/images/lain-lain/jkkp5/DOSO/popup-doso.png';
import tabDosoImg from '@site/assets/images/lain-lain/jkkp5/DOSO/tab-doso.png';
import pemberitahuanDosoImg from '@site/assets/images/lain-lain/jkkp5/DOSO/pemberitahuan-doso.png';
import mesejHantarDosoImg from '@site/assets/images/lain-lain/jkkp5/DOSO/mesej-hantar-doso.png';

  <LaporanDOSOJkkp5
    tabName="DOSO"
    senaraiPelaksanaanJkkp5ImgSrc={senaraiLaporanDOSOJkkp5Img}
    butangDosoImgSrc={butangDosoImg}
    popupDosoImgSrc={popupDosoImg}
    tabDosoImgSrc={tabDosoImg}
    pemberitahuanImgSrc={pemberitahuanDosoImg}
    mesejHantarImgSrc={mesejHantarDosoImg}
  />

</TabItem>
</Tabs>

</div>

<div className="step-card">

## Pelaksanaan yang perlu dihantar

<Tabs>
<TabItem value="erpdalamtapak" label="ERP (DalamTapak)" default> 
  
import PelaksanaanJkkp5 from '@site/src/components/lain-lain/jkkp5/pelaksanaan-jkkp5';
import senaraiPelaksanaanJkkp5Img from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/senarai-pelaksanaan-jkkp5.png';
import butangPelaksanaanImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/butang-pelaksanaan.png';
import popupPelaksanaanImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/popup-pelaksanaan.png';
import tabErpDalamTapakImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/tab-erp-dalam-tapak.png';
import senaraiBahanBerbahayaERPImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/senarai_bahan_berbahaya.png';
import mesejHantarErpDalamTapakImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/mesej-hantar-erp.png';

  <PelaksanaanJkkp5
    tabName="ERP Dalam Tapak"
    isErp={true}
    senaraiPelaksanaanJkkp5ImgSrc={senaraiPelaksanaanJkkp5Img}
    butangPelaksanaanImgSrc={butangPelaksanaanImg}
    popupPelaksanaanImgSrc={popupPelaksanaanImg}
    tabPelaksanaanImgSrc={tabErpDalamTapakImg}
    popupPilihanBahanBerbahayaImgSrc={popupPilihanBahanBerbahayaImg}
    senaraiBahanBerbahayaImgSrc={senaraiBahanBerbahayaERPImg}
    mesejHantarImgSrc={mesejHantarErpDalamTapakImg}
  />

</TabItem>

<TabItem value="erpluartapak" label="ERP (Luar Tapak)">

import tabErpLuarTapakImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/tab-erp-luar-tapak.png';


<PelaksanaanJkkp5
    tabName="ERP Luar Tapak"
    isErp={true}
    senaraiPelaksanaanJkkp5ImgSrc={senaraiPelaksanaanJkkp5Img}
    butangPelaksanaanImgSrc={butangPelaksanaanImg}
    popupPelaksanaanImgSrc={popupPelaksanaanImg}
    tabPelaksanaanImgSrc={tabErpLuarTapakImg}
    popupPilihanBahanBerbahayaImgSrc={popupPilihanBahanBerbahayaImg}
    senaraiBahanBerbahayaImgSrc={senaraiBahanBerbahayaERPImg}
    mesejHantarImgSrc={mesejHantarErpDalamTapakImg}
  />
</TabItem>

<TabItem value="itp" label="ITP">
import tabITPImg from '@site/assets/images/lain-lain/jkkp5/pelaksanaan/tab-itp.png';

<PelaksanaanJkkp5
    tabName="Maklumat Kepada Umum ITP"
    isErp={false}
    senaraiPelaksanaanJkkp5ImgSrc={senaraiPelaksanaanJkkp5Img}
    butangPelaksanaanImgSrc={butangPelaksanaanImg}
    popupPelaksanaanImgSrc={popupPelaksanaanImg}
    tabPelaksanaanImgSrc={tabITPImg}
    popupPilihanBahanBerbahayaImgSrc={popupPilihanBahanBerbahayaImg}
    senaraiBahanBerbahayaImgSrc={senaraiBahanBerbahayaERPImg}
    mesejHantarImgSrc={mesejHantarErpDalamTapakImg}
  />
</TabItem>
</Tabs>
</div>
