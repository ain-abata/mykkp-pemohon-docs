import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

interface PerakuanProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    mesejBerjayaImgSrc?: string;
}

export default function Perakuan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    mesejBerjayaImgSrc,
}: PerakuanProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
            <Admonition type="info">
                Sila pastikan semua maklumat yang dipaparkan pada tab ini adalah tepat sebelum klik butang <b>Seterusnya</b>.
            </Admonition>
            <ol>
                <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
                <li>Isi maklumat pada medan ruangan yang berkaitan.</li>
                <li>Klik butang <b>Hantar</b>.</li>
                <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/PEKALA/XX/XXXXX”</b> akan terpapar.</li>
            </ol>
            <Admonition type="important">
                <p>Pemohon perlu membuat <b>bayaran pemulaan dalam masa 7 hari dari tarikh penghantaran permohonan</b>. Jika pembayaran tidak dijelaskan dalam tempoh tersebut, permohonan akan digugurkan secara automatik oleh sistem.</p>
                <br/>
                <p>Untuk membuat pembayaran, sila rujuk 👉 <b><Link to="pembayaran-fi-loji">Cara Pembayaran Fi</Link></b>.</p>
                
                <ExpandableImage
                    src={mesejBerjayaImgSrc} 
                    alt={tabName}
                    caption={'Pop-up Mesej Berjaya'}
                    width={450} />
            </Admonition>
        </div>
    );
}