/**
 * 
Copy below 👇:
<OkMaklumatAm
    hasPanduanODS={true}
    tabImgSrc={imgOkMaklumatAm} />

Explanation of hasPanduanODS:
- true: Papar panduan ODS
- false: Tidak papar panduan ODS

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

import KemaskiniMaklumat from '@site/src/components/admonitions/kemaskini-maklumat';


interface OkMaklumatAmProps {
  hasPanduan: boolean;
  tabImgSrc?: string;
}

export default function OkMaklumatAm ({
  hasPanduan,
  tabImgSrc,
}: OkMaklumatAmProps) {
    return (
        <div>
            <h4>A. Tab 1: Maklumat Am</h4>
            <div className="doc-image">
                <img src={tabImgSrc} style={{ width: 450 }} />
                <p>Tab 1: Maklumat Am</p>
            </div>
            
            <ul>
                {hasPanduan && (
                    <li><b>Panduan:</b> Klik pada link berikut untuk merujuk Panduan Permohonan Pendaftaran & Pembaharuan.</li>
                )}
                <li><b>Contoh Gambar:</b> Klik pada link berikut untuk melihat format gambar yang menepati syarat.</li>
            </ul>

            <ol>
                <li>Semak untuk memastikan <b>Maklumat Am</b> anda adalah maklumat yang terkini.</li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>

            <KemaskiniMaklumat jenisMaklumat="Maklumat Am" />

            {/*
            Cara link to page maklumat am:
            <KemaskiniMaklumat jenisMaklumat={
                <Link to="/maklumat-am">Maklumat Am</Link>
            } />

            */}

        </div>
    );
}