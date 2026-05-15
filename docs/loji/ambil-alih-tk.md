---
title: Permohonan Pemberitahuan Berkenaan Ambil Alih Tempat Kerja
description: Panduan lengkap permohonan pemberitahuan berkenaan ambil alih tempat kerja
hide_table_of_contents: false
sidebar_label: 'Pemberitahuan Berkenaan Ambil Alih Tempat Kerja'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 🧭 Langkah-langkah Permohonan Pemberitahuan Berkenaan Ambil Alih Tempat Kerja

import LoginStep from '@site/src/components/login-step';


<div className="toc-only">
### [Langkah 1: Akses Halaman Log Masuk MyKKP](#toLoginStep)
</div>
<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuLoji from '@site/src/components/loji/menu-loji';

<div className="toc-only">
### [Langkah 2: Halaman Pemberitahuan Berkenaan Ambil Alih Tempat Kerja](#toLoginStep)
</div>
<MenuLoji
    stepNumber={2}
    pageName="Proses Ambil Alih"
    kategoriPermohonan="Pemberitahuan Tempat Kerja"
    moduleType="Pemberitahuan Berkenaan Ambil Alih Tempat Kerja" />

<div className="step-card">

### Langkah 3: Pengisian Borang Pemberitahuan Berkenaan Ambil Alih Tempat Kerja

#### A. Tab 1: Maklumat Penduduk Dulu

import imgMaklumatDulu from '@site/assets/images/loji/ambil-alih-tk/tab_maklumat_penduduk_dulu.png';

<ExpandableImage
    src={imgMaklumatDulu}
    alt="Tab 1: Maklumat Penduduk Dulu"
    caption="Tab 1: Maklumat Penduduk Dulu"
    width={450} />

1. Semak maklumat pada halaman.
2. Klik butang **Seterusnya**.

#### B. Butir-Butir Kilang

import imgButirKilang from '@site/assets/images/loji/ambil-alih-tk/tab_butir_kilang.png';

<ExpandableImage
    src={imgButirKilang}
    alt="Tab 2: Butir-Butir Kilang"
    caption="Tab 2: Butir-Butir Kilang"
    width={450} />

1. Isi **Nama Kilang/Nama Tempat Kerja** yang terkini.
<Admonition type="info">
    Klik *checkbox* jika sekiranya **Nama Penduduk Sekarang** sama seperti **Nama Kilang/Nama Tempat Kerja**.
</Admonition>
2. Kemaskini maklumat **Penduduk Sekarang** pada medan yang disediakan. 
<Admonition type="info">
    Sekiranya maklumat **Penduduk Sekarang** sama seperti **Penduduk Dulu**, tidak perlu untuk mengemaskini.
</Admonition>

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';

import imgDokumenSokongan from '@site/assets/images/loji/ambil-alih-tk/tab_dokumen_sokongan.png';

<DokumenSokongan
    alphabetNumbering="C"
    tabNumber={3}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokumenSokongan} />

import Perakuan from '@site/src/components/loji/tab/perakuan';

import imgPerakuan from '@site/assets/images/loji/ambil-alih-tk/tab_perakuan.png';

<Perakuan
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    noRujukan="XX/102/XX/XXXXX"
    hasPayment={false} />

import BatalOlehPemohon from '@site/src/components/admonitions/batal-oleh-pemohon';

<BatalOlehPemohon />

</div>

import SemakStatus from '@site/src/components/loji/semak-status';

import imgSedangProses from '@site/assets/images/loji/ambil-alih-tk/halaman_permohonan_sedang_diproses.png';

import imgSelesaiProses from '@site/assets/images/loji/ambil-alih-tk/halaman_permohonan_selesai_diproses.png';

<SemakStatus 
    stepNumber={4}
    moduleName="Ambil Alih Tempat Kerja"
    imgTabSedangDiproses={imgSedangProses}
    imgTabSelesaiDiproses={imgSelesaiProses} />