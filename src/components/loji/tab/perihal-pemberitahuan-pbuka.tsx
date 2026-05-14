import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabPerihalPemberitahuanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function TabPerihalPemberitahuan({
  alphabetNumbering,
  tabNumber,
  tabName,
  tabImgSrc,
}: TabPerihalPemberitahuanProps) {
  return (
    <div>
      <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>

      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650}
      />

      <ol>
        <li>Halaman Tab {tabNumber}: <b>{tabName}</b> akan dipaparkan.</li>
        <li>Isi maklumat pada medan Ulasan/Perihal Pembukaan yang disediakan.</li>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}