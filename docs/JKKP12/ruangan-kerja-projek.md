---
title: Ruangan-Kerja Projek
description: Panduan lengkap Ruangan-Kerja Projek dan Kemaskini Projek
hide_table_of_contents: false
sidebar_label: 'Ruangan-Kerja Projek'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import LoginStep from '@site/src/components/login-step';

import lamanMenuUtamaImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/laman-menu-utama.png';
import lamanJkkp12Img from '@site/assets/images/JKKP12/ruangan-kerja-projek/laman-jkkp12.png';
import pengurusanProjekImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/pengurusan-jkkp12-projek.png';
import menuTindakanProjekImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/menu-tindakan-projek.png';
import ruanganKerjaProjekImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/ruangan-kerja-projek.png';
import doketProjekImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/doket-projek.png';
import senaraiTapakPembinaanImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/senarai-tapak-pembinaan.png';
import butiranLanjutImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/butiran-lanjut.png';
import butiranProjekImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/butiran-projek.png';
import sejarahPengemaskinianImg from '@site/assets/images/JKKP12/ruangan-kerja-projek/sejarah-pengemaskinian.png';

## 📌 Ringkasan Modul

**Ruangan-Kerja Projek** adalah modul yang digunakan untuk melihat dan mengurus maklumat projek JKKP12 yang telah didaftarkan dalam sistem MyKKP.

Melalui ruangan ini, pengguna boleh melihat rumusan projek, senarai tapak pembinaan, senarai deraf tapak, doket projek, penilaian, notis atau surat arahan, JKKP6 dan JKKP7.

## 📘 Glosari

| Bil. | Kata Kunci | Keterangan |
|---|---|---|
| 1. | Klien | Klien |
| 2. | Pemberitahu | Wakil Klien Domestik |
| 3. | PC | Kontraktor Prinsipal Kerja Pembinaan |
| 4. | CC | Kontraktor Kerja Pembinaan |
| 5. | PD | Pereka Bentuk Prinsipal |
| 6. | CD | Pereka Bentuk Kerja Pembinaan |

## 🔐 Akses Tindakan Ruangan-Kerja Projek

Peranan yang dibenarkan untuk melihat dan melakukan tindakan dalam **Ruangan-Kerja Projek** adalah bergantung kepada akses yang diberikan dalam sistem.

| Akses | Klien/Pemberitahu | PC/1 CC | Lebih Dari 1 CC | PD | CD |
|---|---|---|---|---|---|
| Ruangan-Kerja Projek | ✓ | ✓ | ✓ | ✓ | ✓ |
| Kemaskini Projek | ✓ |  |  |  |  |
| Senarai Deraf Tapak | ✓ |  |  |  |  |
| Kemaskini Deraf Tapak | ✓ |  |  |  |  |
| Hapus Projek | ✓ |  |  |  |  |
| Tambah Tapak | ✓ |  |  |  |  |
| Hapus Tapak | ✓ |  |  |  |  |
| Surat Pemberitahuan Projek | ✓ | ✓ | ✓ | ✓ | ✓ |
| Sijil Tapak | ✓ | ✓ | ✓ | ✓ | ✓ |
| Doket Projek | ✓ | ✓ | ✓ | ✓ | ✓ |
| Doket Tapak | ✓ | ✓ | ✓ | ✓ | ✓ |

## Ruangan-Kerja Projek

<div className="step-card">

### Akses Halaman Log Masuk MyKKP

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

</div>

<div className="step-card">

### Halaman Menu Utama

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
    Klik pada menu <b>JKKP12</b>.
  </li>
  <li>
    Laman <b>JKKP12</b> akan dipaparkan seperti berikut.
  </li>

  <ExpandableImage
    src={lamanJkkp12Img}
    alt="Laman JKKP12"
    caption="Laman JKKP12"
    width={650}
  />

  <li>
    Klik pada tab <b>Senarai Projek</b>.
  </li>
  <li>
    Buat carian berdasarkan <b>No. Projek</b> pada medan <b>Carian</b> dan klik ikon <b>Cari</b>.
  </li>
  <li>
    Hasil carian akan muncul seperti berikut.
  </li>
  <li>
    Klik pada butang <b>Tindakan</b>.
  </li>

  <ExpandableImage
    src={menuTindakanProjekImg}
    alt="Menu Tindakan Projek"
    caption="Menu Tindakan Projek"
    width={650}
  />

  <li>
    Dropdown tindakan akan terpapar seperti dalam rajah.
  </li>
  <li>
    Klik pada pilihan <b><i>Workspace</i> Projek</b>.
  </li>
</ol>

</div>

<div className="step-card">

### Halaman Ruangan-Kerja Projek

<ol>
  <li>
    Laman <b>Ruangan-Kerja Projek</b> akan dipaparkan seperti berikut.
  </li>

  <ExpandableImage
    src={ruanganKerjaProjekImg}
    alt="Laman Ruangan-Kerja Projek"
    caption="Laman Ruangan-Kerja Projek"
    width={650}
  />

  <li>
    Bahagian <b>Rumusan Projek</b> akan memaparkan maklumat projek.
  </li>
</ol>

#### Kemaskini Projek

<ol>
  <li>
    Klik pada butang <b>Kemaskini Projek</b> untuk mengemaskini maklumat projek.
  </li>
  <li>
    Halaman baru akan terpapar untuk pengemaskinian maklumat projek.
  </li>
</ol>

<Admonition type="info" title="Nota">
  Sila rujuk bahagian <b>Kemaskini Projek</b> untuk panduan mengemaskini maklumat projek.
</Admonition>

#### Doket Projek

<ol>
  <li>
    Pada paparan <b>Rumusan Projek</b>, klik butang <b>Doket Projek</b> untuk melihat doket projek.
  </li>
  <li>
    Halaman baru akan terpapar untuk memaparkan <b>Doket Projek</b>.
  </li>
</ol>

---

### Senarai Tapak Pembinaan

<ol>
  <li>
    Bahagian <b>Senarai Tapak Pembinaan</b> akan dipaparkan seperti berikut.
  </li>

  <ExpandableImage
    src={senaraiTapakPembinaanImg}
    alt="Senarai Tapak Pembinaan"
    caption="Senarai Tapak Pembinaan"
    width={650}
  />

  <li>
    Klik tab <b>Senarai Tapak Pembinaan</b> untuk melihat senarai tapak pembinaan.
  </li>
  <li>
    Klik pada butang <b>Tindakan</b> pada jadual <b>Senarai Tapak Pembinaan</b> untuk melaksanakan sebarang tugasan berkaitan tapak pembinaan.
  </li>
  <li>
    Klik pada tab <b>Senarai Deraf Tapak</b> untuk melihat senarai deraf tapak.
  </li>
</ol>

<Admonition type="info" title="Nota">
  <b>Senarai Deraf Tapak</b> hanya akan dipaparkan jika terdapat tapak yang belum dihantar oleh <b>Klien/Pemberitahu</b>.
</Admonition>

<ol start={5}>
  <li>
    Klik pada butang <b>Tindakan</b> pada jadual <b>Senarai Deraf Tapak</b> untuk melaksanakan sebarang tindakan berkaitan deraf tapak pembinaan.
  </li>
</ol>
---

### Butiran Lanjut

<ol>
  <li>
    Bahagian <b>Butiran Lanjut</b> akan dipaparkan seperti berikut.
  </li>

  <ExpandableImage
    src={butiranLanjutImg}
    alt="Butiran Lanjut"
    caption="Butiran Lanjut"
    width={650}
  />
</ol>

#### Senarai Penilaian

<ol>
  <li>
    Klik tab <b>Penilaian JKKP</b> untuk melihat senarai penilaian JKKP.
  </li>
  <li>
    Klik pada butang <b>Lihat</b> pada jadual <b>Penilaian JKKP</b> untuk melihat maklumat <b>Gred Penguatkuasaan JKKP</b>, sekiranya ada.
  </li>
  <li>
    Klik tab <b>Penilaian Kendiri</b> untuk melihat senarai penilaian kendiri.
  </li>
  <li>
    Klik pada butang <b>Lihat</b> pada jadual <b>Penilaian Kendiri</b> untuk melihat maklumat <b>Penilaian Kendiri</b>, sekiranya ada.
  </li>
</ol>

#### Senarai Notis/Surat Arahan

<ol>
  <li>
    Klik tab <b>Notis/Surat Arahan</b> untuk melihat senarai notis dan surat arahan.
  </li>
  <li>
    Pilih dropdown <b>Kategori Carian</b> dan isi kata kunci pada medan <b>Carian</b> sebelum membuat carian <b>Notis/Surat Arahan</b>, sekiranya ada.
  </li>
</ol>

#### Senarai JKKP6

<ol>
  <li>
    Klik tab <b>JKKP 6</b> untuk melihat senarai JKKP 6.
  </li>
  <li>
    Pilih dropdown <b>Kategori Carian</b> dan isi kata kunci pada medan <b>Carian</b> sebelum membuat carian <b>JKKP6</b>, sekiranya ada.
  </li>
</ol>

#### Senarai JKKP7

<ol>
  <li>
    Klik tab <b>JKKP 7</b> untuk melihat senarai JKKP 7.
  </li>
  <li>
    Pilih dropdown <b>Kategori Carian</b> dan isi kata kunci pada medan <b>Carian</b> sebelum membuat carian <b>JKKP7</b>, sekiranya ada.
  </li>
</ol>

---

### Kemaskini Projek
<ol>  
  <li>
    Bahagian <b>Rumusan Projek</b> akan memaparkan maklumat projek.
  </li>
  <li>
    Klik pada butang <b>Kemaskini Projek</b> untuk mengemaskini maklumat projek.
  </li>
  <li>
    Halaman baru akan terpapar untuk pengemaskinian maklumat projek.
  </li>
  <li>
    Kemaskini maklumat projek yang diperlukan.
  </li>

  <ExpandableImage
    src={butiranProjekImg}
    alt="Laman Butiran Projek"
    caption="Laman Butiran Projek"
    width={650}
  />

  <li>
    Klik pada butang <b>Set Semula</b> untuk memuat semula maklumat yang disimpan sebelum ini, jika perlu.
  </li>
  <li>
    Klik pada butang <b>Simpan</b> untuk menyimpan maklumat yang telah dikemaskini.
  </li>
</ol>

</div>

