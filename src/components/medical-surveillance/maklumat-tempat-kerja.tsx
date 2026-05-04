import React from 'react';
import ExpandableImage from '../common/ExpandableImage';

interface MaklumatTempatKerjaProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  carianImgSrc?: string;
  tidakBerdaftarImgSrc?: string;
}

export default function MaklumatTempatKerja({
  alphabetNumbering,
  tabNumber,
  tabName,
  tabImgSrc,
  carianImgSrc,
  tidakBerdaftarImgSrc,
}: MaklumatTempatKerjaProps) {
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
        <li>Isi maklumat pada Tab {tabNumber}: <b>{tabName}</b> pada ruangan yang disediakan.</li>
        <li>
          Pada bahagian <b>Pilih Tempat Kerja</b>, klik butang radio sama ada
          <b> Tempat kerja berdaftar di MyKKP</b> atau
          <b> Tempat kerja tidak berdaftar di MyKKP</b>.
        </li>
      </ol>

      <ul>
        <li><b>Jika pilih Tempat kerja berdaftar di MyKKP:</b></li>
      </ul>

      <ol start={3}>
        <li>Klik butang <b>Carian Tempat Kerja</b>.</li>
        <li><i>Pop-up</i> <b>Carian Tempat Kerja</b> akan dipaparkan.</li>
        <li>Isi medan <b>Nama Tempat Kerja</b> dan klik butang <b>Carian</b>.</li>
        <li>Senarai keputusan carian tempat kerja akan dipaparkan.</li>
        <li>Klik butang <b>Pilih</b> pada tempat kerja yang dikehendaki.</li>
        <li>Maklumat akan terpapar pada ruangan maklumat Tab {tabNumber}.</li>
        <li>Isi maklumat lain pada medan ruangan yang berkaitan.</li>
      </ol>

      <ExpandableImage
        src={carianImgSrc}
        alt="Pop-up Carian Tempat Kerja"
        caption={
          <>
            <i>Pop-up</i> Carian Tempat Kerja
          </>
        }
        width={650}
      />

      <ul>
        <li><b>Jika pilih Tempat kerja tidak berdaftar di MyKKP:</b></li>
      </ul>

      <ol start={10}>
        <li>Isi maklumat pada ruangan yang disediakan.</li>
      </ol>

    
      <ol start={11}>
        <li><b>Unit Kerja</b> hendaklah wajib diisi.</li>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}