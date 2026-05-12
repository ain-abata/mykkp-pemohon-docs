import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabPendedahanTKProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function TabPendedahanTK({
  tabNumber,
  tabName,
  tabImgSrc,
}: TabPendedahanTKProps) {
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
        <li>
          Pada bahagian <b>Pendedahan Tempat Kerja</b>, lengkapkan maklumat yang diperlukan pada ruangan yang disediakan.
        </li>
        <li>
          Pilih sama ada <b>Ya</b> atau <b>Tidak</b> bagi soalan-soalan yang diberikan.
        </li>
        <li>
          Isi maklumat yang berkaitan sekiranya berkaitan.
        </li>
        <li>
          Klik butang <b>Seterusnya</b>.
        </li>
      </ol>
    </div>
  );
}