---
title: PELAPORAN ORANG KOMPETEN (OYK)
description: Panduan lengkap pelaporan orang kompeten
hide_table_of_contents: true
sidebar_label: 'Pelaporan OYK'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pelaporan Orang Kompeten
import LoginStep from '@site/src/components/login-step';

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />

import LangkahMaklumatOyk from '@site/src/components/menu-pelaporan-oyk';

import imgLamanPemohon from '@site/assets/images/orang-kompeten/pelaporan/menu_pelaporan.png';
import imgSubMenuProfil from '@site/assets/images/orang-kompeten/pelaporan/sub_menu_profil_saya.png';
import imgMaklumatOyk from '@site/assets/images/orang-kompeten/pelaporan/maklumat_oyk.png';

<LangkahMaklumatOyk
  stepNumber={2}
  lamanPemohonImgSrc={imgLamanPemohon}
  subMenuProfilImgSrc={imgSubMenuProfil}
  maklumatOykImgSrc={imgMaklumatOyk}
/>

<div className="step-card">

### Langkah 3: Pengisian Pelaporan Orang Kompeten

import TabMaklumatPemberitahu from '@site/src/components/kemalangan-aduan/tab/tab-maklumat-pemberitahu';

import imgMaklumatPemberitahu from '@site/assets/images/orang-kompeten/pelaporan/tab_maklumat_pemohon.png';

import popupImgSrc from '@site/assets/images/orang-kompeten/pelaporan/popup_carian_premis.png';

<TabMaklumatPemberitahu
  tabNumber={1}
  tabName="Maklumat Pemohon"
  tabImgSrc={imgMaklumatPemberitahu}
  popupImgSrc={popupImgSrc}

/>

---

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/pelaporan/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    alphabetNumbering="B"
    tabNumber={2}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

6. Klik butang <b>Hantar</b>.

</div>
import WhatNext from '@site/src/components/tab-ok/what-next';

<WhatNext />