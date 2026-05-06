import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabSemakanPemberitahuanProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
}

export default function TabSemakanPemberitahuan({
    tabNumber,
    tabName,
    tabImgSrc,
}: TabSemakanPemberitahuanProps) {
    return (
        <div>
            <h4>A. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={650}
            />
            <ol>
                <li>Paparan <b>Semakan Pemberitahuan Terdahulu</b> akan dipaparkan.</li>
                <li>Isi maklumat <b>No. Kad Pengenalan</b> dan pilih tarikh kejadian.</li>
                <li>Klik butang <b>Semakan</b> untuk melakukan semakan.</li>
                <Admonition type="info">
                    Pemberitahu boleh meneruskan pemberitahuan jika tiada semakan diperlukan.
                </Admonition>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}