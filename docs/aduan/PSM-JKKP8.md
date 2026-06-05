---
title: Pelaporan Sepanjang Masa (PSM)
description: Panduan lengkap halaman Pelaporan Sepanjang Masa (PSM) dan penghantaran Perakuan JKKP8.
hide_table_of_contents: false
sidebar_label: Pelaporan Sepanjang Masa (PSM)
---
import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# 📝 Pelaporan Sepanjang Masa (PSM)

import LoginStep from '@site/src/components/login-step';

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

import MenuJKKP8 from '@site/src/components/kemalangan-aduan/menu-JKKP8';

<div className="step-card">

### Halaman Pelaporan Sepanjang Masa
  
<MenuJKKP8
    stepNumber={2}
    pageName="Pelaporan Sepanjang Masa"
    kategoriPermohonan="Majikan (PATK L1)"
     />

</div>

<div className="step-card">

### Membuat Pelaporan Baru - JKKP6, JKKP7 dan JKKP8

import imgPilihLaporan from '@site/assets/images/kemalangan-aduan/jkkp8-minor/psm-pilihlaporan.png';
import imgPopupPilihLaporan from '@site/assets/images/kemalangan-aduan/psm/psm-popuppilihlaporan.png';

<ExpandableImage
        src={imgPilihLaporan}
        alt="Halaman Pelaporan Sepanjang Masa - Pilih Laporan"
        caption="Halaman Pelaporan Sepanjang Masa - Pelaporan Baru"
        width={650}
      />

<ol>
    <li>Klik butang <b>Pelaporan Baru – JKKP6, 7 Dan 8</b>.</li>
</ol>    

<ExpandableImage
        src={imgPopupPilihLaporan}
        alt="Paparan pop-up Pilih Pelaporan Baru"
        caption={
                 <>
                    Paparan <i>pop-up</i> Pilih Pelaporan Baru
                </>
                }
        width={650}
      />

<ol>
    <li>Pilih <b>Jenis Pelaporan</b> yang dikehendaki dan klik butang <b>OK</b>.</li>
    <li>Isi maklumat yang diperlukan.</li>
    <li>Klik butang <b>Seterusnya</b> untuk ke halaman pengisian pelaporan.</li>
</ol>
</div>

<div className="step-card">

### Tab Kemalangan Pekerjaan pada halaman Pelaporan Sepanjang Masa

import imgTabKemalanganPekerjaan from '@site/assets/images/kemalangan-aduan/psm/psm-kemalanganpekerjaan.png';

<ExpandableImage
        src={imgTabKemalanganPekerjaan}
        alt="Halaman Tab Kemalangan Pekerjaan"
        caption="Halaman tab Kemalangan Pekerjaan"
        width={650}
      />

<ol>
    <li>Klik butang tab <b>Kemalangan Pekerjaan</b>.</li>
    <li>Pemberitahuan Kemalangan Pekerjaan (JKKP6) dan Kes Kemalangan JKKP8 yang telah dihantar oleh pemohon akan dipaparkan pada tab <b>Kemalangan Pekerjaan</b>.</li>
</ol>

<Admonition type="info"> 
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li><b>Tab Kemalangan Pekerjaan – JKKP8</b> memaparkan Kes JKKP8 dan Kemalangan Pekerjaan (JKKP6) yang telah dihantar oleh pemohon seperti berikut:</li>
            <ol>
                <li>Maut</li>
                <li>Tanpa Hilang Upaya Kekal (THUK)</li>
                <li>Hilang Upaya Kekal (HUK)</li>
            </ol>
        <li><b>Tab Kemalangan Pekerjaan – Bukan JKKP8</b> memaparkan senarai Pemberitahuan Kemalangan Pekerjaan (JKKP6) yang telah diklasifikasikan sebagai <b>Kes Duplikasi</b> atau <b>Bukan Kemalangan Pekerjaan</b> oleh Pegawai Siasatan JKKP Negeri.</li>
    </ol>
</Admonition>

#### A. Mengisi dan Mengemaskini Maklumat JKKP9

import imgKemaskiniJKKP9 from '@site/assets/images/kemalangan-aduan/psm/psm-kemaskinijkkp9.png';

<ExpandableImage
        src={imgKemaskiniJKKP9}
        alt="Halaman Tab Kemalangan Pekerjaan - JKKP9"
        caption="Halaman tab Kemalangan Pekerjaan - Kemaskini JKKP9"
        width={650}
      />

<ol>
    <li>Klik butang <b>JKKP9</b> untuk mengemaskini maklumat JKKP9.</li>
</ol>

<Admonition type="info"> 
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Pemohon boleh mengisi maklumat JKKP9 pada tab <b>Kemalangan Pekerjaan – JKKP8</b> berdasarkan klasifikasi kemalangan yang dipilih dalam JKKP6. </li>
        <li>Pengisian JKKP9 boleh dilakukan bagi jenis klasifikasi kemalangan seperti berikut:</li>
            <ol>
                <li>Maut</li>
                <li>Tanpa Hilang Upaya Kekal (THUK)</li>
                <li>Hilang Upaya Kekal (HUK)</li>
                <li>Kejadian Berbahaya</li>
            </ol>  
        <li>Pemohon <b>tidak</b> boleh mengisi maklumat JKKP9 bagi kes JKKP6 yang telah <b>diklasifikasikan sebagai Kes Duplikasi atau Bukan Kemalangan Pekerjaan</b> oleh Pegawai Siasatan JKKP Negeri.</li>
    </ol>
</Admonition>

#### B. Lihat Butiran JKKP6

import imgLihatJKKP6 from '@site/assets/images/kemalangan-aduan/psm/psm-lihatjkkp6.png';

<ExpandableImage
        src={imgLihatJKKP6}
        alt="Halaman Tab Kemalangan Pekerjaan - Butiran"
        caption="Halaman tab Kemalangan Pekerjaan - Lihat Butiran JKKP6"
        width={650}
      />

<ol>
    <li>Klik butang <b>Butiran</b> untuk melihat maklumat JKKP6 yang telah dihantar.</li>
</ol>

<Admonition type="info"> 
    Maklumat JKKP6 akan memaparkan data yang diisi oleh pemohon, tetapi ia akan dikemaskini berdasarkan keputusan Pegawai Siasatan JKKP Negeri setelah pemberitahuan kemalangan selesai diproses.
</Admonition>

#### C. Lihat Butiran JKKP8

import imgLihatJKKP8 from '@site/assets/images/kemalangan-aduan/jkkp8-minor/psm-lihatjkkp8.png';

<ExpandableImage
        src={imgLihatJKKP8}
        alt="Halaman Tab Kemalangan Pekerjaan - Lihat JKKP8"
        caption="Halaman tab Kemalangan Pekerjaan - Lihat JKKP8"
        width={650}
      />

<ol>
    <li>Klik butang <b>Lihat JKKP8</b> untuk melihat maklumat JKKP8 yang telah dihantar.</li>
</ol>
</div>

<div className="step-card">

### Tab Keracunan dan Penyakit Pekerjaan pada halaman Pelaporan Sepanjang Masa

import imgTabKeracunanPenyakit from '@site/assets/images/kemalangan-aduan/psm/psm-keracunanpenyakit.png';

<ExpandableImage
        src={imgTabKeracunanPenyakit}
        alt="Halaman Tab Keracunan dan Penyakit Pekerjaan"
        caption="Halaman tab Keracunan dan Penyakit Pekerjaan"
        width={650}
      />

<ol>
    <li>Klik butang tab <b>Keracunan dan Penyakit Pekerjaan</b>.</li>
    <li>Pemberitahuan Keracunan dan Penyakit Pekerjaan (JKKP7) yang telah dihantar oleh pemohon akan dipaparkan pada tab <b>Keracunan dan Penyakit Pekerjaan</b>.</li>
</ol>

<Admonition type="info"> 
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li><b>Tab Keracunan dan Penyakit Pekerjaan – JKKP8</b> memaparkan Senarai Keracunan dan Penyakit Pekerjaan (JKKP7) yang diklasifikasikan sebagai <b>Occupational Diseases (OD)</b> oleh pemohon.</li>
        <li><b>Tab Keracunan dan Penyakit Pekerjaan – Bukan JKKP8</b> memaparkan Senarai Keracunan dan Penyakit Pekerjaan (JKKP7) yang telah diklasifikasikan sebagai <b>Non-Occupational Disease (NON)</b> atau <b>Kes Duplikasi</b> oleh Pegawai Siasatan JKKP Negeri.</li> 
    </ol>
</Admonition>

#### A. Mengisi Maklumat JKKP10

import imgIsiJKKP10 from '@site/assets/images/kemalangan-aduan/psm/psm-isijkkp10.png';

<ExpandableImage
        src={imgIsiJKKP10}
        alt="Halaman Tab Keracunan dan Penyakit Pekerjaan - JKKP10"
        caption="Halaman tab Keracunan dan Penyakit Pekerjaan - JKKP10"
        width={650}
      />

<ol>
    <li>Klik butang <b>JKKP10</b> untuk mengisi maklumat JKKP10.</li>
</ol>

<Admonition type="info"> 
    Butang JKKP10 hanya akan dipaparkan pada paparan pemohon sekiranya Pegawai Siasatan JKKP Negeri mengarahkan pemohon untuk mengisi dan menghantar borang JKKP10.
</Admonition>

#### B. Lihat Maklumat JKKP7

import imgLihatJKKP7 from '@site/assets/images/kemalangan-aduan/psm/psm-lihatjkkp7.png';

<ExpandableImage
        src={imgLihatJKKP7}
        alt="Halaman Tab Keracunan dan Penyakit Pekerjaan - Butiran"
        caption="Halaman tab Keracunan dan Penyakit Pekerjaan - Lihat Buritan JKKP7"
        width={650}
      />

<ol>
    <li>Klik butang <b>Butiran</b> untuk melihat maklumat JKKP7 yang telah dihantar.</li>
</ol>
</div>

<div className="step-card">

### Tab Kejadian Berbahaya pada halaman Pelaporan Sepanjang Masa

import imgTabKejadianBerbahaya from '@site/assets/images/kemalangan-aduan/psm/psm-kejadianberbahaya.png';

<ExpandableImage
        src={imgTabKejadianBerbahaya}
        alt="Halaman Tab Kejadian Berbahaya"
        caption="Halaman tab Kejadian Berbahaya"
        width={650}
      />

<ol>
    <li>Klik butang tab <b>Kejadian Berbahaya</b>.</li>
    <li>Pemberitahuan Kemalangan Pekerjaan (JKKP6) bagi jenis klasifikasi kemalangan Kejadian Berbahaya yang telah dihantar oleh pemohon akan dipaparkan pada tab <b>Kejadian Berbahaya</b>.</li>
</ol>

<Admonition type="info"> 
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li><b>Tab Kejadian Berbahaya – JKKP8</b> memaparkan senarai JKKP6 bagi jenis klasifikasi kemalangan <b>Kejadian Berbahaya</b>.</li>
        <li><b>Tab Kejadian Berbahaya – Bukan JKKP8</b> memaparkan senarai Kejadian Berbahaya yang telah diklasifikasikan sebagai <b>Kes Duplikasi</b> atau <b>Bukan Kemalangan Pekerjaan</b> oleh Pegawai Siasatan JKKP Negeri.</li> 
    </ol>
</Admonition>

#### A. Mengisi dan Mengemaskini Maklumat JKKP9

import imgKemaskiniJKKP9KB from '@site/assets/images/kemalangan-aduan/psm/psm-kemaskinijkkp9-kb.png';

<ExpandableImage
        src={imgKemaskiniJKKP9KB}
        alt="Halaman Tab Kejadian Berbahaya - JKKP9"
        caption="Halaman tab Kejadian Berbahaya - Kemaskini JKKP9"
        width={650}
      />

<ol>
    <li>Klik butang <b>JKKP9</b> untuk mengemaskini maklumat JKKP9.</li>
</ol>

<Admonition type="info"> 
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Pemohon boleh mengisi maklumat JKKP9 pada tab <b>Kejadian Berbahaya – JKKP8</b> bagi kes Kejadian Berbahaya yang telah dihantar. </li>
        <li>Pemohon <b>tidak</b> boleh mengisi maklumat JKKP9 bagi kes Kejadian Berbahaya yang telah <b>diklasifikasikan sebagai Kes Duplikasi atau Bukan Kemalangan Pekerjaan</b> oleh Pegawai Siasatan JKKP Negeri.</li>
    </ol>
</Admonition>

#### B. Lihat Butiran JKKP6

import imgLihatJKKP6KB from '@site/assets/images/kemalangan-aduan/psm/psm-lihatjkkp6-kb.png';

<ExpandableImage
        src={imgLihatJKKP6KB}
        alt="Halaman Tab Kejadian Berbahaya - Butiran"
        caption="Halaman tab Kejadian Berbahaya - Lihat Butiran JKKP6"
        width={650}
      />

<ol>
    <li>Klik butang <b>Butiran</b> untuk melihat maklumat Kejadian Berbahaya yang telah dihantar.</li>
</ol>

<Admonition type="info"> 
    Maklumat JKKP6 akan memaparkan data yang diisi oleh pemohon, tetapi ia akan dikemaskini berdasarkan keputusan Pegawai Siasatan JKKP Negeri setelah pemberitahuan kemalangan selesai diproses.
</Admonition>
</div>

<div className="step-card">

### Lihat Rumusan Pelaporan Sepanjang Masa

import imgTabRumusan from '@site/assets/images/kemalangan-aduan/psm/psm-rumusan.png';

<ExpandableImage
        src={imgTabRumusan}
        alt="Halaman Tab Rumusan"
        caption="Halaman tab Rumusan Pelaporan Sepanjang Masa"
        width={650}
      />

<ol>
    <li>Klik butang tab <b>Rumusan</b>.</li>
    <li>Tab <b>Rumusan</b> akan memaparkan maklumat kiraan rumusan Pelaporan Sepanjang Masa bagi senarai pemberitahuan JKKP6, JKKP7 dan JKKP8 yang dihantar oleh pemohon.</li>
</ol>

<Admonition type="info"> 
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Kes JKKP6 dan JKKP7 yang telah diklasifikasikan sebagai <b>Kes Duplikasi</b> dan <b>Bukan Kemalangan Pekerjaan tidak akan termasuk dalam pengiraan</b> Rumusan Pelaporan Sepanjang Masa.</li>
        <li>Pengiraan rumusan JKKP6 adalah berdasarkan maklumat JKKP9 yang telah dihantar oleh pemohon. Jika JKKP9 tidak dihantar, pengiraan rumusan JKKP6 adalah berdasarkan pengisian Pegawai Siasatan JKKP Negeri.</li> 
        <li>Rumusan pengiraan JKKP7 adalah berdasarkan pengisian Pegawai Siasatan JKKP Negeri</li>
    </ol>
</Admonition>
</div>

<div className="step-card">

### Kemaskini Maklumat Profil Tahun

import imgKemaskiniProfilTahun from '@site/assets/images/kemalangan-aduan/psm/psm-kemaskinitahun.png';
import imgPopupProfilTahun from '@site/assets/images/kemalangan-aduan/psm/psm-popuptahun.png';

<ExpandableImage
        src={imgKemaskiniProfilTahun}
        alt="Halaman Pelaporan Sepanjang Masa - Kemaskini Profil Tahun"
        caption="Halaman Pelaporan Sepanjang Masa - Kemaskini Profil Tahun"
        width={650}
      />

<ol>
    <li>Klik butang <b>Kemaskini Profil Tahun</b> untuk mengemaskini profil tahun.</li>
</ol>

<ExpandableImage
        src={imgPopupProfilTahun}
        alt="Paparan Pop-up Jumlah Jam Bekerja dan Purata Pekerja"
        caption={
                 <>
                    Paparan <i>pop-up</i> Jumlah Jam Bekerja dan Purata Pekerja
                </>
                }
        width={650}
      />

<ol start={2}>
    <li>Klik butang <b>Panduan Pengiraan</b> untuk melihat panduan pengiraan purata tahunan pekerja.</li>
    <li>Isi maklumat profil tahun pada medan yang mandatori.</li>
    <li>Klik butang <b>Kemaskini</b> untuk menyimpan maklumat yang telah diisi.</li>
</ol>
</div>

<div className="step-card">

### Hantar Perakuan JKKP8

import imgHantarPerakuan from '@site/assets/images/kemalangan-aduan/psm/psm-hantarperakuan.png';
import imgPopupPerakuan from '@site/assets/images/kemalangan-aduan/psm/psm-popupperakuan.png';

<ExpandableImage
        src={imgHantarPerakuan}
        alt="Halaman Pelaporan Sepanjang Masa - Hantar Perakuan JKKP8"
        caption="Halaman Pelaporan Sepanjang Masa - Hantar Perakuan JKKP8"
        width={650}
      />

<ol>
    <li>Klik butang <b>Hantar Perakuan JKKP8</b> untuk menghantar perakuan JKKP8.</li>
</ol>

<ExpandableImage
        src={imgPopupPerakuan}
        alt="Paparan Pop-up Perakuan JKKP8"
        caption={
                 <>
                    Paparan <i>pop-up</i> Perakuan JKKP8
                </>
                }
        width={650}
      />

<ol start={2}>
    <li>Klik butang <i>checkbox</i> untuk membuat perakuan.</li>
    <li>Klik butang <b>Hantar</b> untuk menghantar perakuan JKKP8.</li>
</ol>
</div>

<div className="step-card">

### Muat Turun Pelaporan JKKP8

import imgMuatTurunJKKP8 from '@site/assets/images/kemalangan-aduan/psm/psm-muatturunjkkp8.png';
import imgLaporanJKKP8 from '@site/assets/images/kemalangan-aduan/psm/psm-laporanjkkp8.png';

<ExpandableImage
        src={imgMuatTurunJKKP8}
        alt="Halaman Pelaporan Sepanjang Masa - Muat Turun Pelaporan"
        caption="Halaman Pelaporan Sepanjang Masa - Muat Turun Pelaporan"
        width={650}
      />

<ol>
    <li>Klik butang <b>Muat Turun Pelaporan</b> untuk memuat turun Pelaporan JKKP8.</li>
</ol>

<ExpandableImage
        src={imgLaporanJKKP8}
        alt="Halaman Pelaporan JKKP8"
        caption="Halaman Pelaporan JKKP8"      
        width={650}
      />

<ol>
    <li>Pelaporan yang dimuat turun akan dipaparkan seperti di atas.</li>
</ol>
</div>

<div className="step-card">

### Muat Turun Slip Perakuan

import imgMuatTurunSlip from '@site/assets/images/kemalangan-aduan/psm/psm-muatturunslip.png';
import imgSlipPerakuan from '@site/assets/images/kemalangan-aduan/psm/psm-slipperakuan.png';

<ExpandableImage
        src={imgMuatTurunSlip}
        alt="Halaman Pelaporan Sepanjang Masa - Muat Turun Slip Perakuan"
        caption="Halaman Pelaporan Sepanjang Masa - Muat Turun Slip Perakuan"
        width={650}
      />

<ol>
    <li>Klik butang <b>Muat Turun Slip Perakuan</b> untuk memuat turun Slip Perakuan JKKP8 Tahunan.</li>
</ol>

<ExpandableImage
        src={imgSlipPerakuan}
        alt="Halaman Slip Perakuan JKKP8"
        caption="Halaman Slip Perakuan JKKP8"      
        width={650}
      />

<ol>
    <li>Slip perakuan yang dimuat turun akan dipaparkan seperti di atas.</li>
</ol>
</div>

<div className="step-card">

### Hantar Semula Perakuan JKKP8

import imgHantarSemulaPerakuan from '@site/assets/images/kemalangan-aduan/psm/psm-hantarsemula.png';

<ExpandableImage
        src={imgHantarSemulaPerakuan}
        alt="Halaman Pelaporan Sepanjang Masa - Hantar Semula Perakuan JKKP8"
        caption="Halaman Pelaporan Sepanjang Masa - Hantar Semula Perakuan JKKP8"
        width={650}
      />

<ol>
    <li>Klik butang <b>Hantar Semula Perakuan JKKP8 </b>untuk membuat penghantaran semula Perakuan JKKP8 Tahunan.</li>
</ol>

<Admonition type="info"> 
<b>Hantar Semula Perakuan JKKP8</b>
    <ul>
        <li>Pemohon <b>perlu menghantar semula Perakuan JKKP8</b> jika terdapat <b>pengemaskinian maklumat pada borang JKKP8 atau JKKP9</b>.</li>
        <li><b>Tarikh Perakuan Akhir Dihantar</b> akan dikemaskini berdasarkan penghantaran terkini Perakuan JKKP8 oleh pemohon.</li>
    </ul>
<b>Tempoh Penghantaran Perakuan JKKP8</b>
    <ul>
        <li>Pemohon boleh mengemaskini maklumat JKKP9, borang pemberitahuan JKKP8 dan juga profil tahun selagi tempoh penghantaran Perakuan JKKP8 masih belum tamat.</li>
        <li>Pemohon boleh membuat penghantaran semula Perakuan JKKP8 sebelum tamat tempoh penghantaran Perakuan JKKP8. </li>
    </ul>
</Admonition>
</div>