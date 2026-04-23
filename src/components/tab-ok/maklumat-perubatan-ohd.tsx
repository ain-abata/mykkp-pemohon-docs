/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Maklumat Perubatan"
    tabImgSrc={imgOkMaklumatPerubatan} />

Explanation of alphabetNumbering:
- Isi dengan huruf kecil untuk penomboran abjad pada setiap tab. Contoh: a, b, c, ...

Explanation of tabNumber:
- Isi dengan angka untuk penomboran tab. Contoh: 1, 2, 3, ...

Explanation of tabName:
- Isi dengan nama modul yang dipaparkan pada tab. Contoh: Kelayakan Akademik, Pengalaman Kerja, ...

Explanation of tabImgSrc:
- Import sumber gambar yang ingin dipaparkan pada tab.
- Contoh:
    import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_am.png';
                    👇
    tabImgSrc={imgOkMaklumatAm}
image no zoom
<div className="doc-image">
                <img src={tabImgSrc} style={{ width: 450 }} />
                <p>Tab {tabNumber}: {tabName}</p>
            </div>
    */

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '../common/ExpandableImage';

interface OkMaklumatPerubatanOHDProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
}

export default function OkMaklumatPerubatanOHD({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: OkMaklumatPerubatanOHDProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={650}
            />
            <ol>
                <li>Isi <b>No. Pendaftaran OHD</b> yang telah berdaftar dengan sistem MyKKP pada medan ruangan disediakan untuk memaparkan maklumat pegawai perubatan OHD.</li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
            <Admonition type="warning">
                Pastikan <b>No. Pendaftaran OHD</b> yang dimasukkan masih sah.
            </Admonition>
        </div>
    );
}