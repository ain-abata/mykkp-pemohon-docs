import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';

interface TabAktivitiIndustriProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function TabAktivitiIndustri({
  tabNumber,
  tabName,
  tabImgSrc,
}: TabAktivitiIndustriProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: {tabName}</h4>

      <ol>
        <li>Halaman <b>Tab {tabNumber}: {tabName}</b> akan dipaparkan seperti di bawah.</li>
        <li>Sila pastikan medan ruangan wajib telah diisi.</li>
      </ol>

      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650}
      />

      <ol start={3}>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}