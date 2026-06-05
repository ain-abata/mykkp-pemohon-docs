import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatOrangKompetenProps {
    tabNumber: number;
    tabImgSrc: string;
    maklumatOYKSHOImgSrc: string;
    popupMaklumatOYKSHOImgSrc: string;
    maklumatOYKSSSImgSrc: string;
    popupMaklumatOYKSSSImgSrc: string;
    maklumatOYKLainImgSrc: string;
    popupMaklumatOYKLainImgSrc: string;
}

export default function MaklumatOrangKompeten({
    tabNumber,
    tabImgSrc,
    maklumatOYKSHOImgSrc,
    popupMaklumatOYKSHOImgSrc,
    maklumatOYKSSSImgSrc,
    popupMaklumatOYKSSSImgSrc,
    maklumatOYKLainImgSrc,
    popupMaklumatOYKLainImgSrc,
}: MaklumatOrangKompetenProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Orang Kompeten</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Orang Kompeten</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Halaman Maklumat Orang Kompeten"
                    caption="Halaman Maklumat Orang Kompeten"
                    width={650}
                />
            </ol>

            <h5>a. Tambah Pegawai Keselamatan dan Kesihatan (SHO) </h5>

            <ol>
                <li>
                    Pilih Kategori dan isi maklumat pada medan ruangan Carian.
                </li>
                <li>Klik butang <b>Carian</b>.
                </li>
                <ExpandableImage
                    src={maklumatOYKSHOImgSrc}
                    alt="Bahagian Pegawai Keselamatan dan Kesihatan (SHO)"
                    caption="Bahagian Pegawai Keselamatan dan Kesihatan (SHO)"
                    width={650}
                />

                <li>
                    <i>Pop-up</i> <b>Carian Orang Yang Kompeten </b> akan terpapar seperti di bawah.

                    <ExpandableImage
                        src={popupMaklumatOYKSHOImgSrc}
                        alt="Pop-up Carian Orang Yang Kompeten"
                        caption="Pop-up Carian Orang Yang Kompeten"
                        width={450}
                    />
                </li>
                <li>
                    Klik pada butang radio OYKSHO yang dikehendaki dan klik butang <b> Pilih</b>.
                </li>
                <li>
                    Maklumat OYK yang dipilih akan terpapar dalam senarai <b>Pegawai Keselamatan dan Kesihatan (SHO)</b>.
                </li>
            </ol>

            <h5>b. Tambah Penyelia Keselamatan Tapak Bina (SSS) </h5>

            <ol>
                <li>
                    Pilih Kategori dan isi maklumat pada medan ruangan Carian.
                </li>
                <li>Klik butang <b>Carian</b>.
                </li>
                <ExpandableImage
                    src={maklumatOYKSSSImgSrc}
                    alt="Bahagian Maklumat Penyelia Keselamatan Tapak Bina"
                    caption="Bahagian Maklumat Penyelia Keselamatan Tapak Bina"
                    width={650}
                />

                <li>
                    <i>Pop-up</i> <b>Carian Orang Yang Kompeten </b> akan terpapar seperti di bawah.

                    <ExpandableImage
                        src={popupMaklumatOYKSSSImgSrc}
                        alt="Pop-up Carian Orang Yang Kompeten"
                        caption="Pop-up Carian Orang Yang Kompeten"
                        width={450}
                    />
                </li>
                <li>
                    Klik pada butang radio OYKSSS yang dikehendaki dan klik butang <b> Pilih</b>.
                </li>
                <li>
                    Maklumat OYK yang dipilih akan terpapar dalam senarai <b>Penyelia Keselamatan Tapak Bina (SSS)</b>.
                </li>
            </ol>
            <h5>c. Tambah Maklumat Senarai Orang Kompeten Lain-Lain   </h5>

            <ol>
                <li>
                    Pilih Jenis Orang Kompeten.
                </li>
                <li>
                    Pilih <b>Kategori</b> dan isi maklumat pada medan ruangan Carian.
                </li>
                <li>
                    Klik butang <b>Carian</b>.
                </li>

                <ExpandableImage
                    src={maklumatOYKLainImgSrc}
                    alt="Bahagian Maklumat Orang Kompeten Lain-Lain  "
                    caption="Bahagian Maklumat Orang Kompeten Lain-Lain "
                    width={650}
                />

                <li>
                    <i>Pop-up</i> <b>Carian Orang Yang Kompeten </b> akan terpapar seperti di bawah.

                    <ExpandableImage
                        src={popupMaklumatOYKLainImgSrc}
                        alt="Pop-up Carian Orang Yang Kompeten"
                        caption="Pop-up Carian Orang Yang Kompeten"
                        width={450}
                    />
                </li>
                <li>
                    Klik pada butang radio OYK yang dikehendaki dan klik butang <b> Pilih</b>.
                </li>
                <li>
                    Maklumat OYK yang dipilih akan terpapar dalam senarai <b>Orang Kompeten Lain-Lain.</b>.
                </li>
                <li>
                    Klik butang <b>Seterusnya.</b>.
                </li>
            </ol>
        </div>
    );
}