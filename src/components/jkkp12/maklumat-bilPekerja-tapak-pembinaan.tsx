import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface MaklumatBilanganPekerjaTapakPembinaanProps {
    tabNumber: number;
    tabImgSrc: string;
}

export default function MaklumatBilanganPekerjaTapakPembinaan({
    tabNumber,
    tabImgSrc,
}: MaklumatBilanganPekerjaTapakPembinaanProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Bilangan Pekerja Tapak Pembinaan</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Bilangan Pekerja Tapak Pembinaan</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Halaman Maklumat Bilangan Pekerja Tapak Pembinaan"
                    caption="Halaman Maklumat Bilangan Pekerja Tapak Pembinaan"
                    width={650}
                />
                <li>
                    Isi maklumat pada bahagian <b>Maklumat Bilangan Pekerja Tapak Pembinaan</b>.
                </li>
                <li>
                    Klik pada butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}