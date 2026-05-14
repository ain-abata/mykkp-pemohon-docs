import React from 'react';
import ExpandableImage from '../common/ExpandableImage';


interface PerakuanProps {
  tabNumber: number;
  tabImgSrc?: string;
  mesejBerjayaImgSrc?: string;
}

export default function Perakuan({
  tabNumber,

  tabImgSrc,
  mesejBerjayaImgSrc,
}: PerakuanProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: Perakuan</h4>
      <ol>
        <li>
          Halaman <b>Perakuan</b> akan terpapar seperti di bawah.
        </li>
        <ExpandableImage
          src={tabImgSrc}
          alt={`Tab ${tabNumber}: Perakuan`}
          caption={`Tab ${tabNumber}: Perakuan`}
          width={650}
        />
        <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
        <li>Isi maklumat pada medan <b>Jawatan</b> dan klik butang <b>Hantar</b>.</li>
        <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/XX/XXX/XXXX”</b> akan terpapar</li>
        <li>Klik butang <b>OK</b> dan paparan akan kembali kepada <b>Dashboard</b> pemohon.</li>
      </ol>
      <ExpandableImage
        src={mesejBerjayaImgSrc}
        alt="Perakuan"
        caption={'Pop-up Mesej Berjaya'}
        width={450} />

    </div>
  );
}