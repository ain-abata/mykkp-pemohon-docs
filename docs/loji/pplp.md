---
title: Permohonan Pemindahan Loji Pemunya
description: Panduan lengkap permohonan pemindahan loji pemunya
hide_table_of_contents: true
sidebar_label: 'Loji Pemunya'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📝 Permohonan Pemindahan Loji Pemunya (PPLP)

## 📌 Ringkasan Modul
Pemohon (Pemunya) membuat permohonan pemindahan lokasi loji dengan memilih senarai loji yang dikehendaki, membuat pemilihan pembukaan loji (jika perlu), memuat naik dokumen yang diperlukan dan menghantar permohonan.

## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar **Permohonan Pemindahan Loji Pemunya** adalah seperti berikut:
1. **Pemunya** loji yang telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.

Syarat-syarat bagi status loji yang dibenarkan untuk **Permohonan Pemindahan Loji Pemunya** adalah seperti berikut:
1. Aktif.   
2. Tidak Digunakan.
3. Dilupuskan (Tidak dibenarkan untuk menukar status loji)

Jenis jentera yang terlibat bagi **Permohonan Pemindahan Loji Pemunya** adalah seperti berikut:
1. PMA
2. PMD
3. PMT

## 📂 Dokumen Sokongan
Pemohon perlu menyediakan dokumen yang diperlukan bagi **Permohonan Pemindahan Loji Pemunya** seperti:

| Bil | Keterangan                                           | Syarat      |
|-----|------------------------------------------------------|-------------|
| 1.  | Surat Permohonan                                     | Wajib       |
| 2.  | Rekod Sewaan / Perjanjian di lokasi baru             | Wajib       |
| 3.  | Geran Kenderaan                                      | Tidak Wajib |
| 4.  | Lain – lain dokumen sokongan                         | Tidak Wajib |

## 🧭 Langkah-langkah Pemberitahuan

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuLoji from '@site/src/components/loji/menu-loji';

<MenuLoji
    stepNumber={2}
    pageName="Pemindahan Loji Pemunya (PPLP)"
    kategoriPermohonan="Pendaftaran Loji Baru dan Pindah Loji"
    moduleType="Permohonan Pemindahan Loji Pemunya (PPLP)" />

<div className="step-card">

### Langkah 3: Pengisian Borang Permohonan Pemindahan Loji Pemunya

import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';

import imgMaklumatAm from '@site/assets/images/loji/pplp/tab_maklumat_pemunya.png';

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Pemunya"
    hasRujukan={false}
    tabImgSrc={imgMaklumatAm} />

---

import SenaraiLoji from '@site/src/components/loji/tab/senarai-loji';

import imgSenaraiLojiPemunya from '@site/assets/images/loji/pplp/tab_senarai_loji.png';

<SenaraiLoji
    alphabetNumbering="B"
    tabNumber={2}
    tabName="Senarai Loji"
    tabImgSrc={imgSenaraiLojiPemunya}
    leftTableName="Senarai Loji Pemunya Yang Asal"
    rightTableName="Senarai Loji Loji Untuk Dipindah Lokasi"
    hasDropdownSearch={true} />

---

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';

import imgPerihalPemindahan from '@site/assets/images/loji/pplp/tab_perihal_pemindahan.png';

<DokumenSokongan
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Perihal Pemindahan"
    tabImgSrc={imgPerihalPemindahan} />

---

import TempatLojiDipindahkan from '@site/src/components/loji/tab/tempat-dipindahkan';

import imgTempatDipindahkan from '@site/assets/images/loji/pplp/tab_maklumat_tempat_loji_dipindahkan.png';

<TempatLojiDipindahkan
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Maklumat Tempat Loji Akan Dipindahkan"
    tabImgSrc={imgTempatDipindahkan} />

---

import imgDokSokongan from '@site/assets/images/loji/pplp/tab_dokumen_sokongan.png';

<DokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokSokongan} />

---

import Perakuan from '@site/src/components/loji/tab/perakuan';

import imgPerakuan from '@site/assets/images/loji/pplp/tab_perakuan.png';

import imgMesejBerjaya from '@site/assets/images/loji/pplp/mesej_penghantaran_berjaya.png';

<Perakuan 
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PPLP/XX/XXXXX"
    hasPayment={false} />

</div>

import SemakStatus from '@site/src/components/loji/semak-status';

import imgSedangProses from '@site/assets/images/loji/pplp/halaman_permohonan_sedang_diproses.png'

import imgSelesaiProses from '@site/assets/images/loji/pplp/halaman_permohonan_selesai_diproses.png'

<SemakStatus 
    stepNumber={4}
    moduleName="PPLP"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />

import SemakSurat from '@site/src/components/loji/semak-surat';

<SemakSurat
    stepNumber={5} />

import BatalOlehPemohon from '@site/src/components/admonitions/batal-oleh-pemohon'

<BatalOlehPemohon />