import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface SemakSebutHargaProps {
    stepNumber: number;
    paymentType: string;
    imgBayar?: string;
    imgResit?: string;
}

export default function SemakSebutHarga({
    stepNumber,
    paymentType,
    imgBayar,
    imgResit,
}: SemakSebutHargaProps) {
    return (
        <div className="step-card">
            <h3>Langkah {stepNumber}: {paymentType}</h3>

            <ExpandableImage
                src={imgBayar}
                alt="Senarai Pembayaran"
                caption="Halaman Senarai Pembayaran" />

            <ol>
                <li>Klik butang menu <b>Pembayaran</b>.</li>
                <li>Klik butang <b>Lihat</b> (Jika Perlu). Dokumen <b>Kenyataan Bil Tuntutan</b> akan dipaparkan pada tab baru.</li>
                <li>Klik butang <b>Bayar</b> dan <i>pop-up</i> pembayaran akan dipaparkan.</li>
                <li>Paparan akan menunjukkan amaun yang perlu dibayar.</li>
                <li>Klik butang radio sama ada <b>Kad Kredit/Kad Debit</b> atau <b>FPX</b></li>
                <li>Klik butang <b>Bayar</b> dan teruskan sehingga pembayaran selesai.</li>
                <ExpandableImage
                    src={imgResit}
                    alt="Halaman Status Bayaran"
                    caption="Halaman Status Bayaran" />
                <li>Selepas pembayaran berjaya, klik butang <b>Lihat Resit</b> untuk melihat salinan resit sebagai bukti pembayaran.</li>
                <li>Maklumat resit akan dipaparkan pada halaman tab baru.</li>
            </ol>
        </div>
    );
}