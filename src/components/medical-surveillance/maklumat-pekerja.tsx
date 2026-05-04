import React from 'react';
import ExpandableImage from '../common/ExpandableImage';

interface MaklumatPekerjaProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function MaklumatPekerja({
  alphabetNumbering,
  tabNumber,
  tabName,
  tabImgSrc,
}: MaklumatPekerjaProps) {
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
        <li>Isi <b>Maklumat Laporan CHRA</b> pada medan yang disediakan.</li>
        <li>Isi maklumat <b>Keputusan Pemeriksaan Pekerja</b> pada medan yang disediakan.</li>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}