---
title: Pemberitahuan Basic Occupational Health Services (BOHS)
description: Panduan lengkap Basic Occupational Health Services
hide_table_of_contents: false
sidebar_label: 'BOHS'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';
import MenuBohs from '@site/src/components/BOHS/menu-bohs';
import TabMaklumatKerja from '@site/src/components/BOHS/tab-maklumat-tempat-kerja';
import TabPendedahanTK from '@site/src/components/BOHS/tab-pendedahan-tempat-kerja';
import TabPerakuan from '@site/src/components/BOHS/tab-perakuan';

import imgMaklumatKerja from '@site/assets/images/orang-kompeten/bohs/tab_maklumat_tempat_kerja.png';
import imgPendedahanTK from '@site/assets/images/orang-kompeten/bohs/tab_pendedahan_tempat_kerja.png';
import imgPerakuan from '@site/assets/images/orang-kompeten/bohs/tab_perakuan.png';
import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/bohs/mesej_penghantaran_berjaya.png';

# 📝 Pemberitahuan Basic Occupational Health Services

import LoginStep from '@site/src/components/login-step';


<div className="toc-only">
### [Langkah 1: Akses Halaman Log Masuk MyKKP](#toLoginStep)
</div>
<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />


<div className="toc-only">
### [Langkah 2: Halaman Pemberitahuan Basic Occupatioal Health Services](#toLoginStep)
</div>
<MenuBohs
    stepNumber={2}
    pageName="Pemberitahuan Basic Occupational Health Services"
    kategoriPermohonan="Pemberitahuan Basic Occupational Health Services"
    moduleType="Basic Occupational Health Services" />

<div className="step-card">

### Langkah 3: Pengisian Pemberitahuan Basic Occupational Health Services



<TabMaklumatKerja
tabNumber={1}
    tabName="Maklumat Tempat Kerja"
    tabImgSrc={imgMaklumatKerja}/>
---

<TabPendedahanTK
  tabNumber={2}
  tabName="Pendedahan Tempat Kerja"
  tabImgSrc={imgPendedahanTK}
/>
---

<TabPerakuan
    tabNumber={3}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    maklumanImgSrc={imgOkMesejBerjaya} />


</div>