import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabOrangYangTerlibatProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    tambahImgSrc?: string;
    popupImgSrc?: string;

}

export default function TabOrangYangTerlibat({
    tabNumber,
    tabName,
    tabImgSrc,
    tambahImgSrc,
    popupImgSrc,

}: TabOrangYangTerlibatProps) {
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
                <li>
                    Pada bahagian <b>Maklumat Orang Yang Terlibat</b>
                </li>
                <li>
                    Lengkapkan maklumat mangsa pada ruangan yang disediakan.
                </li>
            </ol>
            <ol start={3}>
                <li>
                    Pada bahagian <b>Maklumat Pekerjaan</b>
                </li>
                <ExpandableImage
                    src={tambahImgSrc}
                    alt="Maklumat Pekerjaan"
                    caption="Maklumat Pekerjaan"
                    width={650}
                />
                <li>
                    Lengkapkan maklumat pada ruangan yang disediakan.                </li>
                <li>
                    Untuk menambah pekerjaan terdahulu, klik <b>Tambah pekerjaan</b>
                </li>

                <li><i>Pop-up</i> Maklumat Pekerjaan Terdahulu.</li>
                <li>Isi maklumat pada ruangan yang disediakan.</li>
                <ExpandableImage
                    src={popupImgSrc}
                    alt="Pop-up Maklumat Pekerjaan Terdahulu"
                    caption={
                        <>
                            <i>Pop-up</i> Maklumat Pekerjaan Terdahulu
                        </>
                    }
                    width={450}
                />
                <li>
                    Klik butang <b>Simpan</b>.
                </li>
                <li>
                    Klik butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}