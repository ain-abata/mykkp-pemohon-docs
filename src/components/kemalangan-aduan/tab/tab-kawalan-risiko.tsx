import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabKawalanRisikoProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function TabKawalanRisiko({
  tabNumber,
  tabName,
  tabImgSrc,
}: TabKawalanRisikoProps) {
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
          Pada bahagian <b>Kawalan Risiko</b>, lengkapkan maklumat yang diperlukan pada ruangan yang disediakan.
        </li>
        <li>
          Pilih sama ada <b>Ya</b> atau <b>Tidak</b> bagi soalan <b>Adakah Penaksiran Risiko Ke Atas Kesihatan Pekerjaan Dijalankan?</b>.
        </li>
        <li>
          Isi <b>Ulasan Keputusan Taksiran</b> sekiranya berkaitan.
        </li>
        <li>
          Pilih sama ada <b>Ya</b> atau <b>Tidak</b> bagi soalan <b>Adakah Program Pengawasan Kesihatan Dijalankan Ke Atas Pekerja?</b>.
        </li>
        <li>
          Isi maklumat <b>Tindakan Pencegahan Yang Telah Diambil Oleh Majikan</b>.
        </li>
        <li>
          Klik butang <b>Seterusnya</b>.
        </li>
      </ol>
    </div>
  );
}