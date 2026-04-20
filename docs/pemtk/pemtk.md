---
title: Pemberitahuan Tempat Kerja
description: Panduan lengkap pemberitahuan tempat kerja
hide_table_of_contents: true
sidebar_label: 'Daftar Tempat Kerja'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

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

import LoginStep from '../../src/components/login-step';

<LoginStep title="Langkah 1: Akses Halaman Log Masuk MyKKP" />

<div className="step-card">

### Langkah 2: Masuk ke Halaman Pemberitahuan Tempat Kerja

import step2 from '../../assets/images/pemtk/menu_utama.png';

<div className="doc-image">
  <img src={step2} />
  <p>Halaman Menu Utama</p>
</div>

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

### Langkah 3: Pengisian Borang Pemberitahuan Tempat Kerja

#### A. Tab 1: Maklumat Am

import tab1 from '../../assets/images/pemtk/tab_maklumat_am.png';

<div className="doc-image">
  <img src={tab1} style={{width: 450}} />
  <p>Tab 1: Maklumat Am</p>
</div>

1. Isi maklumat yang dikehendaki pada ruangan **Maklumat Tempat Kerja**.
-  Klik butang **Carian** dan *pop-up* **Carian Organisasi** akan dipaparkan.

import tab1_2 from '../../assets/images/pemtk/carian_organisasi.png';

<div className="doc-image">
  <img src={tab1_2} style={{width: 400}} />
  <p>*Pop-up* Carian Organisasi</p>
</div>

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

<div className="doc-image">
  <img src={tab2} style={{width: 400}} />
  <p>Tab 2: Maklumat Sektor</p>
</div>

1. Isi maklumat yang dikehendaki pada semua medan mandatori.
2. Klik butang **Seterusnya** untuk meneruskan ke **Tab 3**.


#### C. Tab 3: Maklumat Keselamatan dan Kesihatan Pekerjaan

import tab3 from '../../assets/images/pemtk/tab_maklumat_keselamatan.png';

<div className="doc-image">
  <img src={tab3} style={{width: 400}} />
  <p>Tab 3: Maklumat Keselamatan dan Kesihatan Pekerjaan</p>
</div>

1. Isi maklumat yang dikehendaki pada semua medan mandatori.
2. Klik butang **Carian** pada medan **Maklumat Kompetensi** untuk mengisi **Nama OSH Coordinator**.
3. Klik butang **OK** pada *pop-up* **Berjaya** yang dipaparkan.
4. Klik butang **Seterusnya** untuk meneruskan ke **Tab 4**.

#### D. Tab 4: Dokumen Sokongan

import tab4 from '../../assets/images/pemtk/tab_dokumen_sokongan.png';

<div className="doc-image">
  <img src={tab4} />
  <p>Tab 4: Dokumen Sokongan</p>
</div>

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

<div className="doc-image">
  <img src={tab5} />
  <p>Tab5: Perakuan</p>
</div>

1. Klik *checkbox* **Perakuan** dan isi maklumat yang dikehendaki pada semua medan mandatori.
2. Klik butang **Hantar** untuk menghantar tugasan yang telah selesai.
3. Tekan butang **OK** pada *pop-up* mesej berjaya.

{Admonition({
  type: "info",
  children: React.createElement('null', null, 'No. Rujukan Permohonan berformat ',
    React.createElement('strong', null, 'XX/PEMTK/XX/XXXXX '), 'anda akan dipaparkan pada mesej berjaya berikut.')
})}

</div>

<div className="step-card">

### Langkah 4: Penyemakan Status Permohonan PEMTK

#### A. Semak status permohonan sedang diproses

import step4 from '../../assets/images/pemtk/halaman_senarai_permohonan.png';

<div className="doc-image">
  <img src={step4} />
  <p>Halaman Senarai Permohonan</p>
</div>

1. Klik butang menu **Senarai Permohonan** pada *side-bar* disebelah kiri untuk memaparkan halaman **Senarai Permohonan**.
2. Klik butang **Tindakan** pada status **Sedang Diproses** bagi jenis permohonan **PEMTK**.
3. Klik butang **Lihat Permohonan** untuk menyemak permohonan **PEMTK**.
4. Semak permohonan yang telah diisi setelah selesai membuat permohonan **PEMTK**.

#### B. Semak status permohonan setelah selesai proses

import step4_2 from '../../assets/images/pemtk/halaman_senarai_permohonan2.png';

<div className="doc-image">
  <img src={step4_2} />
  <p>Halaman Senarai Permohonan</p>
</div>

1. Klik butang menu **Senarai Permohonan** pada *side-bar* disebelah kiri untuk memaparkan halaman **Senarai Permohonan**.
2. Klik butang **Tindakan** pada status **Selesai Diproses – Diluluskan / Selesai Diproses - Dibatalkan** bagi jenis permohonan **PEMTK**.
3. Klik butang **Lihat Maklumat** untuk menyemak permohonan **PEMTK**.
4. Semak maklumat yang telah diisi setelah selesai proses **PEMTK**.

{Admonition({
  type: "tip",
  children: React.createElement('null', null, 'Senarai ',
    React.createElement('strong', null, 'Surat Pemberitahuan '), 'dan ',
    React.createElement('strong', null, 'Surat Tolak '), 'akan dipaparkan pada medan ',
    React.createElement('strong', null, 'Senarai Surat'), '.',
  )
})}

</div>

<div className="step-card">

### Langkah 5: Penyemakan Surat Menyurat

import step5 from '../../assets/images/pemtk/halaman_surat_menyurat.png';

<div className="doc-image">
  <img src={step5} />
  <p>Halaman Surat Menyurat</p>
</div>

1. Akses halaman **Surat Menyurat** dengan klik butang menu **Surat Menyurat** pada *side-bar* disebelah kiri.
2. Klik butang *dropdown* **Jenis Surat/Sijil** pada medan **Senarai Dokumen Modul State** untuk memaparkan jenis surat/sijil.
3. *Pop-up* **Jenis Surat/Sijil** akan dipaparkan. Pilih jenis surat yang dikehendaki pada butang radio.

import step5_2 from '../../assets/images/pemtk/pop_up_jenis_surat_sijil.png';

<div className="doc-image">
  <img src={step5_2} style={{width: 300}} />
  <p>Pop-up Jenis Surat/Sijil</p>
</div>

4. Klik butang **OK** dan klik butang **Cari** yang berada di sebelah kanan medan *dropdown*.
5. Klik butang **Lihat** berdasarkan **No. Rujukan Permohonan** yang telah dibuat untuk memaparkan surat yang dikehendaki.

</div>