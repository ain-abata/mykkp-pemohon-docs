import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TempatLojiDipindahkanProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
}

export default function TempatLojiDipindahkan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: TempatLojiDipindahkanProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
            
            <ol>
                <li>Isi <b>No. Pendaftaran Penghuni</b> pada medan yang disediakan.dan klik butang <b>Carian No. Pendaftaran Penghuni</b>.</li>
                <li>Maklumat penghuni yang dicari akan terpapar pada medan</li>
                <li>Semak semua maklumat yang berkaitan.</li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}