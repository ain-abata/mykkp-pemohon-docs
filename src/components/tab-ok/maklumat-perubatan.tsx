/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Maklumat Perubatan"
 />

Explanation of alphabetNumbering:
- Isi dengan huruf kecil untuk penomboran abjad pada setiap tab. Contoh: a, b, c, ...

Explanation of tabNumber:
- Isi dengan angka untuk penomboran tab. Contoh: 1, 2, 3, ...

Explanation of tabName:
- Isi dengan nama modul yang dipaparkan pada tab. Contoh: Kelayakan Akademik, Pengalaman Kerja, ...
*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

import imgOkMaklumatPerubatan from '@site/assets/images/orang-kompeten/tab/tab_maklumat_perubatan.png';

interface OkMaklumatPerubatanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
}

export default function OkMaklumatPerubatan({
    alphabetNumbering,
    tabNumber,
    tabName,
}: OkMaklumatPerubatanProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <div className="doc-image">
            <img src={imgOkMaklumatPerubatan} style={{ width: 450 }} />
            <p>Tab {tabNumber}: {tabName}</p>
        </div>
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