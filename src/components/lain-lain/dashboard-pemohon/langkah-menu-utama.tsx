import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahMenuUtamaProps {
  stepNumber: number;
  dashboardImgSrc?: string;
  tukarMenuImgSrc?: string;
  tempatKerjaImgSrc?: string;
  orangKompetenImgSrc?: string;
}

export default function LangkahMenuUtama({
  stepNumber,
  dashboardImgSrc,
  tukarMenuImgSrc,
  tempatKerjaImgSrc,
  orangKompetenImgSrc,
}: LangkahMenuUtamaProps) {
  const [activeTab, setActiveTab] = useState<'tempatKerja' | 'orangKompeten'>('tempatKerja');

  return (
    <div>
      <h3>{stepNumber}. Laman Menu Utama</h3>

      <ol>
        <li>Skrin <b>Dashboard Pemohon</b> akan dipaparkan.</li>
        <ExpandableImage
          src={dashboardImgSrc}
          alt="Dashboard Pemohon"
          caption="Dashboard Pemohon"
          width={650}
        />
        <li>Klik <b>Menu Utama</b> untuk memilih menu perkhidmatan atas talian.</li>
        <li>
          Perkhidmatan Atas Talian terbahagi kepada dua menu:
          <ul>
            <li><b>Tempat Kerja/Kilang</b></li>
            <li><b>Orang Yang Kompeten</b></li>
          </ul>
        </li>
        <li>Butang <b>Tukar Menu</b> akan dipaparkan.</li>
      </ol>



      <ExpandableImage
        src={tukarMenuImgSrc}
        alt="Butang Tukar Menu"
        caption="Butang Tukar Menu"
        width={350}
      />

      <div className="inner-tabs">
        <button
          type="button"
          className={activeTab === 'tempatKerja' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('tempatKerja')}
        >
          Menu Tempat Kerja/Kilang
        </button>

        <button
          type="button"
          className={activeTab === 'orangKompeten' ? 'inner-tab active' : 'inner-tab'}
          onClick={() => setActiveTab('orangKompeten')}
        >
          Menu Orang Kompeten
        </button>
      </div>

      {activeTab === 'tempatKerja' && (
        <div>
          <ExpandableImage
            src={tempatKerjaImgSrc}
            alt="Menu Tempat Kerja/Kilang"
            caption="Menu Tempat Kerja/Kilang"
            width={650}
          />

          <ol>
            <li>Klik butang <b>Tukar Menu</b>.</li>
            <li>Pilih <b>Tempat Kerja/Kilang</b>.</li>
            <li>Menu <b>Tempat Kerja/Kilang</b> akan dipaparkan.</li>
          </ol>
        </div>
      )}

      {activeTab === 'orangKompeten' && (
        <div>
          <ExpandableImage
            src={orangKompetenImgSrc}
            alt="Menu Orang Yang Kompeten"
            caption="Menu Orang Yang Kompeten"
            width={650}
          />

          <ol>
            <li>Klik butang <b>Tukar Menu</b>.</li>
            <li>Pilih <b>Orang Yang Kompeten</b>.</li>
            <li>Menu <b>Orang Yang Kompeten</b> akan dipaparkan.</li>
          </ol>
        </div>
      )}

      <Admonition type="info">
        Pengguna boleh menukar paparan menu mengikut jenis perkhidmatan yang ingin digunakan.
      </Admonition>
      </div>
  );
}