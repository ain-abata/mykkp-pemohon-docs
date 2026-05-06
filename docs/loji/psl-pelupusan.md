---
title: Pemberitahuan Status Loji (PSL) - Pelupusan
description: Panduan lengkap pemberitahuan status loji - pelupusan
hide_table_of_contents: false
sidebar_label: 'Pelupusan'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 📌 Ringkasan Modul
Modul **Pemberitahuan Status Loji (Pelupusan)** adalah proses yang membolehkan pemunya loji menghantar pemberitahuan senarai loji yang hendak dilupuskan. Proses permohonan ini melibatkan beberapa langkah penting iaitu:  
- Pemohon perlu memilih loji yang hendak dilupuskan dari senarai loji yang terdapat dalam sistem.
- Pemohon perlu mengisi ulasan pemberitahuan bagi setiap loji yang hendak dilupuskan.
- Pemohon perlu memuat naik segala maklumat dan dokumen sokongan yang diperlukan di dalam pemberitahuan.

## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar permohonan **Pemberitahuan Status Loji (Pelupusan)** adalah seperti berikut:
1. Pemunya loji yang telah berdaftar sebagai **PATK Tahap 1** untuk **Pelupusan** pada sistem MyKKP.

Syarat-syarat bagi status loji yang dibenarkan untuk permohonan **Pemberitahuan Status Loji (Pelupusan)** adalah seperti berikut:
1. Aktif
2. Tidak digunakan
3. Tindakan Aduan


Jenis jentera yang terlibat bagi permohonan **Pemberitahuan Status Loji (Pelupusan)** adalah seperti berikut:
1. PMA
2. PMA (Lif/Eskalator/Laluan Gerak)
3. PMT
4. PMD

## 📂 Dokumen Sokongan

Pemohon perlu menyediakan dokumen yang diperlukan bagi permohonan **Pemberitahuan Status Loji (Pelupusan)** seperti:

| Bil. | Keterangan                                           | Syarat      |
|------|------------------------------------------------------|-------------|
| 1.   | Surat pemberitahuan (sila nyatakan sebab pelupusan). | Wajib       |
| 2.   | Gambar loji yang dilupuskan.                         | Tidak Wajib |
| 3.   | Lain-lain dokumen sokongan.                          | Tidak Wajib |

## 🧭 Langkah-langkah Permohonan

import LoginStep from '@site/src/components/login-step';
import MenuLoji from '@site/src/components/loji/menu-loji';
import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';
import SenaraiLoji from '@site/src/components/loji/tab/senarai-loji';
import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';
import Perakuan from '@site/src/components/loji/tab/perakuan';
import BatalOlehPemohon from '@site/src/components/admonitions/batal-oleh-pemohon';
import SemakStatus from '@site/src/components/loji/semak-status';
import SemakSurat from '@site/src/components/loji/semak-surat';


import imgMaklumatAm from '@site/assets/images/loji/psl/tab_maklumat_am.png';
import imgSenaraiLojiPelupusan from '@site/assets/images/loji/psl/tab_senarai_loji_pelupusan.png';
import imgSenaraiLojiDikecualikan from '@site/assets/images/loji/psl/tab_senarai_loji_dikecualikan.png';
import imgPerihal from '@site/assets/images/loji/psl/tab_perihal_pemberitahuan.png';
import imgDokumenSokongan from '@site/assets/images/loji/psl/tab_dokumen_sokongan.png';
import imgPerakuan from '@site/assets/images/loji/psl/tab_perakuan.png';
import imgSedangProses from '@site/assets/images/loji/pemula/halaman_permohonan_sedang_diproses.png';
import imgSelesaiProses from '@site/assets/images/loji/pemula/halaman_permohonan_selesai_diproses.png';

<Tabs>
  <TabItem value="pelupusan" label="Pelupusan">
    <h3 className="print-only">1. Pemberitahuan Status Loji – Pelupusan</h3>
    <LoginStep 
      stepNumber={1}
      title="Akses Halaman Log Masuk MyKKP" />
    <MenuLoji
      stepNumber={2}
      pageName="Pemberitahuan Status Loji"
      kategoriPermohonan="Pemberitahuan Berkaitan Loji"
      moduleType="Pemberitahuan Status Loji – Pelupusan oleh Penemuanya Loji" />
    <div className="step-card">
      ### Langkah 3: Pengisian Borang Permohonan Pemeriksaan Permulaan Loji
      <MaklumatAm
        alphabetNumbering="A"
        tabNumber={1}
        tabName="Maklumat Am"
        tabImgSrc={imgMaklumatAm} />
---
      <SenaraiLoji
        alphabetNumbering="B"
        tabNumber={2}
        tabName="Senarai Loji"
        tabImgSrc={imgSenaraiLojiPelupusan}
        leftTableName="Senarai Loji Pemunya Yang Asal"
        rightTableName="Senarai Loji Untuk Pemberitahuan Pelupusan" />
---
      #### C. Tab 3: Perihal Pemberitahuan
      <ExpandableImage
        src={imgPerihal}
        alt="Tab 3: Perihal Pemberitahuan"
        caption="Tab 3: Perihal Pemberitahuan"
        width={450} />
      1. Klik butang **Isi Ulasan**. *Pop-up* **Perihal Pemberitahuan** akan dipaparkan.
      2. Isi maklumat di medan **Ulasan Pemberitahuan** dan klik butang **Simpan**.
      3. Klik butang **Ok** pada halaman *pop-up* Makluman yang memaparkan “Ulasan berjaya disimpan”.
      4. Klik butang **Seterusnya**.
      <Admonition>
        Permohonan tidak boleh diteruskan jika terdapat butang <b>Isi Ulasan</b> yang masih berwarna oren.
      </Admonition>
---
      <DokumenSokongan
        alphabetNumbering="D"
        tabNumber={4}
        tabName="Dokumen Sokongan"
        tabImgSrc={imgDokumenSokongan} />
---
      <Perakuan
        alphabetNumbering="E"
        tabNumber={5}
        tabName="Perakuan"
        tabImgSrc={imgPerakuan}
        noRujukan="XX/PSL/XX/XXXXX"
        hasPayment={false} />
    </div>
  </TabItem>

  <TabItem value="tidakDigunakan" label="Tidak Digunakan/Pengecualian" default>
    <h3 className="print-only">2. Pemberitahuan Status Loji – Tidak Digunakan/Pengecualian</h3>
    <LoginStep 
      stepNumber={1}
      title="Akses Halaman Log Masuk MyKKP" />
    <MenuLoji
      stepNumber={2}
      pageName="Pemberitahuan Status Loji"
      kategoriPermohonan="Pemberitahuan Berkaitan Loji"
      moduleType={
        <>
        <span style={{ fontWeight: "normal" }}>sama ada:</span><br/>
        i. Pemberitahuan Status Loji – Tidak Digunakan/Pengecualian Oleh Penghuni (Tempat Kerja);
        <span style={{ fontWeight: "normal" }}> ATAU </span><br/>
        ii. Pemberitahuan Status Loji – Tidak Digunakan/Pengecualian Oleh Pemunya
        </>
        }
    />
    <div className="step-card">
      ### Langkah 3: Pengisian Borang Permohonan Pemeriksaan Permulaan Loji
      <MaklumatAm
        alphabetNumbering="A"
        tabNumber={1}
        tabName="Maklumat Am"
        tabImgSrc={imgMaklumatAm} />
---
      <SenaraiLoji
        alphabetNumbering="B"
        tabNumber={2}
        tabName="Senarai Loji"
        tabImgSrc={imgSenaraiLojiDikecualikan}
        leftTableName="Senarai Loji Pemunya Yang Asal"
        rightTableName="Senarai Loji Untuk Pemberitahuan Dikecualikan/Tidak Digunakan" />
---
      #### C. Tab 3: Perihal Pemberitahuan
      <ExpandableImage
        src={imgPerihal}
        alt="Tab 3: Perihal Pemberitahuan"
        caption="Tab 3: Perihal Pemberitahuan"
        width={450} />
      1. Klik butang **Isi Ulasan**. *Pop-up* **Perihal Pemberitahuan** akan dipaparkan.
      2. Isi maklumat di medan **Ulasan Pemberitahuan** dan klik butang **Simpan**.
      3. Klik butang **Ok** pada halaman *pop-up* Makluman yang memaparkan “Ulasan berjaya disimpan”.
      4. Klik butang **Seterusnya**.
      <Admonition>
        Permohonan tidak boleh diteruskan jika terdapat butang <b>Isi Ulasan</b> yang masih berwarna oren.
      </Admonition>
---
      <DokumenSokongan
        alphabetNumbering="D"
        tabNumber={4}
        tabName="Dokumen Sokongan"
        tabImgSrc={imgDokumenSokongan} />
---
      <Perakuan
        alphabetNumbering="E"
        tabNumber={5}
        tabName="Perakuan"
        tabImgSrc={imgPerakuan}
        noRujukan="XX/PSL/XX/XXXXX"
        hasPayment={false} />
      <BatalOlehPemohon />
    </div>
  </TabItem>
</Tabs>

<SemakStatus 
    stepNumber={4}
    moduleName="PSL"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />

<SemakSurat
    stepNumber={5} />