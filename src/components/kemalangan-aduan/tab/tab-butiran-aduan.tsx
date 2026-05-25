import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabButiranAduanProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  butiranImgSrc?: string;
}

export default function TabButiranAduan({
  tabNumber,
  tabName,
  tabImgSrc,
  butiranImgSrc,
}: TabButiranAduanProps) {
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
        <li>Paparan <b>Butiran Aduan</b> akan dipaparkan.</li>
        <li>
          Klik <i>checkbox</i> jika <b>Alamat Kejadian</b> sama seperti <b>Alamat Premis Yang Diadu</b>.
        </li>
        <li>Isi <b>Tempat Kejadian</b> atau masukkan butiran aduan yang diperlukan.</li>
        <li>Klik butang <b>Pilih</b> pada senarai <b>Kategori Pilihan Aduan</b>.</li>
        <ExpandableImage
          src={butiranImgSrc}
          alt="Huraian dan butiran aduan"
          caption="Huraian dan butiran aduan"
          width={650}
        />
        <li>Masukkan huraian dan butir butir aduan.</li>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}