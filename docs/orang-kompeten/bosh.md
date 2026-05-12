---
title: Pemberitahuan Basic Occupational Health Services (BOSH)
description: Panduan lengkap Basic Occupational Health Services
hide_table_of_contents: true
sidebar_label: 'BOSH'
---
import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pemberitahuan Basic Occupational Health Services

import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import MenuBosh from '@site/src/components/BOSH/menu-bosh';

<MenuBosh
    stepNumber={2}
    pageName="Pemberitahuan Basic Occupational Health Services"
    kategoriPermohonan="Pemberitahuan Basic Occupational Health Services"
    moduleType="Basic Occupational Health Services" />

<div className="step-card">

### Langkah 3: Pengisian Pemberitahuan Basic Occupational Health Services

import TabMaklumatKerja from '@site/src/components/BOSH/tab-maklumat-tempat-kerja';

import imgMaklumatKemalangan from '@site/assets/images/orang-kompeten/bosh/tab_maklumat_tempat_kerja.png';


<TabMaklumatKerja
tabNumber={1}
    tabName="Maklumat Tempat Kerja"
    tabImgSrc={imgMaklumatKemalangan}/>
---

import TabPendedahanTK from '@site/src/components/BOSH/tab-pendedahan-tempat-kerja';

import imgPendedahanTK from '@site/assets/images/orang-kompeten/bosh/tab_pendedahan_tempat_kerja.png';

<TabPendedahanTK
  tabNumber={2}
  tabName="Pendedahan Tempat Kerja"
  tabImgSrc={imgPendedahanTK}
/>
---

import TabPerakuan from '@site/src/components/BOSH/tab-perakuan';

import imgPerakuan from '@site/assets/images/orang-kompeten/bosh/tab_perakuan.png';

import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/bosh/mesej_penghantaran_berjaya.png';

<TabPerakuan
    tabNumber={3}
    tabName="Perakuan"
    tabImgSrc={imgPerakuan}
    maklumanImgSrc={imgOkMesejBerjaya} />


</div>