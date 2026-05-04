/**
 * Copy below 👇:

import SemakSebutHarga from '@site/src/components/loji/lihat-sebut-harga';

<SemakSebutHarga 
    stepNumber={5}
    imgPermohonanProses={imgPermohonanProses}
    imgBtnLihat={imgPembayaran}                 // Import image of Pembayaran page that highlight 'Lihat' button
    />
    
 */

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface SemakSebutHargaProps {
    stepNumber: number;
    imgPermohonanProses?: string;
    imgBtnLihat?: string;
}

export default function SemakSebutHarga({
    stepNumber,
    imgPermohonanProses,
    imgBtnLihat,
}: SemakSebutHargaProps) {
    return (
        <div className="step-card">
            <h3>Langkah {stepNumber}: Lihat Sebut Harga Perkhidmatan</h3>
            Terdapat <b>DUA (2)</b> cara untuk menyemak dokumen <b>Sebut Harga Perkhidmatan</b>:

            <Tabs>
                <TabItem value="pagePermohonan" label="Dari Halaman Senarai Permohonan" default>
                    <h4 className="print-only">A. Dari Halaman Senarai Permohonan</h4>
                        
                    <ExpandableImage
                        src={imgPermohonanProses}
                        alt="Senarai Permohonan"
                        caption="Halaman Senarai Permohonan" />

                    <ol>
                        <li>Klik butang <b>Senarai Permohonan</b> pada menu sebelah kiri seterusnya klik butang tab <b>Sedang Diproses</b>.</li>
                        <li>Klik butang <b>Tindakan</b> pada permohonan yang ingin disemak dan klik butang dropdown <b>Lihat Sebut Harga Perkhidmatan</b>.</li>
                        <li>Dokumen <b>Sebut Harga Perkhidmatan</b> akan dipaparkan pada tab baru.</li>
                    </ol>

                </TabItem>
                <TabItem value="pagePembayaran" label="Dari Halaman Pembayaran">
                    <h4 className="print-only">B. Dari Halaman Pembayaran</h4>

                    <ExpandableImage
                        src={imgBtnLihat}
                        alt="Senarai Pembayaran"
                        caption="Halaman Senarai Pembayaran" />

                    <ol>
                        <li>Klik butang menu <b>Pembayaran</b> dan klik butang <b>Lihat</b>.</li>
                        <li>Dokumen <b>Sebut Harga Perkhidmatan</b> akan dipaparkan pada tab baru.</li>
                    </ol>

                </TabItem>
            </Tabs>
        </div>
    );
}