import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatKontraktorTapakPembinaanProps {
    tabNumber: number;
    tabImgSrc: string;
    maklumatKontraktorImgSrc: string;
    popupMaklumatKontraktorImgSrc: string;
    pilihanKontraktorPrinsipalImgSrc: string;
    popupPilihanKontraktorImgSrc: string;
}

export default function MaklumatKontraktorTapakPembinaan({
    tabNumber,
    tabImgSrc,
    maklumatKontraktorImgSrc,
    popupMaklumatKontraktorImgSrc,
    pilihanKontraktorPrinsipalImgSrc,
    popupPilihanKontraktorImgSrc,
}: MaklumatKontraktorTapakPembinaanProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Kontraktor</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Kontraktor</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Halaman Maklumat Kontraktor"
                    caption="Halaman Maklumat Kontraktor"
                    width={650}
                />
                <li>
                    Jika pilihan butang radio <b>Maklumat Tapak Kerja Pembinaan</b> adalah{' '}
                    <b>Klien</b>, medan <b>Maklumat Klien</b> akan terpapar.
                </li>
            </ol>

            <h5>a. Tambah Maklumat Kontraktor Kerja Pembinaan</h5>

            <ol>
                <li>
                    Klik butang <b>Tambah</b>.

                    <ExpandableImage
                        src={maklumatKontraktorImgSrc}
                        alt="Bahagian Maklumat Kontraktor Kerja Pembinaan"
                        caption="Bahagian Maklumat Kontraktor Kerja Pembinaan"
                        width={650}
                    />
                </li>
                <li>
                    Pop-up modal <b>Maklumat Kontraktor Kerja Pembinaan</b> akan terpapar.

                    <ExpandableImage
                        src={popupMaklumatKontraktorImgSrc}
                        alt="Pop-up Modal Maklumat Kontraktor Kerja Pembinaan"
                        caption="Pop-up Modal Maklumat Kontraktor Kerja Pembinaan"
                        width={450}
                    />
                </li>
                <li>
                    Pilih <b>Kategori</b> dan isi carian pada medan ruangan <b>Carian</b>.
                    Klik butang <b>Carian</b>.
                </li>
                <li>
                    Klik butang radio untuk memilih <b>Kontraktor Kerja Pembinaan</b> yang
                    dikehendaki.
                </li>
                <li>
                    Klik butang <b>Pilih</b>.
                </li>
                <li>
                    Maklumat tempat kerja yang dipilih akan terpapar dalam senarai{' '}
                    <b>Maklumat Kontraktor Kerja Pembinaan</b>.
                </li>
            </ol>

            <h5>b. Tambah Maklumat Kontraktor Prinsipal Kerja Pembinaan</h5>

            <ol>
                <li>
                    Klik butang <b>Pilihan Senarai Kontraktor Prinsipal Kerja Pembinaan</b>.

                    <ExpandableImage
                        src={pilihanKontraktorPrinsipalImgSrc}
                        alt="Butang Pilihan Senarai Kontraktor Prinsipal Kerja Pembinaan"
                        caption="Pilihan Senarai Kontraktor Prinsipal Kerja Pembinaan"
                        width={650}
                    />
                </li>
            </ol>

            <Admonition type="info" >
                Kontraktor Prinsipal wajib dipilih jika terdapat lebih daripada satu{' '}
                <b>Kontraktor Kerja Pembinaan</b> yang dilantik oleh{' '}
                <b>Klien/Pemberitahu</b>.
            </Admonition>

            <ol start={2}>
                <li>
                    Pop-up <b>Pilihan Senarai Kontraktor</b> akan terpapar.

                    <ExpandableImage
                        src={popupPilihanKontraktorImgSrc}
                        alt="Pop-up Pilihan Senarai Kontraktor"
                        caption="Pop-up Pilihan Senarai Kontraktor"
                        width={450}
                    />
                </li>
                <li>
                    Klik butang radio pada <b>Tempat Kerja</b> yang dikehendaki.
                </li>
                <li>
                    Klik butang <b>Pilih</b> untuk memilih{' '}
                    <b>Kontraktor Prinsipal Kerja Pembinaan</b>.
                </li>
                <li>
                    Maklumat tempat kerja yang dipilih akan terpapar dalam senarai{' '}
                    <b>Maklumat Kontraktor Prinsipal Kerja Pembinaan</b>.
                </li>
                <li>Pilih Gred Pendaftaran CIDB Kontraktor Prinsipal Kerja Pembinaan. </li>
                <Admonition type="info" >
                    Gred Pendaftaran CIDB Kontraktor Prinsipal Kerja Pembinaan perlu dipilih sekiranya terdapat maklumat Kontraktor Prinsipal Kerja Pembinaan.
                </Admonition>
                <li>Klik pada butang Seterusnya</li>
            </ol>
            
        </div>
    );
}