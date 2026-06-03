import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface MaklumatTapakTapakPembinaanProps {
    tabNumber: number;
    tabImgSrc: string;
    tambahBtnImgSrc: string;
    popupKategoriKerjaImgSrc: string;
}

export default function MaklumatTapakTapakPembinaan({
    tabNumber,
    tabImgSrc,
    tambahBtnImgSrc,
    popupKategoriKerjaImgSrc,
}: MaklumatTapakTapakPembinaanProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Tapak</h4>
            <ol>
                <li>
                Halaman <b>Maklumat Tapak</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Halaman Maklumat Tapak"
                    caption="Halaman Maklumat Tapak"
                    width={650}
                />
                <li>
                    Isi maklumat mandatori pada bahagian <b>Maklumat Tapak</b>.
                </li>
                <li>
                    Untuk menambah <b>Kategori Kerja Pembinaan</b>, klik pada butang{' '}
                    <b>Tambah</b>.

                    <ExpandableImage
                        src={tambahBtnImgSrc}
                        alt="Butang Tambah Kategori Kerja Pembinaan"
                        caption="Butang Tambah"
                        width={650}
                    />
                </li>
                <li>
                    Pop-up modal <b>Kategori Kerja Pembinaan</b> akan terpapar. Pilih{' '}
                    <b>Kategori Kerja Pembinaan</b> dan{' '}
                    <b>Sub Kategori Kerja Pembinaan</b>.

                    <ExpandableImage
                        src={popupKategoriKerjaImgSrc}
                        alt="Pop-up Modal Kategori Kerja Pembinaan"
                        caption="Pop-up Modal Kategori Kerja Pembinaan"
                        width={650}
                    />
                </li>
                <li>
                    Isi maklumat pada medan <b>Maklumat Alamat Tapak Pembinaan</b>.
                </li>
                <li>
                    Isi maklumat pada medan <b>Maklumat Pengurus Projek</b>.
                </li>
                <li>
                    Klik pada butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}