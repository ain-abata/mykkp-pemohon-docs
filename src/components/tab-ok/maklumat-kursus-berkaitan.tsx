import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

import EmptyFieldWarning from '@site/src/components/admonitions/empty-field-warning';

interface OkMaklumatKursusBerkaitanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function OkMaklumatKursusBerkaitan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: OkMaklumatKursusBerkaitanProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <div className="doc-image">
            <img src={tabImgSrc} style={{ width: 450 }} />
            <p>Tab {tabNumber}: {tabName}</p>
        </div>
        <ol>
            <li>Isi pada medan yang disediakan.</li>
            <li>Klik butang <b>Seterusnya</b>.</li>
        </ol>
        <Admonition type="important">
            Pastikan <b>Tarikh Tamat Kad</b> tidak kurang daripada Tarikh Semasa.
        </Admonition>
    </div>
  );
}