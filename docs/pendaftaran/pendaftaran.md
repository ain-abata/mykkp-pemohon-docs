---
title: Pendaftaran MyKKP
description: Panduan lengkap pendaftaran akaun MyKKP
hide_table_of_contents: true
sidebar_label: 'Daftar Sebagai Pengguna MyKKP'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pendaftaran Akaun MyKKP

## 📌 Pengenalan
Pendaftaran akaun diperlukan untuk membolehkan pengguna mengakses sistem MyKKP dan membuat permohonan berkaitan keselamatan dan kesihatan pekerjaan (KKP).

## 🎯 Tujuan
- Membolehkan pengguna mencipta akaun sendiri  
- Menyimpan maklumat pengguna dalam sistem  
- Memberikan akses kepada fungsi permohonan  

## 👤 Siapa perlu daftar?
- Individu berkaitan keselamatan dan kesihatan pekerjaan  
- Pengguna baharu yang belum mempunyai akaun  

## 🧭 Langkah-langkah Pendaftaran

<div className="step-card">

### Langkah 1: Akses Halaman Pendaftaran

Klik pautan berikut:  👉 [Daftar Akaun MyKKP](https://mykkpstg.dosh.gov.my/#/home/pendaftaran)

{Admonition({
  type: "tip",
  children: "Pastikan sambungan internet stabil sebelum memulakan pendaftaran."
})}

</div>

<div className="step-card">

### Langkah 2: Isi Maklumat Peribadi

#### A. Maklumat Diri

import step1 from '../../assets/images/pendaftaran/halaman_maklumat_peribadi.png';

<div className="doc-image">
  <img src={step1} />
  <p>Halaman Utama Pendaftaran MyKKP</p>
</div>

1. Isi **Nama Penuh** seperti dalam kad pengenalan atau pasport.

2. Pilih **No. Kad Pengenalan / Passport** dan masukkan nombor yang sah.  
   Jika No. Kad Pengenalan dipilih, **Tarikh Lahir** dijana automatik. Jika Pasport, isi secara manual.

3. Pilih **Jantina**, **Warganegara** dan **Bangsa**.

#### B. Maklumat Perhubungan

4. Isi **Alamat Emel** yang aktif dan isi semula emel pada **Pengesahan Emel** untuk pengesahan.

{Admonition({
  type: "info",
  children: "Kod pengesahan akan dihantar ke emel ini."
})}

5. Isi **No. Telefon Bimbit** yang aktif.

6. Isi **Emel Alternatif (Opsional)** dan **No. Telefon Rumah (Opsional)** jika ada.

{Admonition({
  type: "warning",
  children: "Pastikan emel dan nombor telefon adalah betul untuk mengelakkan kegagalan pengesahan."
})}

7. Klik butang 👉 **Seterusnya** untuk meneruskan pendaftaran.

</div>

<div className="step-card">

### Langkah 3: Isi Maklumat Alamat

import halaman_alamat from '../../assets/images/pendaftaran/halaman_alamat.png';

<div className="doc-image">
  <img src={halaman_alamat} />
  <p>Halaman Alamat</p>
</div>

1. Isi **Alamat** kedudukan / surat-menyurat (nombor rumah, nama jalan, dan kawasan).

{Admonition({
  type: "warning",
  children: "Poskod, Bandar dan Negeri tidak perlu diisi di medan ini."
})}

2. Isi **Poskod** yang tepat dan semak medan **Negeri** dan **Bandar**.

{React.createElement(
  'div',
  { className: 'admonition-row' },
  Admonition({
    type: 'do',
    children: React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Poskod mestilah 5 digit'),
      React.createElement('li', null, 'Pastikan padanan poskod dengan negeri & bandar adalah betul')
    )
  }),
  Admonition({
    type: 'dont',
    children: React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Poskod yang tidak sah akan menyebabkan ralat sistem')
    )
  })
)}

3. Klik butang 👉 **Seterusnya** untuk meneruskan pendaftaran.

</div>

<div className="step-card">

### Langkah 4: Tetapkan Kata Laluan

import halaman_kata_laluan from '../../assets/images/pendaftaran/halaman_kata_laluan.png'

<div className="doc-image">
  <img src={halaman_kata_laluan} />
  <p>Halaman Kata Laluan</p>
</div>

1. Isi **ID Pengguna** mengikut tip dibawah 👇.

{Admonition({
  type: "tip",
  children: React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Mempunyai sekurang-kurangnya enam (6) huruf dan tiga (3) digit nombor.'),
      React.createElement('li', null, 'Pastikan ID Pengguna anda tiada sebarang simbol.')
    )
})}

2. Isi **Kata Laluan** dan **Pengesahan Kata Laluan**.

{Admonition({
  type: "tip",
  children: React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Sekurang-kurangnya enam (6) huruf:'),
      React.createElement('ul', null, 
        React.createElement('li', null, '1 nombor.'),
        React.createElement('li', null, '1 aksara.'),
        React.createElement('li', null, '1 simbol.'),
      )
    )
})}

</div>  

<div className="step-card">

### Langkah 5: Selesai

1. Klik butang **Daftar**, dan mesej berjaya akan dipaparkan.

import mesej_pendaftaran_berjaya from '../../assets/images/pendaftaran/mesej_pendaftaran_berjaya.png'

<div className="doc-image">
  <img src={mesej_pendaftaran_berjaya} />
  <p>Mesej Pendataran Berjaya</p>
</div>

2. Semak emel dan klik pada *link* "**Verifikasi Akaun MyKKP Saya**" bagi pengesahan akaun.

{Admonition({
  type: "tip",
  children: React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Jika tidak menerima emel, semak folder Spam atau Junk.'),
      React.createElement('li', null, 'Jika masih tidak menjumpai, sila emel kepada MyKKP Nama Penuh, Emel dan No. IC anda.')
    )
})}

🎉 Akaun anda kini sedia digunakan!

</div>