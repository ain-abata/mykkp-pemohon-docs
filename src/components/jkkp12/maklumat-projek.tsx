// src/components/jkkp12/maklumat-projek.tsx

import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatProjekProps {
    tabNumber: number;
    tabImgSrc?: string;
    maklumatPegawaiImgSrc?: string;
}

export default function MaklumatProjek({
    tabNumber,
    tabImgSrc,
    maklumatPegawaiImgSrc,
}: MaklumatProjekProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: Maklumat Projek</h4>
            <ol>
                <li>
                    Halaman <b>Maklumat Projek</b> akan terpapar seperti di bawah.
                </li>
                <ExpandableImage
                    src={tabImgSrc}
                    alt={`Tab ${tabNumber} Maklumat Projek`}
                    caption={`Tab ${tabNumber}: Maklumat Projek`}
                    width={650}
                />
                <li>
                    Isi maklumat mandatori pada bahagian <b>Maklumat Projek</b>.
                </li>

                <li>
                    Pilih jenis butang radio <b>Maklumat Alamat Surat-Menyurat Projek</b>.

                    <Admonition type="info">
                        Jika <b>Alamat Surat-Menyurat Projek</b> tidak sama seperti <b>Alamat Surat-Menyurat Klien</b>, klik pada butang radio <b>Alamat Surat-Menyurat tidak sama seperti Alamat Surat-Menyurat Klien</b>.
                        <br />
                        <br />
                        Jika alamat adalah sama, pilih butang radio <b>Alamat Surat-Menyurat sama seperti Alamat Surat-Menyurat Klien</b> dan isi maklumat pada medan yang disediakan.
                    </Admonition>
                </li>

                <li>
                    Isi maklumat pada bahagian <b>Maklumat Pegawai Yang Bertanggungjawab (Klien)</b>.

                    {maklumatPegawaiImgSrc && (
                        <ExpandableImage
                            src={maklumatPegawaiImgSrc}
                            alt="Maklumat Pegawai Yang Bertanggungjawab Klien"
                            caption="Maklumat Pegawai Yang Bertanggungjawab (Klien)"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    Klik pada butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}