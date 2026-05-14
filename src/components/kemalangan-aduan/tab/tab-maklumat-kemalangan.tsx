import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabMaklumatKemalanganProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
}

export default function TabMaklumatKemalangan({
    tabNumber,
    tabName,
    tabImgSrc,
}: TabMaklumatKemalanganProps) {
    return (
        <div>
            <h4>D. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={650}
            />
            <ol>
                <li>Isi maklumat pada ruangan yang disediakan.</li>
                <li>Klik <i>checkbox</i> sekiranya alamat organisasi yang terlibat adalah sama seperti alamat organisasi pemberitahu.</li>
                <li>Isi Huraian Kemalangan atau Kejadian Berbahaya</li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}