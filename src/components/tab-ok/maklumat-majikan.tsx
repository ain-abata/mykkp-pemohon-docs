/**
 * 
Copy below 👇:
<OkMaklumatMajikan
    statusMajikanCount={3}
    tabImgSrc={imgOkMaklumatMajikan} />

Explanation of statusMajikanCount:
- 3: Ada Majikan, Majikan Sementara, Tiada Majikan
- 2: Ada Majikan, Majikan Sementara

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

import imgOkMaklumatMajikan from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_majikan_3status.png';
import imgOkMaklumatMajikan2 from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_majikan_2status.png';

interface OkMaklumatMajikanProps {
  hasOptionTiadaMajikan: boolean;
  tabImgSrc?: string;
}

export default function OkMaklumatMajikan ({
    hasOptionTiadaMajikan,
    tabImgSrc,
}: OkMaklumatMajikanProps) {
    return (
        <div>
            <h4>B. Tab 2: Maklumat Majikan</h4>
            <div className="doc-image">
                <img src={tabImgSrc} style={{ width: 450 }} />
                <p>Tab 2: Maklumat Majikan</p>
            </div>
            
            <ol>
                <li>Pilih salah satu (1) antara tiga (3) <b>Status Majikan</b>:
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>
                            <b>Ada Majikan:</b>
                            <ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
                                <li>Klik butang <b>Carian Majikan</b> dan <i>pop-up</i> akan dipaparkan.</li>
                                <li>Isi nama majikan dan klik butang <b>Cari</b>.</li>
                            </ol>
                                <Admonition type="warning">
                                    Pastikan majikan anda telah berdaftar dalam sistem MyKKP terlebih dahulu. Jika majikan yang dicari tidak dijumpai, Sila lakukan <Link to="../../pemtk">Pemberitahuan Tempat Kerja</Link>.
                                </Admonition>
                            <ol start={3} style={{ listStyleType: 'lower-roman' }}>
                                <li>Klik butang <b>Pilih</b> pada maklumat majikan yang dikehendaki.</li>
                                <li>Maklumat majikan yang dipilih akan terpapar pada medan.</li>
                            </ol>
                        </li>
                        {hasOptionTiadaMajikan && (
                            <li><b>Tiada Majikan:</b> Tidak perlu mengisi maklumat.</li>
                        )}
                        <li><b>Majikan Sementara:</b> Isi maklumat pada medan ruangan yang berkaitan.</li>
                    </ul>
                </li>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}