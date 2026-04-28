---
title: Permohonan Pemindahan Loji Hak Milik
description: Panduan lengkap permohonan pemindahan loji hak milik
hide_table_of_contents: true
sidebar_label: 'Loji Hak Milik'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📝 Permohonan Pemindahan Loji Hak Milik (PPLHM)

## 📌 Ringkasan Modul
Pemohon (Penghuni) membuat permohonan pemindahan loji hak milik dengan memilih senarai loji yang dikehendaki, membuat pemilihan pembukaan loji (jika perlu) dan tempat loji akan dipindahkan, memuat naik dokumen yang diperlukan dan menghantar permohonan.

## 👤 Peranan Terlibat & Syarat Permohonan
Kriteria pemohon yang dibenarkan untuk menghantar **Permohonan Pemindahan Loji Hak Milik** adalah seperti berikut:
1. **Penghuni** yang telah berdaftar sebagai **PATK Tahap 1** pada sistem MyKKP.

Syarat-syarat bagi status loji yang dibenarkan untuk **Permohonan Pemindahan Loji Hak Milik** adalah seperti berikut:
1. Aktif.   
2. Tidak Digunakan.
3. Dilupuskan (Tidak dibenarkan untuk menukar status loji)

Jenis jentera yang terlibat bagi **Permohonan Pemindahan Loji Hak Milik** adalah seperti berikut:
1. PMA
2. PMA (Lif)
3. PMD
4. PMT

## 📂 Dokumen Sokongan
Pemohon perlu menyediakan dokumen yang diperlukan bagi **Permohonan Pemindahan Loji Pemunya** seperti:

| Bil | Keterangan                                                               | Syarat         |
|-----|--------------------------------------------------------------------------|----------------|
| 1.  | Surat Permohonan                                                         | Wajib          |
| 2.  | Rekod Pembelian / Penjualan / Surat Akuan daripada Suruhanjaya Sumpah    | Wajib          |
| 3.  | Surat Akuan Lantikan Orang Kompeten bagi Pembukaan Loji (Jadual Ketujuh) | Jika Berkenaan |
| 4.  | Geran Kenderaan                                                          | Jika Berkenaan |
| 5.  | Lain – lain dokumen sokongan                                             | Jika Berkenaan |

## 🧭 Langkah-langkah Pemberitahuan

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuLoji from '@site/src/components/loji/menu-loji';

<MenuLoji
    stepNumber={2}
    pageName="Pemindahan Loji Hak Milik"
    kategoriPermohonan="Pendaftaran Loji Baru dan Pindah Loji"
    moduleType="Permohonan Pemindahan Loji Hak Milik" />

<div className="step-card">

### Langkah 3: Pengisian Borang Permohonan Pemindahan Loji Hak Milik

import MaklumatAm from '@site/src/components/loji/tab/maklumat-am';

import imgMaklumatAm from '@site/assets/images/loji/pplhm/tab_maklumat_am.png';

<MaklumatAm
    alphabetNumbering="A"
    tabNumber={1}
    tabName="Maklumat Am"
    hasRujukan={false}
    tabImgSrc={imgMaklumatAm}
    hasPemunyaAsalSection={true} />

---

import TempatLojiDipindahkan from '@site/src/components/loji/tab/tempat-dipindahkan';

import imgTempatDipindahkan from '@site/assets/images/loji/pplhm/tab_maklumat_tempat_loji_dipindahkan.png';

<TempatLojiDipindahkan
    alphabetNumbering="B"
    tabNumber={2}
    tabName="Maklumat Tempat Loji Akan Dipindahkan"
    tabImgSrc={imgTempatDipindahkan} />

---

import SenaraiLoji from '@site/src/components/loji/tab/senarai-loji';

import imgSenaraiLoji from '@site/assets/images/loji/pplhm/tab_senarai_loji.png';

<SenaraiLoji
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Senarai Loji"
    tabImgSrc={imgSenaraiLoji}
    hasDropdownSearch={false} />

---

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';

import imgPerihalPemindahan from '@site/assets/images/loji/pplhm/tab_perihal_pemindahan.png';

<DokumenSokongan
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Perihal Pemindahan"
    tabImgSrc={imgPerihalPemindahan} />

---

import imgDokSokongan from '@site/assets/images/loji/pplhm/tab_dokumen_sokongan.png';

<DokumenSokongan
    alphabetNumbering="E"
    tabNumber={5}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokSokongan} />

---

import Perakuan from '@site/src/components/loji/tab/perakuan';

import imgPerakuan from '@site/assets/images/loji/pplhm/tab_perakuan.png';

import imgMesejBerjaya from '@site/assets/images/loji/pplhm/mesej_penghantaran_berjaya.png';

<Perakuan 
    alphabetNumbering="F"
    tabNumber={6}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    mesejBerjayaImgSrc={imgMesejBerjaya}
    noRujukan="XX/PPLHM/XX/XXXXX"
    hasPayment={false} />

</div>

import SemakStatus from '@site/src/components/loji/semak-status';

import imgSedangProses from '@site/assets/images/loji/pplp/halaman_permohonan_sedang_diproses.png'

import imgSelesaiProses from '@site/assets/images/loji/pplp/halaman_permohonan_selesai_diproses.png'

<SemakStatus 
    stepNumber={4}
    moduleName="PPLHM"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />


import SemakSurat from '@site/src/components/loji/semak-surat';

<SemakSurat
    stepNumber={5} />

import BatalOlehPemohon from '@site/src/components/admonitions/batal-oleh-pemohon'

<BatalOlehPemohon />