import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabPerakuanProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  maklumanImgSrc?: string;
}

export default function TabPerakuan({
  tabNumber,
  tabName,
  tabImgSrc,
  maklumanImgSrc,
}: TabPerakuanProps) {
  return (
    <div>
      <h4>E. Tab {tabNumber}: {tabName}</h4>

      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650} />
      <ol>
        <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
        <li>Isi maklumat pada medan ruangan yang berkaitan.</li>
        <li>Klik butang <b>Hantar</b>.</li>
        <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/SAD/XX/XXXXX”</b> akan terpapar.</li>
        <ExpandableImage
          src={maklumanImgSrc}
          alt="Makluman Aduan Berjaya Dihantar"
          caption="Makluman Aduan Berjaya Dihantar"
          width={650}
        />
      </ol>


    </div>
  );
}