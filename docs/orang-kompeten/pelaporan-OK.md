---
title: PELAPORAN ORANG KOMPETEN (OK)
description: Panduan lengkap Pelaporan Orang Kompeten
hide_table_of_contents: false
sidebar_label: 'Pelaporan OK'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 📝 Pelaporan Orang Kompeten (OK)

import LoginStep from '@site/src/components/login-step';

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

import MenuPelaporanOK from '@site/src/components/menu-pelaporan-oyk';

<div className="step-card">

### Halaman Maklumat OK / Orang Terlatih
  
<MenuPelaporanOK
    stepNumber={2}
    pageName="Maklumat OK / Orang Terlatih"
    kategoriPermohonan="Maklumat OK"
     />
</div>

<div className="step-card">

### Pengisian Pelaporan Orang Kompeten (OK)
#### Tab 1: Maklumat Pemohon

import imgTabMaklumatPemohonPEB1 from '@site/assets/images/orang-kompeten/pelaporan/tab_maklumatpemohon_peb1.png';
import imgTabMaklumatPemohonPEB2 from '@site/assets/images/orang-kompeten/pelaporan/tab_maklumatpemohon_peb2.png';
import imgTabMaklumatPemohon from '@site/assets/images/orang-kompeten/pelaporan/tab_maklumatpemohon.png';
import popupCarianTK from '@site/assets/images/orang-kompeten/pelaporan/popup_carian_TK.png';

<div>

Halaman <b>Pelaporan Orang Kompeten</b> berdasarkan jenis <b>Orang Kompeten</b> adalah seperti berikut:

<div className="step-card">
  <Tabs>
    <TabItem value="OYKPEB" label="Orang Kompeten Penaksir Risiko Bising (OYKPEB)" default>
      <h4 className="print-only">A. Pelaporan OK - Penaksir Risiko Bising (OYKPEB)</h4>
      <ExpandableImage
        src={imgTabMaklumatPemohonPEB1}
        alt="Paparan Tab 1: Maklumat Pemohon - Orang Kompeten Penaksir Risiko Bising (OYKPEB)"
        caption="Paparan Tab 1: Maklumat Pemohon - Orang Kompeten Penaksir Risiko Bising (OYKPEB)" 
        width={650} 
      />
      <Admonition type="tip">
      Medan <b>Tarikh Mula Penaksiran, Tarikh Akhir Penaksiran</b> dan jadual <b>Penaksiran Risiko Bising</b> hanya akan dipaparkan jika modul <b>Orang Kompeten Penaksir Risiko Bising (OYKPEB)</b> dipilih.       
    </Admonition>
      <ol>
          <li>Halaman <b>Tab 1: Maklumat Pemohon</b> akan dipaparkan.</li>
          <li>Klik butang <b>Carian</b> pada medan <b>No. Daftar Tempat Kerja</b> untuk membuat carian maklumat tempat kerja.</li>
      </ol>
      <ExpandableImage
        src={popupCarianTK}
        alt="Paparan pop-up Carian Tempat Kerja"
        caption={
                 <>
                    Paparan <i>pop-up</i> Carian Tempat Kerja
                </>
                }
        width={650}
      />
      <ol start={3}>
        <li>Isi nama tempat kerja pada medan <b>Carian Majikan</b> dan klik butang <b>Cari</b>.</li>
        <li>Klik butang <b>Pilih</b> pada nama tempat kerja yang dikehendaki. Maklumat tempat kerja akan dipaparkan.</li>
         <li>Pilih tarikh pada medan <b>Tarikh Mula Penaksiran</b> dan <b>Tarikh Akhir Penaksiran</b>.</li>
        <li>Isi maklumat yang diperlukan pada medan ruangan yang disediakan.</li>
        <li>Klik butang <b>Simpan</b> untuk menyimpan maklumat yang telah diisi.</li>
      </ol>  
      <ExpandableImage
        src={imgTabMaklumatPemohonPEB2}
        alt="Paparan Tab 1: Maklumat Pemohon - OYKPEB setelah disimpan"
        caption="Paparan Tab 1: Maklumat Pemohon - OYKPEB setelah disimpan"
        width={650}
      />
      <ol start={8}>
        <li>Jadual <b>Penaksiran Risiko Bising</b> akan dipaparkan.</li>
        <li>Klik butang <b>Tambah</b> untuk menambah maklumat penaksiran risiko bising.</li>
        <li>Klik butang <b>Kemaskini</b> untuk mengemaskini maklumat yang telah ditambah.</li>
        <li>Klik butang <b>Hapus</b> untuk menghapuskan maklumat penaksiran yang dikehendaki.</li>
        <li>Klik butang <b>Seterusnya</b> untuk ke halaman tab selanjutnya.</li>
      </ol>  
    </TabItem>
    <TabItem value="selainOYKPEB" label="Selain Penaksir Risiko Bising (OYKPEB)">
      <h4 className="print-only">B. Pelaporan OK - Selain Penaksir Risiko Bising (OYKPEB)</h4>
      <ExpandableImage
        src={imgTabMaklumatPemohon}
        alt="Contoh Paparan Pelaporan Orang Kompeten - Selain Penaksir Risiko Bising (OYKPEB)"
        caption="Contoh Paparan Pelaporan Orang Kompeten - Selain Penaksir Risiko Bising (OYKPEB)" />
      <ol>
          <li>Halaman <b>Tab 1: Maklumat Pemohon</b> akan dipaparkan.</li>
          <li>Klik butang <b>Carian</b> pada medan <b>No. Daftar Tempat Kerja</b> untuk membuat carian maklumat tempat kerja.</li>
      </ol>
      <ExpandableImage
        src={popupCarianTK}
        alt="Paparan pop-up Carian Tempat Kerja"
        caption={
                 <>
                    Paparan <i>pop-up</i> Carian Tempat Kerja
                </>
                }
        width={650}
      />
      <ol start={3}>
        <li>Isi nama tempat kerja pada medan <b>Carian Majikan</b> dan klik butang <b>Cari</b>.</li>
        <li>Klik butang <b>Pilih</b> pada nama tempat kerja yang dikehendaki. Maklumat tempat kerja akan dipaparkan.</li>
        <li>Isi maklumat yang diperlukan pada medan ruangan yang disediakan.</li>
        <li>Klik butang <b>Seterusnya</b> untuk ke halaman tab selanjutnya.</li>
      </ol>  
    </TabItem>
   </Tabs>
</div>
</div>


---

import OkDokumenSokongan from '@site/src/components/tab-ok/dokumen-sokongan';

import imgOkDokumenSokongan from '@site/assets/images/orang-kompeten/pelaporan/tab_dokumen_sokongan.png';

<OkDokumenSokongan
    tabNumber={2}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

6. Klik butang <b>Hantar</b> untuk menghantar maklumat pelaporan orang kompeten.
7. <b>Perakuan Penghantaran Pelaporan OK</b> akan dipaparkan pada halaman tab baru.
8. <i>Pop-up</i> no. rujukan <b>Pelaporan OK</b> akan dipaparkan.
9. Klik butang <b>OK</b>.
</div>

<div className="step-card">

### Semakan Maklumat Pelaporan OK

import imgSenaraiPelaporanOK from '@site/assets/images/orang-kompeten/pelaporan/senarai_pelaporan_ok.png';

<ExpandableImage
        src={imgSenaraiPelaporanOK}
        alt="Halaman Maklumat OK / Orang Terlatih - Senarai Pelaporan OK"
        caption="Halaman Maklumat OK / Orang Terlatih - Senarai Pelaporan OK"
        width={650}
/>

<ol>
    <li>Kembali semula ke halaman <b>Profil Saya - Maklumat OK / Orang Terlatih</b>.</li>
    <li>Skrol ke bawah dan pergi ke bahagian <b>Senarai Pelaporan OK</b>.</li>
    <li>Klik butang <b>Lihat</b> pada <b>Senarai Pelaporan OK</b> yang dikehendaki.</li>
    <li>Halaman <b>Pelaporan Orang Kompeten</b> yang telah dihantar akan dipaparkan pada tab baru.</li>
</ol>
</div>
