---
title: Pemberitahuan Tempat Kerja
description: Panduan lengkap pemberitahuan tempat kerja
hide_table_of_contents: false
sidebar_label: 'Daftar Tempat Kerja'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

# 📝 Pemberitahuan Tempat Kerja

## 📌 Pengenalan
Pemberitahuan Tempat Kerja (PEMTK) merupakan sebuah proses yang membolehkan pemohon untuk mendaftarkan dan memaklumkan kewujudan tempat kerja ke dalam sistem MyKKP.

## 📂 Dokumen Sokongan

Pemohon perlu menyediakan dokumen yang diperlukan bagi permohonan Pemberitahuan Tempat Kerja seperti:

| Bil | Keterangan                                                                                | Syarat      |
|-----|-------------------------------------------------------------------------------------------|-------------|
| 1.  | Pelan Kedudukan Tempat Kerja (Lokasi Tempat Kerja)                                        | Wajib       |
| 2.  | Sijil Perniagaan SSM (Pembuktian kewujudan syarikat)                                      | Wajib       |
| 3.  | Rajah Perjalanan Proses (Carta Alir Kerja Flowchart)                                      | Tidak Wajib |
| 4.  | Pelan Susun Atur Jentera (Berdasarkan Carta Alir)                                         | Tidak Wajib |
| 5.  | Surat dari pihak berkuasa tempatan mengenai tapak kilang, bangunan dan lesen perniagaan 1 | Tidak Wajib |
| 6.  | Surat Jabatan Bomba                                                                       | Tidak Wajib |
| 7.  | Lain-lain dokumen sokongan                                                                | Tidak Wajib |

## 🧭 Langkah-langkah Pemberitahuan

<div className="step-card">

### Akses Halaman Log Masuk MyKKP

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP"
  headerId="toLoginStep"
/>

</div>

<div className="step-card">

### Masuk ke Halaman Pemberitahuan Tempat Kerja

import step2 from '../../assets/images/pemtk/menu_utama.png';

<ExpandableImage
        src={step2}
        alt="Halaman Menu Utama"
        caption="Halaman Menu Utama"
        width={500} 
/>

1. Klik menu **Pendaftaran, Pemeriksaan, Pengujian dan Pemberitahuan Tempat Kerja/Loji/Projek Pembinaan**.

{Admonition({
  type: "tip",
  children: React.createElement('null', null, 'Pastikan dashboard yang dipilih adalah dashboard ',
    React.createElement('strong', null, 'Tempat Kerja/Kilang'), '.'
  )
})}

2. Klik menu **Pemberitahuan Tempat Kerja** dan *pop-up* akan dipaparkan.
3. Klik butang radio **Pemberitahuan Tempat Kerja (PEMTK)** dan klik butang **Seterusnya**.

{Admonition({
  type: "info",
  children: React.createElement('null', null, 'Halaman ',
    React.createElement('strong', null, 'Pemberitahuan Tempat Kerja '), 'akan dipaparkan pada tab baru.'
  )
})}

</div>

<div className="step-card">

### Pengisian Borang Pemberitahuan Tempat Kerja

#### A. Tab 1: Maklumat Am

import tab1 from '../../assets/images/pemtk/tab_maklumat_am.png';

<ExpandableImage
        src={tab1}
        alt="Tab 1: Maklumat Am"
        caption="Tab 1: Maklumat Am"
        width={450} 
/>

1. Isi maklumat yang dikehendaki pada ruangan **Maklumat Tempat Kerja**.
-  Klik butang **Carian** dan *pop-up* **Carian Organisasi** akan dipaparkan.

import tab1_2 from '../../assets/images/pemtk/carian_organisasi.png';

<ExpandableImage
        src={tab1_2}
        alt="*Pop-up* Carian Organisasi"
        caption="*Pop-up* Carian Organisasi"
        width={450} 
/>

- Isi nama organisasi pada medan carian dan klik butang **Cari**.
- Klik butang radio pada pilihan nama organisasi dan klik butang **Pilih**.

{Admonition({
  type: "info",
  children: React.createElement('null', null, 'Sekiranya organisasi ingin membuat Pendaftaran Baru, klik butang ',
    React.createElement('strong', null, 'Daftar Baru'), '.'
  )
})}

2. Isi maklumat yang dikehendaki pada ruangan **Maklumat Pemunya**.
3. Klik butang **Seterusnya**.

{Admonition({
  type: "warning",
  children: "Pemberitahuan tidak boleh diteruskan jika terdapat medan mandatori yang tidak diisi."
})}


#### B. Tab 2: Maklumat Sektor

import tab2 from '../../assets/images/pemtk/tab_maklumat_sektor.png';

<ExpandableImage
        src={tab2}
        alt="Tab 2: Maklumat Sektor"
        caption="Tab 2: Maklumat Sektor"
        width={400} 
/>

1. Isi maklumat yang dikehendaki pada semua medan mandatori.
2. Klik butang **Seterusnya** untuk meneruskan ke **Tab 3**.


#### C. Tab 3: Maklumat Keselamatan dan Kesihatan Pekerjaan

import tab3 from '../../assets/images/pemtk/tab_maklumat_keselamatan.png';

<ExpandableImage
        src={tab3}
        alt="Tab 3: Maklumat Keselamatan dan Kesihatan Pekerjaan"
        caption="Tab 3: Maklumat Keselamatan dan Kesihatan Pekerjaan"
        width={450} 
/>

1. Isi maklumat yang dikehendaki pada semua medan mandatori.
2. Klik butang **Carian** pada medan **Maklumat Kompetensi** untuk mengisi **Nama OSH Coordinator**.
3. Klik butang **OK** pada *pop-up* **Berjaya** yang dipaparkan.
4. Klik butang **Seterusnya** untuk meneruskan ke **Tab 4**.

#### D. Tab 4: Dokumen Sokongan

import tab4 from '../../assets/images/pemtk/tab_dokumen_sokongan.png';

<ExpandableImage
        src={tab4}
        alt="Tab 4: Dokumen Sokongan"
        caption="Tab 4: Dokumen Sokongan"
        width={450} 
/>

import tab4_2 from '../../assets/images/pemtk/ikon_muat_naik.png';

1. Klik butang <img src={tab4_2} style={{width: 15}} /> untuk memuat naik dokumen **PDF** yang berkenaan pada medan bersyarat **Wajib**.
2. Isi medan **Diskripsi** dan klik butang ***Choose File*** untuk memilih dokumen.
3. Klik butang **Simpan**. *Pop-up* mesej berjaya akan dipaparkan dan klik butang **OK**.
4. Dokumen yang berjaya dimuat naik akan dipaparkan dalam **Jadual Senarai Dokumen**.
5. Klik butang **Tutup**. Pada kolum **Bil. Fail** akan menunjukkan jumlah bilangan fail yang telah dimuat naik.

{Admonition({
  type: "tip",
  children: React.createElement('null', null, 'Bagi menghapuskan dokumen yang telah dimuat naik -> Klik butang ',
    React.createElement('strong', null, 'Hapus Fail '), 'pada ',
    React.createElement('strong', null, 'Jadual Senarai Dokumen'), '.'
  )
})}

#### E. Tab 5: Perakuan

import tab5 from '../../assets/images/pemtk/tab_perakuan.png';

<ExpandableImage
        src={tab5}
        alt="Tab 5: Perakuan"
        caption="Tab 5: Perakuan"
        width={450} 
/>

1. Klik *checkbox* **Perakuan** dan isi maklumat yang dikehendaki pada semua medan mandatori.
2. Klik butang **Hantar** untuk menghantar tugasan yang telah selesai.
3. Tekan butang **OK** pada *pop-up* mesej berjaya.

{Admonition({
  type: "info",
  children: React.createElement('null', null, 'No. Rujukan Permohonan berformat ',
    React.createElement('strong', null, 'XX/PEMTK/XX/XXXXX '), 'anda akan dipaparkan pada mesej berjaya berikut.')
})}

</div>

## 🔍 Semak Status Permohonan PEMTK

<div className="step-card">

import imgSedangProses from '@site/assets/images/pemtk/halaman_senarai_permohonan.png';
import SemakStatus from '@site/src/components/loji/semak-status';
import imgSelesaiProses from '@site/assets/images/pemtk/halaman_senarai_permohonan2.png';

<SemakStatus 
    stepNumber={4}
    moduleName="PEMTK"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} 
/>

</div>

## 📬 Semak Surat Menyurat

<div className="step-card">

import step5 from '../../assets/images/pemtk/halaman_surat_menyurat.png';

<ExpandableImage
        src={step5}
        alt="Halaman Surat Menyurat"
        caption="Halaman Surat Menyurat"
        width={450} 
/>

1. Akses halaman **Surat Menyurat** dengan klik butang menu **Surat Menyurat** pada *side-bar* disebelah kiri.
2. Klik butang *dropdown* **Jenis Surat/Sijil** pada medan **Senarai Dokumen Modul State** untuk memaparkan jenis surat/sijil.
3. *Pop-up* **Jenis Surat/Sijil** akan dipaparkan. Pilih jenis surat yang dikehendaki pada butang radio.

import step5_2 from '../../assets/images/pemtk/pop_up_jenis_surat_sijil.png';

<ExpandableImage
        src={step5_2}
        alt="Pop-up Jenis Surat/Sijil"
        caption="Pop-up Jenis Surat/Sijil"
        width={450} 
/>

4. Klik butang **OK** dan klik butang **Cari** yang berada di sebelah kanan medan *dropdown*.
5. Klik butang **Lihat** berdasarkan **No. Rujukan Permohonan** yang telah dibuat untuk memaparkan surat yang dikehendaki.

</div>