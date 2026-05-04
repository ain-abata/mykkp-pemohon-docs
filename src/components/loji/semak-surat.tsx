import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';

import pageSuratMenurat from '@site/assets/images/loji/halaman_surat_menyurat.png';

import popUpJenisSuratSijil from '@site/assets/images/loji/pop_up_jenis_surat_sijil.png';

interface SemakStatusProps {
    stepNumber: number;
}

export default function SemakStatus({
    stepNumber,
}: SemakStatusProps) {
    return (
        <div className="step-card">
            <h3>Langkah {stepNumber}: Penyemakan Surat Menyurat</h3>
            <ExpandableImage
                src={pageSuratMenurat}
                alt="Halaman Surat Menyurat"
                caption="Halaman Surat Menyurat" />
            <ol>
                <li>Akses halaman <b>Surat Menyurat</b> dengan klik butang menu <b>Surat Menyurat</b> pada <i>side-bar</i> disebelah kiri.</li>
                <li>Klik butang <i>dropdown</i> <b>Jenis Surat/Sijil</b> pada medan <b>Senarai Dokumen Modul State</b> untuk memaparkan jenis surat/sijil.</li>
                <li><i>Pop-up</i> <b>Jenis Surat/Sijil</b> akan dipaparkan. Pilih jenis surat yang dikehendaki pada butang radio.</li>
            </ol>
            
            <ExpandableImage
                src={popUpJenisSuratSijil}
                alt="Pop-up Jenis Surat/Sijil"
                caption="Pop-up Jenis Surat/Sijil"
                width={300} />
            
            <ol start={4}>
                <li>Klik butang <b>OK</b> dan klik butang <b>Cari</b> yang berada di sebelah kanan medan <i>dropdown</i>.</li>
                <li>Klik butang <b>Lihat</b> berdasarkan <b>No. Rujukan Permohonan</b> yang telah dibuat untuk memaparkan surat yang dikehendaki.</li>
            </ol>
        </div>
    );
}