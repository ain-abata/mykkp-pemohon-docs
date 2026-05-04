/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Maklumat Sijil Kompetensi"
    tabImgSrc={imgOkMaklumatSijil}
    mesejBerjayaImgSrc={imgOkMesejBerjaya} />

Explanation of alphabetNumbering:
- Isi dengan huruf kecil untuk penomboran abjad pada setiap tab. Contoh: a, b, c, ...

Explanation of tabNumber:
- Isi dengan angka untuk penomboran tab. Contoh: 1, 2, 3, ...

Explanation of tabName:
- Isi dengan nama modul yang dipaparkan pada tab. Contoh: Kelayakan Akademik, Pengalaman Kerja, ...

Explanation of tabImgSrc & mesejBerjayaImgSrc:
- Import sumber gambar yang ingin dipaparkan pada tab.
- Contoh:
    import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_am.png';
                    👇
    tabImgSrc={imgOkMaklumatAm} 

    <div className="doc-image">
            <img src={tabImgSrc} style={{ width: 450 }} />
            <p>Tab {tabNumber}: {tabName}</p>
        </div>
*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

interface OkPerakuanProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  mesejBerjayaImgSrc?: string;
}

export default function OkPerakuan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    mesejBerjayaImgSrc,
}: OkPerakuanProps) {
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
            <li>Klik pada butang <i>checkbox</i> <b>Perakuan</b>.</li>
            <li>Isi maklumat pada medan <b>Jawatan</b> dan klik butang <b>Hantar</b>.</li>
            <li>Pop-up mesej <b>“Permohonan Anda Telah Berjaya Dihantar! No. Rujukan Permohonan anda adalah XX/XX/XXX/XXXX”</b> akan terpapar</li>
            <li>Klik butang <b>OK</b> dan paparan akan kembali kepada <b>Dashboard</b> pemohon.</li>
        </ol>
        <Admonition type="important">
            <p>Pemohon perlu membuat <b>pembayaran Fi Pemprosesan dalam masa 7 hari dari tarikh penghantaran permohonan</b>. Jika pembayaran tidak dijelaskan dalam tempoh tersebut, permohonan akan digugurkan secara automatik oleh sistem.</p>
            <br/>
            <p>Untuk membuat pembayaran, sila rujuk 👉 <b><Link to="../pembayaran-fi">Cara Pembayaran Fi</Link></b>.</p>
            
            <ExpandableImage
                src={mesejBerjayaImgSrc} 
                alt={tabName}
                caption={'Pop-up Mesej Berjaya'}
                width={450} />
                
        </Admonition>
    </div>
  );
}