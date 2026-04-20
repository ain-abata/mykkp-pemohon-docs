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

import imgOkPerakuan from '@site/assets/images/orang-kompeten/tab/tab_Perakuan.png';
import imgOkMesejBerjaya from '@site/assets/images/orang-kompeten/mesej_penghantaran_berjaya.png';

interface OkPerakuanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
}

export default function OkPerakuan({
    alphabetNumbering,
    tabNumber,
    tabName,
}: OkPerakuanProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <div className="doc-image">
            <img src={imgOkPerakuan} style={{ width: 450 }} />
            <p>Tab {tabNumber}: {tabName}</p>
        </div>
        <ol>
            <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
            <li>Isi maklumat pada medan <b>Jawatan</b> dan klik butang <b>Hantar</b>.</li>
            <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/XX/XXX/XXXX”</b> akan terpapar</li>
            <li>Klik butang <b>OK</b> dan paparan akan kembali kepada <b>Dashboard</b> pemohon.</li>
        </ol>
        <Admonition type="important">
            <p>Pemohon perlu membuat <b>pembayaran Fi Pemprosesan dalam masa 7 hari dari tarikh penghantaran permohonan</b>. Jika pembayaran tidak dijelaskan dalam tempoh tersebut, permohonan akan digugurkan secara automatik oleh sistem.</p>
            <br/>
            <p>Untuk membuat pembayaran, sila rujuk 👉 <b>Pembayaran</b>.</p>
            <div className="doc-image">
                <img src={imgOkMesejBerjaya} style={{width: 450}} />
                <p><i>Pop-up</i> Mesej Berjaya</p>
            </div>
        </Admonition>
    </div>
  );
}