import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface SenaraiCajProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
}

export default function SenaraiCaj({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: SenaraiCajProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
            <ol>
                <li>Klik butang <b>Belum Disahkan</b> pada kolum <b>Semakan Caj</b> untuk pengemaskinian maklumat caj.</li>
                <li>Klik butang <b>Simpan dan Sahkan Caj</b> untuk simpan kadar caj yang telah ditetapkan.</li>
                <li>Klik butang <b>OK</b> pada halaman <i>pop-up</i> mesej berjaya.</li>
            </ol>
            <Admonition type="info">
                Pada bahagian <b>Maklumat Sebut Harga Perkhidmatan</b>, sila isi nama penerima notis pembayaran ini <b>(jika perlu)</b>.
            </Admonition>
            <ol start={4} >
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
            <Admonition type="warning">
                Permohonan tidak boleh diteruskan jika terdapat butang <b>Belum Disahkan</b> yang masih berwarna oren.
            </Admonition>
        </div>
    );
}