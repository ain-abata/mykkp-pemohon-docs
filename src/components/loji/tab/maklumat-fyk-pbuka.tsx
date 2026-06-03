import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface TabMaklumatFykProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    popupImgSrc?: string;
}

export default function TabMaklumatFyk({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    popupImgSrc,
}: TabMaklumatFykProps) {
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
                <li>Halaman Tab {tabNumber}: <b>{tabName}</b> akan dipaparkan.</li>
                <li>Klik butang <b>Carian</b>.</li>
                <li><i>Pop-up</i> Carian FYK akan terpapar.</li>

                <ExpandableImage
                    src={popupImgSrc}
                    alt="Pop-up Carian FYK"
                    caption={
                        <>
                            <i>Pop-up</i> Carian FYK
                        </>
                    }
                    width={650}
                />

                <li>Isi maklumat pada medan disediakan.</li>
                <li>Klik butang <b>Pilih</b> pada FYK yang diinginkan.</li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}