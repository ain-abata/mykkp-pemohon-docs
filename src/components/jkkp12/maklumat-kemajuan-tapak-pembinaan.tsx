import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface MaklumatKemajuanTapakPembinaanProps {
    tabNumber: number;
    tabImgSrc: string;
}

export default function MaklumatKemajuanTapakPembinaan({
    tabNumber,
    tabImgSrc,
}: MaklumatKemajuanTapakPembinaanProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Kemajuan</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Kemajuan</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Halaman Maklumat Kemajuan"
                    caption="Halaman Maklumat Kemajuan"
                    width={650}
                />
                <li>
                    Isi maklumat pada bahagian <b>Maklumat Kemajuan</b>.
                </li>
                <li>
                    Klik pada butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}