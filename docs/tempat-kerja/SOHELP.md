---
title: SOHELP
description: Panduan lengkap permohonan, deklarasi dan verifikasi SOHELP
hide_table_of_contents: false
sidebar_label: 'SOHELP'
---

import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import iconMuatNaik from '@site/assets/images/orang-kompeten/ikon_muat_naik.png';

import lamanPemohonImg from '@site/assets/images/tempat-kerja/sohelp/laman-pemohon.png';
import halamanSohelpImg from '@site/assets/images/tempat-kerja/sohelp/halaman-sohelp.png';
import maklumatTempatKerjaImg from '@site/assets/images/tempat-kerja/sohelp/maklumat-tempat-kerja.png';
import picSohelpImg from '@site/assets/images/tempat-kerja/sohelp/pic-sohelp.png';
import tabPenyertaanSohelpImg from '@site/assets/images/tempat-kerja/sohelp/tab-penyertaan-sohelp.png';
import arasPencapaianTerdahuluImg from '@site/assets/images/tempat-kerja/sohelp/aras-pencapaian-terdahulu.png';
import kategoriDenganVerifierImg from '@site/assets/images/tempat-kerja/sohelp/kategori-dengan-verifier.png';
import popupCarianTempatKerjaImg from '@site/assets/images/tempat-kerja/sohelp/popup-carian-tempat-kerja.png';
import popupPicTempatKerjaImg from '@site/assets/images/tempat-kerja/sohelp/popup-pic-tempat-kerja.png';
import tabPerakuanImg from '@site/assets/images/tempat-kerja/sohelp/tab-perakuan.png';

import profilEsohelpImg from '@site/assets/images/tempat-kerja/sohelp/profil-esohelp.png';
import halamanDeklarasiPertamaImg from '@site/assets/images/tempat-kerja/sohelp/halaman-deklarasi-pertama.png';
import popupSimpanCheckpointImg from '@site/assets/images/tempat-kerja/sohelp/popup-simpan-checkpoint.png';
import dokumenSokonganImg from '@site/assets/images/tempat-kerja/sohelp/dokumen-sokongan.png';
import hantarDeklarasiImg from '@site/assets/images/tempat-kerja/sohelp/hantar-deklarasi.png';

## 📌 Ringkasan Modul

**SOHELP** ialah modul yang digunakan oleh pemohon untuk membuat penyertaan SOHELP, melengkapkan deklarasi SOHELP dan membolehkan verifier atau wakil industri tempat kerja membuat verifikasi.

Modul ini terbahagi kepada tiga bahagian utama iaitu:

1. **Penyertaan SOHELP**
2. **Deklarasi SOHELP**
3. **Verifikasi SOHELP**

---

## Penyertaan SOHELP

import LoginStep from '@site/src/components/login-step';

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

<div className="step-card">

### Halaman Permohonan Penyertaan SOHELP

<ol>
  <ExpandableImage
  src={lamanPemohonImg}
  alt="Halaman Menu Utama"
  caption="Halaman Menu Utama"
  width={650}
/>

  <li>
    Pada menu sebelah kiri dashboard <b>Pemohon</b>, klik <b>SOHELP</b>.
  </li>
  <li>
    Halaman <b>SOHELP</b> akan terpapar seperti di bawah.
  </li>
  <ExpandableImage
  src={halamanSohelpImg}
  alt="Halaman SOHELP"
  caption="Halaman SOHELP"
  width={650}
/>
  <li>
    Klik pada butang <b>Daftar Penyertaan</b> untuk membuat pendaftaran penyertaan SOHELP.
  </li>
</ol>
</div>

<div className="step-card">

### Pengisian Borang Penyertaan SOHELP

#### Tab 1: Maklumat Tempat Kerja

<ol>
  <li>
    <b>Tab 1: Maklumat Tempat Kerja</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={maklumatTempatKerjaImg}
  alt="Maklumat Tempat Kerja"
  caption="Maklumat Tempat Kerja"
  width={650}
/>
<li>
    Pada bahagian <b>Maklumat Individu Bertanggungjawab (PIC) SOHELP</b>, isi maklumat yang berkaitan pada ruangan yang disediakan.
</li>
<ExpandableImage
  src={picSohelpImg}
  alt="Maklumat Individu Bertanggungjawab PIC SOHELP"
  caption="Maklumat Individu Bertanggungjawab PIC SOHELP"
  width={650}
/>

  <li>
    Pada bahagian <b>Sejarah Kes Penyakit Pekerjaan</b>, pilih butang radio <b>Ya</b> atau <b>Tidak</b>.
  </li>
  <li>
    Jika klik butang radio <b>Tidak</b>, ruangan <b>Jumlah kes penyakit pekerjaan</b> tidak akan dipaparkan.
  </li>
  <li>
    Jika klik butang radio <b>Ya</b>, ruangan <b>Jumlah kes penyakit pekerjaan</b> akan dipaparkan.
  </li>
  <li>
    Isi maklumat pada ruangan yang disediakan.
  </li>
  <li>
    Klik butang <b>Seterusnya</b>.
  </li>
</ol>

---

#### Tab 2: Penyertaan SOHELP

<ol>
  <li>
    <b>Tab 2: Penyertaan SOHELP</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={tabPenyertaanSohelpImg}
  alt="Tab Penyertaan SOHELP"
  caption="Tab 2: Penyertaan SOHELP"
  width={650}
/>
  <li>
    Pada bahagian <b>Penyertaan SOHELP terdahulu</b>, pilih butang radio <b>Ya</b> atau <b>Tidak</b>.
  </li>
  <li>
    Jika pilih butang radio <b>Tidak</b>, ruangan aras pencapaian elemen SOHELP terdahulu tidak akan dipaparkan.
  </li>
  <li>
    Jika pemohon pernah menyertai SOHELP terdahulu, pilih butang radio <b>Ya</b>. Ruangan aras pencapaian elemen SOHELP terdahulu akan dipaparkan.
  </li>
  <li>
    Klik dropdown pada mana-mana bahagian aras pencapaian elemen SOHELP yang berkaitan bagi <b>Pengurusan Pendedahan Bising</b>, <b>Pengurusan Bahan Kimia</b> atau <b>Pengurusan Ergonomik</b>.
  </li>


<ExpandableImage
  src={arasPencapaianTerdahuluImg}
  alt="Aras Pencapaian Elemen SOHELP Terdahulu"
  caption="Aras Pencapaian Elemen SOHELP Terdahulu"
  width={650}
/>


  <li>
    <b>Aras pencapaian keseluruhan SOHELP terdahulu</b> akan bertukar secara automatik mengikut aras pencapaian elemen SOHELP terdahulu yang dimasukkan.
  </li>
  <li>
    Di bawah <b>Tahun Penyertaan SOHELP 2022</b>, pilih pada mana-mana checkbox <b>Elemen SOHELP</b> yang dilaksanakan.
  </li>
  <li>
    Klik dropdown <b>Kategori Penyertaan</b>. Senarai kategori penyertaan akan dipaparkan.
  </li>
  <li>
    Bagi <b>Kategori Penyertaan</b>, jika memilih <b>Kategori 3</b> atau <b>Kategori 4</b>, <b>Maklumat Verifier</b> tidak akan dipaparkan.
  </li>
  <li>
    Jika memilih <b>Kategori 1</b> atau <b>Kategori 2</b> untuk maklumat penyertaan, <b>Maklumat Verifier</b> akan dipaparkan.
  </li>
  
<ExpandableImage
  src={kategoriDenganVerifierImg}
  alt="Kategori Penyertaan Dengan Maklumat Verifier"
  caption="Kategori Penyertaan Dengan Maklumat Verifier"
  width={650}
/>
<li>
    Klik pada butang <b>Carian</b> untuk mencari <b>Nama Tempat Kerja</b>.
  </li>
  <li>
    <i>Pop-up</i> <b>Carian Tempat Kerja</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={popupCarianTempatKerjaImg}
  alt="Pop-up Carian Tempat Kerja"
  caption="Pop-up Carian Tempat Kerja"
  width={450}
/>
  <li>
    Isi <b>Nama Tempat Kerja</b> pada ruangan yang disediakan dan klik butang <b>Carian</b>.
  </li>
  <li>
    Maklumat akan dipaparkan dan klik butang <b>Pilih</b>.
  </li>

  <li>
    Isi maklumat pada bahagian <b>Individu bertanggungjawab (PIC) SOHELP</b>.
  </li>
  <li>
    Klik pada butang <b>Carian</b> untuk membuat carian dan memilih <b>Individu bertanggungjawab (PIC) SOHELP</b>.
  </li>
  <li>
    <i>Pop-up</i> <b>Orang Yang Bertanggungjawab (PIC) Tempat Kerja</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={popupPicTempatKerjaImg}
  alt="Pop-up Orang Yang Bertanggungjawab PIC Tempat Kerja"
  caption="Pop-up Orang Yang Bertanggungjawab PIC Tempat Kerja"
  width={550}
/>
  <li>
    Pilih butang radio bagi nama yang berkaitan dan klik butang <b>Pilih</b>.
  </li>
  <li>
    Isi maklumat pada ruangan yang disediakan.
  </li>
  <li>
    Klik butang <b>Seterusnya</b>.
  </li>
</ol>
---

#### Tab 3: Perakuan

<ol>
  <li>
    <b>Tab 3: Perakuan</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={tabPerakuanImg}
  alt="Tab Perakuan"
  caption="Tab 3: Perakuan"
  width={650}
/>
  <li>
    Klik pada checkbox <b>Perakuan</b>.
  </li>
  <li>
    Klik butang <b>Hantar</b>.
  </li>
  <li>
    Halaman akan kembali kepada <b>Profil SOHELP</b>. Makluman permohonan sedang dalam proses kelulusan akan dipaparkan.
  </li>
</ol>
</div>

## Deklarasi SOHELP

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

<div className="step-card">

### Halaman Permohonan Deklarasi SOHELP

<ol>
  <li>
    Skrin <b>Pemohon</b> akan terpapar seperti di bawah.
  </li>
  <ExpandableImage
  src={lamanPemohonImg}
  alt="Laman Pemohon"
  caption="Laman Pemohon"
  width={650}
 />
  <li>
    Pada menu sebelah kiri dashboard <b>Pemohon</b>, klik <b>SOHELP</b>.
  </li>
 <ExpandableImage
  src={profilEsohelpImg}
  alt="Halaman Profil ESOHELP 2022"
  caption="Halaman Profil ESOHELP 2022"
  width={650}
 />
  <li>
    Halaman <b>Profil ESOHELP 2022</b> akan dipaparkan.
  </li>
  <li>
    Pemohon boleh klik pada mana-mana tab elemen SOHELP yang dilaksanakan untuk membuat deklarasi. Setiap tab elemen wajib dilengkapkan untuk setiap tahap deklarasi.
</li>
  <li>
    Klik pada butang <b>Deklarasi Pertama</b> untuk melengkapkan proses deklarasi SOHELP.
  </li>
  <li>
    Deklarasi perlu dilengkapkan pada setiap tahap iaitu <b>Deklarasi Pertama</b>, <b>Deklarasi Kedua</b> dan <b>Deklarasi Ketiga</b>.
    </li>
  </ol>
</div>

<div className="step-card">

### Pengisian Borang Deklarasi SOHELP

#### Tab 1: Checkpoint

<ol>
  <li>
    <b>Tab 1: Checkpoint</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={halamanDeklarasiPertamaImg}
  alt="Halaman Deklarasi Pertama"
  caption="Halaman Deklarasi Pertama"
  width={650}
  />
  <li>
    Jawab pada checkpoint yang berkaitan.
  </li>
  <li>
    <b>Level Achieved</b> akan dipaparkan mengikut checkpoint yang dijawab.
</li>
  <li>
    <b>Aras Pencapaian</b> akan dipaparkan.
</li>
  <li>
    Klik butang <b>Simpan</b>.
</li>
  <li>
    Pop-up makluman akan dipaparkan. Klik butang <b>Tutup</b>.
  </li>


<ExpandableImage
  src={popupSimpanCheckpointImg}
  alt="Pop-up Simpan Checkpoint"
  caption="Pop-up Simpan Checkpoint"
  width={450}
/>
<li>
    Klik butang <b>Seterusnya</b>.
  </li>
</ol>
---

#### Tab 2: Dokumen Sokongan

<ol>
  <li>
    <b>Tab 2: Dokumen Sokongan</b> akan dipaparkan.
  </li>
  <ExpandableImage
  src={dokumenSokonganImg}
  alt="Tab Dokumen Sokongan"
  caption="Tab 2: Dokumen Sokongan"
  width={650}
/>
<li>
    Dokumen yang perlu dimuat naik ke dalam dokumen sokongan adalah berdasarkan checkpoint yang dijawab pada tab 1.
  </li>
  
  <li>Klik butang <img src={iconMuatNaik} style={{ width: 15 }} /> untuk memuat naik dokumen <b>PDF</b> yang berkenaan pada medan bersyarat <b>Wajib</b>.</li>
  <li>Isi medan <b>Diskripsi</b> dan klik butang <b><i>Choose File</i></b> untuk memilih dokumen.</li>
  <li>Klik butang <b>Simpan</b>. <i>Pop-up</i> mesej berjaya akan dipaparkan dan klik butang <b>OK</b>.</li>
  <li>Dokumen yang berjaya dimuat naik akan dipaparkan dalam <b>Jadual Senarai Dokumen</b></li>
  <li>Klik butang <b>Tutup</b>. Pada kolum <b> Bil. Fail</b> akan menunjukkan jumlah bilangan fail yang telah dimuat naik.</li>
            <Admonition type="warning">
                <ol>
                  <li>Pastikan dokumen yang dimuat naik adalah mengikut format yang ditetapkan.</li>
                  <li>Pastikan saiz dokumen tidak melebihi 20MB.</li>
                  <li>Sila pastikan nama lampiran tidak mengandungi simbol. <b>[Contoh: ! @ # $ % ^ & * ( ) - + dll...]</b></li>
                </ol>
            </Admonition>
            <Admonition type="info">
                Bagi <b>menghapuskan dokumen</b> yang telah dimuat naik 👉 Klik butang <b>Hapus Fail</b> pada <b>Jadual Senarai Dokumen</b>.
            </Admonition>

  <li>
    Fail yang telah dimuat naik akan dipaparkan dalam jadual dokumen sokongan.
  </li>
  <li>
    Klik butang <b>Tutup</b>.
</li>
  <li>
    Jika selesai memuat naik semua dokumen bersyarat wajib, klik butang <b>Hantar</b>.
  </li>
  <li>
    Pop-up berjaya dihantar akan dipaparkan.
  </li>


<ExpandableImage
  src={hantarDeklarasiImg}
  alt="Hantar Deklarasi SOHELP"
  caption="Hantar Deklarasi SOHELP"
  width={450}
/>

<Admonition type="info" title="Nota">
  Pemohon perlu menyelesaikan deklarasi untuk semua elemen.
</Admonition>
</ol>
</div>

---

## Verifikasi SOHELP

<div className="step-card">

### Akses Halaman Log Masuk 

<LoginStep 
  stepNumber={1}
  title="Akses Halaman Log Masuk MyKKP" />
</div>

<div className="step-card">

### Halaman Permohonan Penyertaan SOHELP

<ol>
  <li>
    Skrin <b>Verifier</b> akan terpapar.
  </li>
  <ExpandableImage
  src={lamanPemohonImg}
  alt="Laman Pemohon"
  caption="Laman Pemohon"
  width={650}
 />
  <li>
    Pada menu sebelah kiri dashboard <b>Pemohon</b>, klik <b>SOHELP</b>.
  </li>
  <li>
    Halaman <b>Profil SOHELP</b> akan terpapar.
  </li>
  <li>
    Pada halaman ini, verifier boleh menyemak makluman berkenaan sesi verifikasi.
  </li>
  <li>
    Klik butang <b>Verifikasi</b> untuk melakukan aktiviti verifikasi.
  </li>
  <li>
    Halaman <b>Verifikasi</b> akan terpapar.
  </li>
  <li>
    Semak semua maklumat.
  </li>
  <li>
    Klik butang <b>Maklumat Penyertaan</b> untuk melihat maklumat penyertaan.
  </li>
  </ol>
  </div>

<div className="step-card">

### Pengisian Borang Deklarasi SOHELP

#### Tab 1: Checkpoint
  <ol>
  <li>
    <b>Tab 1: Checkpoint</b> akan dipaparkan.
  </li>
  <li>
    Klik butang <b>Maklumat Deklarasi</b> untuk melihat maklumat deklarasi.
  </li>
  <li>
    Pilih sama ada <b>Agree</b> atau <b>Disagree</b> pada medan <b>Verifier Agreement</b>.
  </li>
  <li>
    Aras keseluruhan akan terpapar di bawah.
  </li>
  <li>
    Klik butang <b>Simpan</b> untuk menyimpan checkpoint.
  </li>
  <li>
    Klik butang <b>Seterusnya</b> untuk ke tab <b>Dokumen Sokongan</b>.
  </li>
</ol>

---
#### Tab 2: Dokumen Sokongan
<ol>
  <li>
    <b>Tab 2: Dokumen Sokongan</b> akan dipaparkan.
  </li>
  <li>
    Semak semua maklumat.
  </li>
  <li>
    Klik butang <b>Seterusnya</b> untuk ke <b>Tab 3</b>.
  </li>
</ol>

---
#### Tab 3: Ulasan Verifier

<ol>
  <li>
    Pada bahagian <b>Komen Penambahbaikan</b>, klik checkbox pada checkpoint yang memerlukan penambahbaikan.
  </li>
  <li>
    Isi <b>Ulasan Verifier</b>.
  </li>
  <li>
    Klik butang <b>Hantar</b> untuk menghantar permohonan.
  </li>
</ol>


<ol start={4}>
  <li>
    Pop-up makluman akan terpapar.
  </li>
  <li>
    Klik butang <b>Tutup</b>.
  </li>
</ol>



<Admonition type="info" title="Nota">
  Sila ulangi langkah yang sama bagi <b>Verifikasi Kedua</b> dan <b>Verifikasi Ketiga</b>.
</Admonition>

</div>