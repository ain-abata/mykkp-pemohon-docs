/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Perakuan Kebolehan"
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

import imgOkPerakuanKebolehan from '@site/assets/images/orang-kompeten/tab/tab_perakuan_kebolehan.png';

interface OkPerakuanKebolehanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
}

export default function OkPerakuanKebolehan({
    alphabetNumbering,
    tabNumber,
    tabName,
}: OkPerakuanKebolehanProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <div className="doc-image">
            <img src={imgOkPerakuanKebolehan} style={{ width: 450 }} />
            <p>Tab {tabNumber}: {tabName}</p>
        </div>
        <Admonition type="warning">
            Pastikan maklumat yang dipaparkan adalah tepat.
        </Admonition>
        <ol>
            <li>Isi maklumat pada medan ruangan yang disediakan.</li>
            <li>Klik butang <b>Seterusnya</b>.</li>
        </ol>
    </div>
  );
}