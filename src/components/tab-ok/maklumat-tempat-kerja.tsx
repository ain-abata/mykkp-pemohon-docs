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
*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface OkMaklumatTKProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function OkMaklumatTK ({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: OkMaklumatTKProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc} 
                alt={tabName}
                caption={'Tab ' + tabNumber + ': ' + tabName}
                width={450} />
            
            <ol>
                <li> klik butang sama ada <b>Ya</b> atau <b>Tidak</b>.</li>
                <li>Isi maklumat tempat kerja berdasarkan pilihan butang radio seperti di bawah:
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li><b>Ya:</b> Semua medan akan diisi secara automatik berdasarkan maklumat pada <b>Tab {tabNumber}: {tabName}</b>.</li>
                        <li>
                            <b>Tidak:</b>
                            <ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
                                <li>Klik butang <b>Carian Majikan</b> dan <i>pop-up</i> akan dipaparkan.</li>
                                <li>Isi nama majikan dan klik butang <b>Cari</b>.</li>
                            </ol>
                                <Admonition type="warning">
                                    Pastikan majikan anda telah berdaftar dalam sistem MyKKP terlebih dahulu. Jika majikan yang dicari tidak dijumpai, Sila lakukan <Link to="../../pemtk">Pemberitahuan Tempat Kerja</Link>.
                                </Admonition>
                            <ol start={3} style={{ listStyleType: 'lower-roman' }}>
                                <li>Klik butang <b>Pilih</b> pada maklumat tempat kerja yang dikehendaki.</li>
                                <li>Maklumat tempat kerja yang dipilih akan terpapar pada medan.</li>
                                <li>Isi maklumat pada medan ruangan yang berkaitan.</li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}