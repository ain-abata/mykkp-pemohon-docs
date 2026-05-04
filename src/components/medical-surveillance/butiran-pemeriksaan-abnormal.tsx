import React from 'react';
import ExpandableImage from '../common/ExpandableImage';

interface ButiranPemeriksaanAbnormalProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  popupImgSrc?: string;
}

export default function ButiranPemeriksaanAbnormal({
  alphabetNumbering,
  tabNumber,
  tabName,
  tabImgSrc,
  popupImgSrc,
}: ButiranPemeriksaanAbnormalProps) {
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
        <li>
          Isi <b>Butiran Pekerjaan Dengan Keputusan Pemeriksaan Abnormal</b> pada ruangan yang disediakan.
        </li>
        <li>Klik butang <b>Tambah Pekerja</b>.</li>
        <li><i>Pop-up</i> <b>Keputusan Pemeriksaan Abnormal</b> akan dipaparkan.</li>
        <li>Isi maklumat pada ruangan yang disediakan dan klik butang <b>Simpan</b>.</li>
      </ol>

      <ExpandableImage
        src={popupImgSrc}
        alt="Pop-up Keputusan Pemeriksaan Abnormal"
        caption={
          <>
            <i>Pop-up</i> Keputusan Pemeriksaan Abnormal
          </>
        }
        width={650}
      />

      <ol start={5}>
        <li>
          Maklumat pekerja yang ditambah akan terpapar pada jadual <b>Keputusan Pemeriksaan Abnormal</b>.
        </li>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}