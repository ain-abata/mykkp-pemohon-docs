import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
  return (
    <div>
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

      <div>
        <Tabs>
          <TabItem value="tempatKerja" label="Tempat Kerja" default>
          <h4>Menu Tempat Kerja</h4>
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

        </TabItem>

        <TabItem value="oyk" label="Orang Yang Kompeten" default>
        <h4>Menu Orang Yang Kompeten</h4>
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

        </TabItem>
        </Tabs >
      </div >

    <Admonition type="info">
      Pengguna boleh menukar paparan menu mengikut jenis perkhidmatan yang ingin digunakan.
    </Admonition>
    </div >
  );
}