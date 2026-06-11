---
title: Kemaskini Tempat Kerja
description: Panduan lengkap Kemaskini Tempat Kerja
hide_table_of_contents: false
sidebar_label: 'Kemaskini Tempat Kerja'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Kemaskini Tempat Kerja

import LoginStep from '@site/src/components/login-step';


<div className="step-card">

### Akses Halaman Log Masuk MyKKP

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

</div>
<div className="step-card">
import LangkahMenuUtama from '@site/src/components/menu-kemaskini-tk';

import imgMenuUtama from '@site/assets/images/orang-kompeten/kemaskini-tk/menu_utama.png';
    
### Halaman Menu Utama
<LangkahMenuUtama
  stepNumber={2}
  menuUtamaImgSrc={imgMenuUtama}
/>
</div>
<div className="step-card">
import LangkahModulKemaskiniTempatKerja from '@site/src/components/tab-ok/kemaskini-tempat-kerja';

import imgModulKemaskini from '@site/assets/images/orang-kompeten/kemaskini-tk/modul_kemaskini_tempat_kerja.png';
import imgLokasiKemaskini from '@site/assets/images/orang-kompeten/kemaskini-tk/lokasi_kemaskini_tempat_kerja.png';

import imgMaklumatPerhubungan from '@site/assets/images/orang-kompeten/kemaskini-tk/maklumat_tempat_kerja.png';

### Halaman Kemaskini Tempat Kerja

<LangkahModulKemaskiniTempatKerja
  stepNumber={3}
  modulImgSrc={imgModulKemaskini}
  IICMSImgSrc={imgLokasiKemaskini}
  maklumatPerhubunganImgSrc={imgMaklumatPerhubungan}
/>
</div>

import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />