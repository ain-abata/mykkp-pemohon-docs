import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabTempatKejadianProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    popupImgSrc?: string;

}

export default function TabTempatKejadian({
    tabNumber,
    tabName,
    tabImgSrc,
    popupImgSrc,

}: TabTempatKejadianProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: {tabName}</h4>

            <ol>
                <li>
                    Pada bahagian <b>Organisasi Yang Terlibat (Mangsa)</b>, tandakan <i>checkbox</i> sekiranya alamat organisasi yang terlibat adalah sama seperti alamat organisasi pemberitahu.
                </li>
                <ExpandableImage
                src={tabImgSrc}
                alt="Organisasi Yang Terlibat"
                caption="Organisasi Yang Terlibat"
                width={650}
            />
                <li>
                    Jika <i>checkbox</i> ditandakan, maklumat organisasi akan dipaparkan secara automatik berdasarkan maklumat premis sebelumnya.
                </li>
                <li>
                    Jika maklumat organisasi tidak sama, klik butang <b>Carian</b>.
                </li>

                <li><i>Pop-up</i> carian premis akan dipaparkan.</li>
                <li>Pilih premis yang dikehendaki dan klik butang <b>Pilih</b>.</li>
                <ExpandableImage
                    src={popupImgSrc}
                    alt="Pop-up Carian Premis"
                    caption={
                        <>
                            <i>Pop-up</i> Carian Premis
                        </>
                    }
                    width={650}
                />
                <li>
                    Isi maklumat pada bahagian yang disediakan.
                </li>
                <li>
                    Klik butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}