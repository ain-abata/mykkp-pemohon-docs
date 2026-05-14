import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabPerakuanProps {
  tabNumber: number;
  tabName: string;
  moduleName:string;
  tabImgSrc?: string;
  maklumanImgSrc?: string;
}

export default function TabPerakuan({
  tabNumber,
  tabName,
  moduleName,
  tabImgSrc,
  maklumanImgSrc,
}: TabPerakuanProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: {tabName}</h4>

      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650} />
      <ol>
        <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
        <li>Isi maklumat pada medan ruangan yang berkaitan.</li>
        <li>Klik butang <b>Hantar</b>.</li>
        <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/BOHSM/XX/XXXXX”</b> akan terpapar.</li>
        <ExpandableImage
          src={maklumanImgSrc}
          alt="Makluman Aduan Berjaya Dihantar"
          caption="Makluman Aduan Berjaya Dihantar"
          width={450}
        />
      <li>Salin pautan link untuk <b>Bahagian B Basic Operational Health Services</b> .</li>

      </ol>


    </div>
  );
}