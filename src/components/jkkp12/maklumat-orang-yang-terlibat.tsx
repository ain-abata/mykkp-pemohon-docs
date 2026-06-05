import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatOrangTerlibatProps {
    tabNumber: number;
    tabImgSrc: string;
    maklumatOrangDitetapkanImgSrc: string;
    popupMaklumatOrangDitetapkanImgSrc: string;
    maklumatSenaraiPembantuImgSrc: string;
    popupMaklumatSenaraiPembantuImgSrc: string;
}

export default function MaklumatOrangTerlibat({
    tabNumber,
    tabImgSrc,
    maklumatOrangDitetapkanImgSrc,
    popupMaklumatOrangDitetapkanImgSrc,
    maklumatSenaraiPembantuImgSrc,
    popupMaklumatSenaraiPembantuImgSrc,

}: MaklumatOrangTerlibatProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Orang Yang Terlibat</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Orang Yang Terlibat</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Halaman Maklumat Orang Yang Terlibat"
                    caption="Halaman Maklumat Orang Yang Terlibat"
                    width={650}
                />
            </ol>

            <h5>a. Tambah Maklumat Senarai Orang Yang Ditetapkan </h5>

            <ol>
                <li>Klik butang <b>Tambah</b>.
                </li>
                <ExpandableImage
                    src={maklumatOrangDitetapkanImgSrc}
                    alt="Bahagian Senarai Orang Yang Ditetapkan"
                    caption="Bahagian Senarai Orang Yang Ditetapkan"
                    width={650}
                />

                <li>
                    <i>Pop-up</i> <b>Maklumat Orang Yang Ditetapkan </b> akan terpapar seperti di bawah.

                    <ExpandableImage
                        src={popupMaklumatOrangDitetapkanImgSrc}
                        alt="Pop-up Carian Orang Yang Ditetapkan"
                        caption="Pop-up Carian Orang Yang Ditetapkan"
                        width={450}
                    />
                </li>
                <li>
                    Isi maklumat pada medan ruangan yang disediakan.
                </li>
                <li>
                    Klik butang  <b>Tambah</b>.
                </li>
                <li>
                    Maklumat yang baru ditambah akan terpapar dalam <b>Senarai Orang Yang Ditetapkan</b>.
                </li>
            </ol>

            <h5>b. Tambah Senarai Pembantu Keselamatan Dan Kesihatan  </h5>
            <ol>
                <li>Klik butang <b>Tambah</b>.
                </li>
                <ExpandableImage
                    src={maklumatSenaraiPembantuImgSrc}
                    alt="Bahagian Maklumat Pembantu Keselamatan Dan Kesihatan"
                    caption="Bahagian Maklumat Pembantu Keselamatan Dan Kesihatan"
                    width={650}
                />

                <li>
                    <i>Pop-up</i> <b>Maklumat Pembantu Keselamatan Dan Kesihatan </b> akan terpapar seperti di bawah.

                    <ExpandableImage
                        src={popupMaklumatSenaraiPembantuImgSrc}
                        alt="Pop-up Pembantu Keselamatan Dan Kesihatan"
                        caption="Pop-up Pembantu Keselamatan Dan Kesihatan"
                        width={450}
                    />
                </li>
                <li>
                    Isi maklumat pada medan ruangan yang disediakan.
                </li>
                <li>
                    Klik butang  <b>Tambah</b>.
                </li>
                <li>
                    Maklumat yang baru ditambah akan terpapar dalam <b>Senarai Orang Yang Ditetapkan</b>.
                </li>
            </ol>

        </div>
    );
}