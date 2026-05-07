import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahProfilSayaProps {
  stepNumber: number;
  menuProfilImgSrc?: string;
  maklumatAmImgSrc?: string;
  maklumatOykImgSrc?: string;
  jadualCepImgSrc?: string;
  maklumatEmelImgSrc?: string;
  tukarKataLaluanImgSrc?: string;
}

export default function LangkahProfilSaya({
  stepNumber,
  menuProfilImgSrc,
  maklumatAmImgSrc,
  maklumatOykImgSrc,
  jadualCepImgSrc,
  maklumatEmelImgSrc,
  tukarKataLaluanImgSrc,
}: LangkahProfilSayaProps) {
  const [activeTab, setActiveTab] = useState<
    'maklumatAm' | 'maklumatOyk' | 'jadualCep' | 'maklumatEmel' | 'tukarKataLaluan'
  >('maklumatAm');

  return (
    <div>
      <h3>{stepNumber}. Laman Profil Saya</h3>

      <ol>
        <li>Klik menu <b>Profil Saya</b>.</li>
        <li>Skrin menu <b>Profil Saya</b> akan dipaparkan seperti di bawah.</li>
      </ol>

      <ExpandableImage
        src={menuProfilImgSrc}
        alt="Menu Profil Saya"
        caption="Menu Profil Saya"
        width={450}
      />

      <div className="inner-tabs">
        <button
          type="button"
          className={activeTab === 'maklumatAm' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('maklumatAm')}
        >
          Maklumat Am
        </button>

        <button
          type="button"
          className={activeTab === 'maklumatOyk' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('maklumatOyk')}
        >
          Maklumat OYK
        </button>

        <button
          type="button"
          className={activeTab === 'jadualCep' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('jadualCep')}
        >
          Jadual CEP
        </button>

        <button
          type="button"
          className={activeTab === 'maklumatEmel' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('maklumatEmel')}
        >
          Maklumat Emel
        </button>

        <button
          type="button"
          className={activeTab === 'tukarKataLaluan' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('tukarKataLaluan')}
        >
          Tukar Kata Laluan
        </button>
      </div>

      {activeTab === 'maklumatAm' && (
        <div>
          <ExpandableImage
            src={maklumatAmImgSrc}
            alt="Maklumat Am"
            caption="Maklumat Am"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Maklumat Am</b>.</li>
            <li>Skrin <b>Maklumat Am</b> akan dipaparkan.</li>
            <li>Klik butang <b>Kemaskini</b> jika ingin mengemaskini maklumat.</li>
            <li>Klik butang <b>Simpan</b> setelah selesai mengemaskini maklumat.</li>
          </ol>
        </div>
      )}

      {activeTab === 'maklumatOyk' && (
        <div>
          <ExpandableImage
            src={maklumatOykImgSrc}
            alt="Maklumat OYK"
            caption="Maklumat OYK"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Maklumat OYK</b>.</li>
            <li>Skrin <b>Maklumat OYK</b> akan dipaparkan.</li>
            <li>Klik butang <b>Lihat Sijil</b> untuk melihat sijil OYK.</li>
            <li>Klik butang <b>Baru</b> untuk membuat pembaharuan OYK.</li>
            <li>Klik butang <b>Kemaskini Maklumat OYK</b> untuk mengemaskini maklumat majikan.</li>
          </ol>
        </div>
      )}

      {activeTab === 'jadualCep' && (
        <div>
          <ExpandableImage
            src={jadualCepImgSrc}
            alt="Jadual CEP"
            caption="Jadual CEP"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Jadual CEP</b>.</li>
            <li>Skrin <b>Jadual CEP</b> akan dipaparkan.</li>
            <li>Klik medan <b>Sila Pilih Jenis OYK</b> untuk memilih jenis Orang Yang Kompeten.</li>
            <li>Klik butang <b>Tambah Baru</b> untuk memuat naik dokumen CEP.</li>
          </ol>
        </div>
      )}

      {activeTab === 'maklumatEmel' && (
        <div>
          <ExpandableImage
            src={maklumatEmelImgSrc}
            alt="Maklumat Emel"
            caption="Maklumat Emel"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Maklumat Emel</b>.</li>
            <li>Skrin <b>Maklumat Emel</b> akan dipaparkan.</li>
            <li>Masukkan emel baru untuk mengemaskini emel.</li>
            <li>Klik butang <b>Hantar</b>.</li>
            <li>Kod verifikasi akan dihantar ke emel baru.</li>
          </ol>
        </div>
      )}

      {activeTab === 'tukarKataLaluan' && (
        <div>
          <ExpandableImage
            src={tukarKataLaluanImgSrc}
            alt="Tukar Kata Laluan"
            caption="Tukar Kata Laluan"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Tukar Kata Laluan</b>.</li>
            <li>Skrin <b>Tukar Kata Laluan</b> akan dipaparkan.</li>
            <li>Masukkan kata laluan lama dan kata laluan baru.</li>
            <li>Klik butang <b>Hantar</b>.</li>
          </ol>
        </div>
      )}

      <Admonition type="info">
        Menu <b>Profil Saya</b> digunakan untuk menyemak dan mengemaskini maklumat pengguna, maklumat OYK, jadual CEP, emel dan kata laluan.
      </Admonition>
    </div>
  );
}