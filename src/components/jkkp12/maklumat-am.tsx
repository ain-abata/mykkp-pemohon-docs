// src/components/jkkp12/maklumat-am.tsx

import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatAmProps {
    tabNumber: number;
    tabImgSrc?: string;
    maklumatHubunganImgSrc?: string;
}

export default function MaklumatAm({
    tabNumber,
    tabImgSrc,
    maklumatHubunganImgSrc
}: MaklumatAmProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Am</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Am</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt="Tab 1 Maklumat Am"
                    caption="Tab 1: Maklumat Am"
                    width={650} />
                <li>
                    Semak <b>Maklumat Am</b> dan isi maklumat yang berkaitan.
                </li>

                <li>
                    Semak <b>Maklumat Alamat Klien</b>. Pilih butang radio <b>Alamat Surat-Menyurat</b> yang disediakan.
                    <ExpandableImage
                        src={maklumatHubunganImgSrc}
                        alt="Maklumat Hubungan"
                        caption="Maklumat Hubungan"
                        width={650} />
                    <Admonition type="info">
                        Jika <b>Alamat Surat-Menyurat</b> tidak sama seperti <b>Alamat Kedudukan</b>, klik pada butang radio <b>Alamat Surat-Menyurat tidak sama seperti Alamat Kedudukan</b>.
                        <br />
                        <br />
                        Jika alamat adalah sama, pilih butang radio <b>Alamat Surat-Menyurat sama seperti Alamat Kedudukan</b> dan isi maklumat pada medan yang disediakan.
                    </Admonition>
                </li>

                <li>
                    Semak <b>Maklumat Hubungan</b>.
                </li>

                <li>
                    Klik pada butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}