import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '../../common/ExpandableImage';


interface OkPerakuanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  mesejBerjayaImgSrc?: string;
}

export default function OkPerakuan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    mesejBerjayaImgSrc,
}: OkPerakuanProps) {
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
            <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
            <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/XX/XXX/XXXX”</b> akan terpapar</li>
            <li>Klik butang <b>OK</b> dan paparan akan kembali kepada <b>Skrin JKKP5 - Pemberitahuan Aktiviti Industri</b> .</li>
        </ol>       
            <ExpandableImage
                src={mesejBerjayaImgSrc} 
                alt={tabName}
                caption={'Pop-up Mesej Berjaya'}
                width={450} />
                
    </div>
  );
}