/**
 * 
Copy below 👇:
<OkMaklumatAm
    hasPanduanODS={true} />

Explanation of hasPanduanODS:
- true: Papar panduan ODS
- false: Tidak papar panduan ODS
 
*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/tab/tab_maklumat_am.png';
import imgOkMaklumatAm2 from '@site/assets/images/orang-kompeten/tab/tab_maklumat_am_2.png';
import {KemaskiniMaklumat} from '@site/src/components/admonition-components';

export default function OkMaklumatAm ({ hasPanduanODS }: { hasPanduanODS: boolean }) {
    return (
        <div>
            <h4>A. Tab 1: Maklumat Am</h4>
            <div className="doc-image">
                <img src={hasPanduanODS ? imgOkMaklumatAm2 : imgOkMaklumatAm} style={{ width: 450 }} />
                <p>Tab A: Maklumat Am</p>
            </div>
            
            <ul>
                {hasPanduanODS && (
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