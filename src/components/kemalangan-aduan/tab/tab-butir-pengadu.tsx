import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabButirPengaduProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function TabButirPengadu({
  tabNumber,
  tabName,
  tabImgSrc,
}: TabButirPengaduProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: {tabName}</h4>
      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650}
      />
      <ol>
        <li>Paparan <b>Butir Pengadu</b> akan dipaparkan.</li>
        <li>Pilih jenis <b>Kategori Pengadu</b>.</li>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}