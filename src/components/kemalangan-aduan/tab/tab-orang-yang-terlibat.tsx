import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabOrangYangTerlibatProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    organisasiImgSrc?: string;
    popupImgSrc?: string;

}

export default function TabOrangYangTerlibat({
    tabNumber,
    tabName,
    tabImgSrc,
    organisasiImgSrc,
    popupImgSrc,

}: TabOrangYangTerlibatProps) {
    return (
        <div>
            <h4>C. Tab {tabNumber}: {tabName}</h4>

            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={650}
            />

            <ol>
                <li>
                    Pada bahagian <b>Orang Yang Terlibat (Mangsa)</b>, isi maklumat mangsa pada ruangan yang disediakan.
                </li>
                <li>
                    Lengkapkan maklumat seperti <b>Nama</b>, <b>No. KP/Passport</b>, <b>Tarikh Lahir</b>, <b>Warganegara</b>, <b>Jantina</b>, <b>Jenis Pekerjaan</b>, <b>Sub Jenis Pekerjaan</b>, <b>Tarikh Mula Bekerja</b> dan <b>Status Pekerjaan</b>.
                </li>
            </ol>

            <ExpandableImage
                src={organisasiImgSrc}
                alt="Organisasi Yang Terlibat"
                caption="Organisasi Yang Terlibat"
                width={650}
            />

            <ol start={3}>
                <li>
                    Pada bahagian <b>Organisasi Yang Terlibat (Mangsa)</b>, tandakan <i>checkbox</i> sekiranya alamat organisasi yang terlibat adalah sama seperti alamat organisasi pemberitahu.
                </li>
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
                    Klik butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}