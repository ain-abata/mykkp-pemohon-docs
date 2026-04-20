/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Maklumat Sijil Kompetensi"
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

import imgOkSijil from '@site/assets/images/orang-kompeten/tab/tab_sijil_kompetensi.png';

interface OkMaklumatSijilProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
}

export default function OkMaklumatSijil({
    alphabetNumbering,
    tabNumber,
    tabName,
}: OkMaklumatSijilProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <div className="doc-image">
            <img src={imgOkSijil} style={{ width: 450 }} />
            <p>Tab {tabNumber}: {tabName}</p>
        </div>
        <ol>
            <li>Rekod <b>Sijil Kompetensi</b> akan terpapar sekiranya pemohon memiliki sijil kompetensi yang lain.</li>
            <li>Klik butang <b>Seterusnya</b>.</li>
        </ol>
    </div>
  );
}