---
title: Pemberitahuan Penilaian Kendiri
description: Panduan lengkap Penilaian Kendiri
hide_table_of_contents: false
sidebar_label: 'Penilaian Kendiri'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import lamanMenuUtamaImg from '@site/assets/images/jkkp12/penilaian-kendiri/laman-menu-utama.png';

import senaraiTapakPembinaanImg from '@site/assets/images/jkkp12/penilaian-kendiri/senarai-tapak-pembinaan.png'; 

import tindakanRuanganKerjaImg from '@site/assets/images/jkkp12/penilaian-kendiri/tindakan-ruangan-kerja-tapak-pembinaan.png';

import ruanganKerjaTapakImg from '@site/assets/images/jkkp12/penilaian-kendiri/ruangan-kerja-tapak-pembinaan.png';

import penilaianKendiriButtonImg from '@site/assets/images/jkkp12/penilaian-kendiri/butang-penilaian-kendiri.png';

import halamanPenilaianKendiriImg from '@site/assets/images/jkkp12/penilaian-kendiri/halaman-penilaian-kendiri-oshpa.png';

import jenisAuditImg from '@site/assets/images/jkkp12/penilaian-kendiri/jenis-audit.png';
import senaraiSemakOshpaImg from '@site/assets/images/jkkp12/penilaian-kendiri/senarai-semak-oshpa.png';

import lengkapkanSenaraiSemakImg from '@site/assets/images/jkkp12/penilaian-kendiri/lengkapkan-senarai-semak.png';

import popupRumusanSemakanImg from '@site/assets/images/jkkp12/penilaian-kendiri/popup-rumusan-semakan.png';

import berjayaDihantarImg from '@site/assets/images/jkkp12/penilaian-kendiri/berjaya-dihantar.png';

## 📌 Ringkasan Modul

**Penilaian Kendiri OSHPA** adalah modul yang digunakan untuk melengkapkan penilaian kendiri bagi tapak pembinaan yang telah diberi akses kepada pengguna.

Penilaian ini melibatkan semakan maklumat tapak pembinaan, maklumat pengisi, pemilihan jenis audit, pengisian senarai semak OSHPA, semakan markah, rumusan semakan dan penghantaran penilaian kendiri.

## 📘 Glosari

Berikut merupakan kata kunci peranan yang terlibat dalam **Penilaian Kendiri OSHPA** sebagai rujukan.

| Bil. | Kata Kunci  | Keterangan                    |
|------|------------ |-------------------------------|
| 1.   | Klien       | Klien                         |
| 2.   | Pemberitahu | Wakil Klien Domestik          |
| 3.   | PC          | Kontraktor Prinsipal          |
| 4.   | CC          | Kontraktor Kerja Pembinaan    |
| 5.   | PD          | Pereka Bentuk Prinsipal       |
| 6.   | CD          | Pereka Bentuk Kerja Pembinaan |

## 🔐 Akses Peranan

<Admonition type="info" title="Nota">
  Penilaian kendiri hanya boleh dilakukan bagi tapak pembinaan yang telah diberi akses oleh <b>Klien/Pemberitahu</b>.
</Admonition>

| Akses             | Klien/Pemberitahu | PC/1 CC | Lebih Dari 1 CC | PD | CD |
|-------------------|-------------------|---------|-----------------|----|----|
| Penilaian Kendiri |                 ✓ |       ✓ |              ✓ |  ✓ | ✓ |

---

## Penilaian Kendiri

<div className="step-card">

### Akses Halaman Log Masuk 
import LoginStep from '@site/src/components/login-step';


<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

<div className="step-card">

### Laman Menu Utama

<ol>
  <li>
    Laman <b>Menu Utama</b> akan terpapar seperti di bawah.
  </li>
  <ExpandableImage
  src={lamanMenuUtamaImg}
  alt="Laman Menu Utama"
  caption="Laman Menu Utama"
  width={650}
/>
  <li>
    Klik pada butang <b>JKKP12</b>.
  </li>
  <li>
    Skrin <b>Pemberitahuan Projek</b> akan terpapar.
  </li>
</ol>

<ExpandableImage
  src={senaraiTapakPembinaanImg}
  alt="Senarai Tapak Pembinaan"
  caption="Senarai Tapak Pembinaan"
  width={650}
/>

<ol start={4}>
  <li>
    Klik pada butang <b>Senarai Tapak Pembinaan</b> untuk memaparkan senarai tapak pembinaan.
  </li>
  <li>
    Klik pada tab <b>Semua</b>.
  </li>
  <li>
    Klik pada butang <b>Tindakan</b> untuk memaparkan pop-up pilihan jenis tindakan.
  </li>
</ol>

<ExpandableImage
  src={tindakanRuanganKerjaImg}
  alt="Pilihan Tindakan Ruangan-Kerja Tapak Pembinaan"
  caption="Pilihan Tindakan Ruangan-Kerja Tapak Pembinaan"
  width={450}
/>

<ol start={7}>
  <li>
    Klik pada pilihan <b><i>Workspace</i> Tapak Pembinaan </b>.
  </li>
  <li>
    Halaman <b>Ruangan-Kerja Tapak Pembinaan</b> akan terpapar pada halaman baru.
  </li>
</ol>

</div>

<div className="step-card">

### Laman Ruangan-Kerja Tapak Pembinaan

<ol>
  <li>
    Halaman <b>Ruangan-Kerja Tapak Pembinaan</b> akan terpapar seperti di bawah.
  </li>
  <ExpandableImage
  src={ruanganKerjaTapakImg}
  alt="Laman Ruangan-Kerja Tapak Pembinaan"
  caption="Laman Ruangan-Kerja Tapak Pembinaan"
  width={650}
/>
  <li>
    Klik pada butang <b>Penilaian Kendiri</b> pada bahagian <b>Maklumat Tapak Pembinaan</b>.
  </li>
</ol>

<ExpandableImage
  src={penilaianKendiriButtonImg}
  alt="Butang Penilaian Kendiri"
  caption="Butang Penilaian Kendiri"
  width={650}
/>

<ol start={3}>
  <li>
    Halaman <b>Penilaian Kendiri</b> akan terpapar dalam tab halaman baru.
  </li>
</ol>

</div>

<div className="step-card">

### Laman Penilaian Kendiri OSHPA

<ol>
  <li>
    Halaman <b>Penilaian Kendiri OSHPA</b> akan terpapar seperti di bawah.
  </li>
<ExpandableImage
  src={halamanPenilaianKendiriImg}
  alt="Halaman Penilaian Kendiri OSHPA"
  caption="Halaman Penilaian Kendiri OSHPA"
  width={650}
/>
  <li>
    Semak maklumat yang dipaparkan pada ruangan <b>Maklumat Tapak Pembinaan</b>.
  </li>
  <li>
    Semak maklumat yang dipaparkan pada ruangan <b>Maklumat Pengisi</b>.
  </li>
</ol>

<ol start={4}>
  <li>
    Pada bahagian <b>Pematuhan</b>, klik pada senarai dropdown <b>Jenis Audit</b> dan pilih jenis audit.
  </li>
</ol>

<ExpandableImage
  src={jenisAuditImg}
  alt="Pilihan Jenis Audit"
  caption="Pilihan Jenis Audit"
  width={650}
/>

<ol start={5}>
  <li>
    <b>Senarai Semak OSHPA</b> akan terpapar berdasarkan jenis audit yang dipilih.
  </li>
</ol>

<ExpandableImage
  src={senaraiSemakOshpaImg}
  alt="Senarai Semak OSHPA"
  caption="Senarai Semak OSHPA"
  width={650}
/>

<ol start={6}>
  <li>
    Klik pada butang <b>Panduan Senarai Semak</b> untuk melihat panduan senarai semak. Panduan akan terpapar dalam halaman tab baru.
  </li>
</ol>

<ol start={7}>
  <li>
    Lengkapkan <b>Senarai Semak OSHPA</b> untuk kedua-dua jenis audit iaitu <b>Audit Dokumentasi</b> dan <b>Audit Fizikal</b>.
  </li>
  <li>
    Klik pada butang <b>Simpan</b> untuk menyimpan <b>Senarai Semak OSHPA</b>.
  </li>
</ol>

<ExpandableImage
  src={lengkapkanSenaraiSemakImg}
  alt="Lengkapkan Senarai Semak OSHPA"
  caption="Lengkapkan Senarai Semak OSHPA"
  width={650}
/>

<ol start={9}>
  <li>
    Markah semakan akan terpapar berdasarkan pengisian <b>Senarai Semak OSHPA</b>.
  </li>
</ol>

<ol start={10}>
  <li>
    Klik pada butang <b>Lihat Rumusan Semakan</b> untuk melihat rumusan semakan senarai semak yang telah diisi.
  </li>
</ol>

<ol start={11}>
  <li>
    Pop-up <b>Rumusan Semakan</b> akan terpapar seperti di bawah.
  </li>
</ol>

<ExpandableImage
  src={popupRumusanSemakanImg}
  alt="Pop-up Rumusan Semakan"
  caption="Pop-up Rumusan Semakan"
  width={650}
/>

<ol start={12}>
  <li>
    Klik pada butang <b>Hantar</b> untuk menghantar pengisian <b>Penilaian Kendiri OSHPA</b>.
  </li>
  <li>
    Klik butang <b>Ya, teruskan</b> untuk menghantar maklumat penilaian kendiri atau klik <b>Tidak</b> untuk membatalkan tindakan penghantaran.
  </li>
</ol>
<ol start={14}>
  <li>
    Pop-up <b>Penilaian Kendiri Berjaya Dihantar</b> akan terpapar.
  </li>
</ol>

<ExpandableImage
  src={berjayaDihantarImg}
  alt="Penilaian Kendiri Berjaya Dihantar"
  caption="Penilaian Kendiri Berjaya Dihantar"
  width={650}
/>

<ol start={15}>
  <li>
    Selepas klik butang <b>OK</b>, halaman akan memaparkan semula <b>Ruangan-Kerja Tapak Pembinaan</b>. Maklumat <b>Penilaian Kendiri</b> akan memaparkan maklumat dan gred penilaian kendiri yang telah diisi.
  </li>
  <li>
    Klik pada butang <b>Lihat</b> untuk melihat maklumat penilaian kendiri. Penilaian kendiri yang diisi akan dipaparkan pada halaman tab baru.
  </li>
</ol>

</div>