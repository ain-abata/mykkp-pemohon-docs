/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Perakuan Kebolehan"
    tabImgSrc={imgOkPerakuanKebolehan} />
 />

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

interface OkPerakuanKebolehanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function OkPerakuanKebolehan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: OkPerakuanKebolehanProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <ExpandableImage
            src={tabImgSrc} 
            alt={tabName}
            caption={'Tab ' + tabNumber + ': ' + tabName}
            width={450} />
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