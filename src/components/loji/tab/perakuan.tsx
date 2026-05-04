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
    noRujukan: string;
    hasPayment?: boolean;
}

export default function Perakuan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    mesejBerjayaImgSrc,
    noRujukan,
    hasPayment,
}: PerakuanProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
            <ol>
                <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
                <li>Isi maklumat pada medan ruangan yang berkaitan.</li>
                <li>Klik butang <b>Hantar</b>.</li>
                <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah {noRujukan}”</b> akan terpapar.</li>
            </ol>
            {hasPayment && (
                <Admonition type="important">
                    <p>Pemohon perlu membuat <b>bayaran pemulaan dalam masa 7 hari dari tarikh penghantaran permohonan</b>. Jika pembayaran tidak dijelaskan dalam tempoh tersebut, permohonan akan digugurkan secara automatik oleh sistem.</p>
                    <br/>
                    <p>Untuk membuat pembayaran, sila rujuk 👉 <b><Link to="pembayaran">Cara Pembayaran Fi</Link></b>.</p>

                    <ExpandableImage
                        src={mesejBerjayaImgSrc} 
                        alt={tabName}
                        caption={'Pop-up Mesej Berjaya'}
                        width={450} />
                </Admonition>
            )}
        </div>
    );
}