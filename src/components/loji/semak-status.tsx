import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface SemakStatusProps {
    stepNumber?: number;
    moduleName: string;
    imgTabSedangDiproses: string;
    imgTabSelesaiDiproses: string;
}

export default function SemakStatus({
    stepNumber,
    moduleName,
    imgTabSedangDiproses,
    imgTabSelesaiDiproses,
}: SemakStatusProps) {
    return (
        <div className="step-card">
            <h3>Langkah {stepNumber}: Penyemakan Status Permohonan {moduleName}</h3>
            <Tabs>
                <TabItem value="sedangDiproses" label="Permohonan Sedang Diproses" default>
                    <h4 className="print-only">A. Semak Status Permohonan</h4>
                    <ExpandableImage
                        src={imgTabSedangDiproses}
                        alt="Contoh Paparan Status Permohonan Sedang Diproses"
                        caption="Contoh Paparan Status Permohonan Sedang Diproses" />
                    <ol>
                        <li>Klik butang menu <b>Senarai Permohonan</b> pada <i>side-bar</i> disebelah kiri untuk memaparkan halaman <b>Senarai Permohonan</b>.</li>
                        <li>Klik butang <b>Tindakan</b> pada status <b>Sedang Diproses</b> bagi jenis permohonan <b>{moduleName}</b>.</li>
                        <li>Klik butang <b>Lihat Maklumat</b> untuk menyemak permohonan <b>{moduleName}</b>.</li>
                        <li>Semak permohonan yang telah diisi setelah selesai membuat permohonan <b>{moduleName}</b>.</li>
                    </ol>
                </TabItem>
                <TabItem value="selesaiDiproses" label="Permohonan Selesai Diproses">
                    <h4 className="print-only">A. Semak Status Permohonan</h4>
                    <ExpandableImage
                        src={imgTabSelesaiDiproses}
                        alt="Contoh Paparan Status Permohonan Selesai Diproses"
                        caption="Contoh Paparan Status Permohonan Selesai Diproses" />
                    <ol>
                        <li>Klik butang menu <b>Senarai Permohonan</b> pada <i>side-bar</i> disebelah kiri untuk memaparkan halaman <b>Senarai Permohonan</b>.</li>
                        <li>Klik butang <b>Tindakan</b> pada status <b>Selesai Diproses – Diluluskan / Selesai Diproses - Dibatalkan</b> bagi jenis permohonan <b>{moduleName}</b>.</li>
                        <li>Klik butang <b>Lihat Maklumat</b> untuk menyemak permohonan <b>{moduleName}</b>.</li>
                    </ol>
                    <Admonition type="tip">
                        Senarai <b>Surat Lulus</b>, <b>Surat Batal</b> dan <b>Surat Tolak</b> akan dipaparkan pada medan <b>Senarai Surat</b>.
                    </Admonition>
                </TabItem>
            </Tabs>
        </div>
    );
}