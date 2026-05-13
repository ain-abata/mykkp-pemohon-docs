import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahProfilTempatKerjaProps {
  stepNumber: number;
  menuProfilTempatKerjaImgSrc?: string;
  pengaktifanImgSrc?: string;
  carianImgSrc?: string;
  kemaskiniImgSrc?: string;
  senaraiJenteraImgSrc?: string;
  penilaianImgSrc?: string;
}

export default function LangkahProfilTempatKerja({
  stepNumber,
  menuProfilTempatKerjaImgSrc,
  pengaktifanImgSrc,
  carianImgSrc,
  kemaskiniImgSrc,
  senaraiJenteraImgSrc,
  penilaianImgSrc,
}: LangkahProfilTempatKerjaProps) {
  const [activeTab, setActiveTab] = useState<
    'pengaktifan' | 'carian' | 'kemaskini' | 'senaraiJentera' | 'penilaian'
  >('pengaktifan');

  return (
    <div>
      <h3>{stepNumber}. Laman Profil Tempat Kerja</h3>

      <ol>
        <li>Klik menu <b>Profil Tempat Kerja</b>.</li>
        <li>Skrin menu <b>Profil Tempat Kerja</b> akan dipaparkan seperti di bawah.</li>
      </ol>

      <ExpandableImage
        src={menuProfilTempatKerjaImgSrc}
        alt="Menu Profil Tempat Kerja"
        caption="Menu Profil Tempat Kerja"
        width={450}
      />

      <div className="inner-tabs">
        <button type="button" className={activeTab === 'pengaktifan' ? 'inner-tab active' : 'inner-tab'} onClick={() => setActiveTab('pengaktifan')}>
          Pengaktifan Tempat Kerja
        </button>

        <button type="button" className={activeTab === 'carian' ? 'inner-tab active' : 'inner-tab'} onClick={() => setActiveTab('carian')}>
          Carian Tempat Kerja
        </button>

        <button type="button" className={activeTab === 'kemaskini' ? 'inner-tab active' : 'inner-tab'} onClick={() => setActiveTab('kemaskini')}>
          Kemaskini Tempat Kerja
        </button>

        <button type="button" className={activeTab === 'senaraiJentera' ? 'inner-tab active' : 'inner-tab'} onClick={() => setActiveTab('senaraiJentera')}>
          Senarai Jentera/CF
        </button>

        <button type="button" className={activeTab === 'penilaian' ? 'inner-tab active' : 'inner-tab'} onClick={() => setActiveTab('penilaian')}>
          Penilaian Tempat Kerja
        </button>
      </div>

      {activeTab === 'pengaktifan' && (
        <div>
          <ExpandableImage
            src={pengaktifanImgSrc}
            alt="Pengaktifan Tempat Kerja"
            caption="Pengaktifan Tempat Kerja"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Pengaktifan Tempat Kerja</b>.</li>
            <li>Halaman pengaktifan tempat kerja akan dipaparkan.</li>
            <li>Halaman ini memaparkan <b>Senarai Tempat Kerja Semasa</b>, <b>Daftar Tempat Kerja</b> dan <b>Senarai Permohonan Aktifkan Tempat Kerja</b>.</li>
            <li>Klik butang <b>Papar Doket</b> untuk melihat doket tempat kerja.</li>
            <li>Klik butang <b>Aktif</b> untuk mengaktifkan tempat kerja.</li>
            <li>Klik butang <b>Hapus</b> untuk menghapuskan no. daftar tempat kerja daripada senarai pengaktifan.</li>
            <li>Masukkan no. daftar tempat kerja pada medan carian dan klik butang <b>Carian</b>.</li>
          </ol>
        </div>
      )}

      {activeTab === 'carian' && (
        <div>
          <ExpandableImage
            src={carianImgSrc}
            alt="Carian Tempat Kerja"
            caption="Carian Tempat Kerja"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Carian Tempat Kerja</b>.</li>
            <li>Skrin <b>Carian Tempat Kerja</b> akan dipaparkan.</li>
            <li>Klik <b>Kategori Carian</b> dan pilih kategori seperti <b>No. Daftar</b>, <b>Nama Organisasi</b>, <b>Alamat</b>, <b>Poskod</b> atau <b>Tarikh Luput Kilang</b>.</li>
            <li>Masukkan maklumat pada medan carian.</li>
            <li>Klik butang <b>Carian</b>.</li>
          </ol>
        </div>
      )}

      {activeTab === 'kemaskini' && (
        <div>
          <ExpandableImage
            src={kemaskiniImgSrc}
            alt="Kemaskini Tempat Kerja"
            caption="Kemaskini Tempat Kerja"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Kemaskini Tempat Kerja</b>.</li>
            <li>Skrin <b>Kemaskini Tempat Kerja</b> akan dipaparkan.</li>
            <li>Klik butang <b>Kemaskini</b> untuk mengemaskini maklumat perhubungan.</li>
            <li>Klik butang <b>Simpan</b>.</li>
            <li>Klik butang <b>Kemaskini Maklumat OYK</b> untuk mengemaskini maklumat OYK.</li>
            <li>Pilih <b>Kategori Carian</b> dan masukkan nama OYK pada medan carian.</li>
            <li>Klik butang <b>Carian</b> dan pilih maklumat yang berkaitan.</li>
          </ol>
        </div>
      )}

      {activeTab === 'senaraiJentera' && (
        <div>
          <ExpandableImage
            src={senaraiJenteraImgSrc}
            alt="Senarai Jentera CF"
            caption="Senarai Jentera/CF"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Senarai Jentera/CF</b>.</li>
            <li>Skrin <b>Senarai Jentera/CF</b> akan dipaparkan.</li>
            <li>Pilih jenis organisasi sama ada <b>Pemunya</b> atau <b>Tempat Kerja</b>.</li>
            <li>Pilih kategori carian seperti <b>No. Jentera</b>, <b>Jenis Jentera</b>, <b>Perihal</b>, <b>Tarikh Pemeriksaan</b> atau <b>Tarikh Luput CF</b>.</li>
            <li>Masukkan maklumat pada medan carian dan klik butang <b>Carian</b>.</li>
            <li>Klik butang <b>Papar CF</b> untuk melihat CF jentera.</li>
            <li>Klik butang <b>Papar Doket</b> untuk melihat doket jentera.</li>
          </ol>
        </div>
      )}

      {activeTab === 'penilaian' && (
        <div>
          <ExpandableImage
            src={penilaianImgSrc}
            alt="Penilaian Tempat Kerja"
            caption="Penilaian Tempat Kerja"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Penilaian Tempat Kerja</b>.</li>
            <li>Skrin <b>Penilaian Tempat Kerja</b> akan dipaparkan.</li>
            <li>Klik butang <b>Aktiviti Penilaian Tempat Kerja</b> untuk membuat OSHWA.</li>
            <li>Halaman akan dipaparkan pada tab baru.</li>
            <li>Isi maklumat yang dikehendaki dan klik butang <b>Simpan</b>.</li>
            <li>Klik butang <b>Hantar</b>.</li>
          </ol>
        </div>
      )}

      <Admonition type="info">
        Menu <b>Profil Tempat Kerja</b> digunakan untuk mengurus maklumat tempat kerja, carian tempat kerja, jentera/CF dan penilaian tempat kerja.
      </Admonition>
    </div>
  );
}