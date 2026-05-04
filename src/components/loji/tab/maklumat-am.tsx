import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface MaklumatAmProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    hasRujukan: boolean;
    tabImgSrc?: string;
    hasPemunyaAsalSection?: boolean;
    hasPemunyaSection?: boolean;
    carianImgSrc: string;
}

export default function MaklumatAm({
    alphabetNumbering,
    tabNumber,
    tabName,
    hasRujukan,
    tabImgSrc,
    hasPemunyaAsalSection,
    hasPemunyaSection,
    carianImgSrc,
}: MaklumatAmProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
                
            <ul>
                {hasRujukan && (
                    <li><b>Butang Rujukan:</b> Klik butang berikut untuk merujuk <b><i>Examination Report</i></b>.</li>
                )}
            </ul>

            <ol>
                <li>Semak semua maklumat yang berkaitan.</li>
                <li>Isi maklumat pada medan di bahagian berikut:</li>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                    <li><b>Maklumat Am</b></li>
                    <li><b>Maklumat Alamat</b></li>
                </ul>
                <Admonition type="important">
                    Sila pastikan medan pada tab <b>Alamat Surat-Menyurat</b> diisi sekiranya berbeza daripada <b>Alamat Kedudukan</b>.
                </Admonition>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                    <li><b>Maklumat Hubungan</b></li>
                </ul>
            </ol>

            <Admonition type="info">
                Untuk melakukan pengemaskinian di medan yang <i>disabled</i>, emelkan kepada <b>mykkp@mohr.gov.my</b> beserta <i>letterhead</i>.
            </Admonition>

            {hasPemunyaAsalSection ? (
                <ol start={3}>
                    <ExpandableImage
                      src={carianImgSrc}
                      alt="Seksyen Maklumat Pemunya Asal"
                      caption="Seksyen Maklumat Pemunya Asal"
                      width={450} />
                    <li>Isi <b>No. Pendaftaran Pemunya</b> pada medan yang disediakan dan klik butang <b>Carian No. Pendaftaran Pemunya</b>.</li>
                    <li>Maklumat pemunya yang dicari akan terpapar pada medan.</li>
                    <li>Semak semua maklumat yang berkaitan.</li>
                    <li>Klik butang <b>Seterusnya</b>.</li>
                </ol>
            ) : hasPemunyaSection ? (
                <ol start={3}>
                    <ExpandableImage
                      src={carianImgSrc}
                      alt="Seksyen Maklumat Pemunya"
                      caption="Seksyen Maklumat Pemunya"
                      width={450} />
                    <li>Klik butang <b>Carian</b> pada pilihan <b>Carian Pemunya</b> sekiranya Maklumat Pemunya tidak sama seperti Maklumat Penghuni.</li>
                    <li><i>Pop-up</i> <b>Carian Pemunya</b> akan dipaparkan. Pengguna boleh mengisi Nama Organisasi dan klik butang <b>Cari</b>.</li>
                    <li>Klik butang <b>Pilih</b> untuk memilih organisasi yang ingin dipilih.</li>
                    <li>Klik butang <b>Seterusnya</b>.</li>
                </ol>
            ) : (
                <ol start={3}>
                    <li>Klik butang <b>Seterusnya</b>.</li>
                </ol>
            )}
        </div>
    );
}