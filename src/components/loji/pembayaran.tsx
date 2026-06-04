/**
 * Copy below 👇:

import Pembayaran from '@site/src/components/loji/pembayaran';

<Pembayaran 
    stepNumber={5}
    paymentType="Bayaran Permulaan & Bayaran Akhir"     // Write payment type
    imgBayar={imgPermohonanProses}                      // Import image of page 'Senarai Pembayaran' with highlight 'Lihat' & 'Bayar' buttons
    imgResit={imgPembayaran}                            // Import image of page 'Status Pembayaran' after payment success
    />

*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface PembayaranProps {
    stepNumber: number;
    paymentType: string;
    imgBayar?: string;
    imgResit?: string;
    imgKaedahBayarKad?: string;
    imgKaedahBayarFPX?: string;
    imgKaedahBayarB2B?: string;
}

export default function Pembayaran({
    stepNumber,
    paymentType,
    imgBayar,
    imgResit,
    imgKaedahBayarKad,
    imgKaedahBayarFPX,
}: PembayaranProps) {
    return (
        <div>
            <ExpandableImage
                src={imgBayar}
                alt="Senarai Pembayaran"
                caption="Halaman Senarai Pembayaran" />

            <ol>
                <li>Klik butang menu <b>Pembayaran</b>.</li>
                <li>Klik butang <b>Lihat</b> (Jika Perlu). Dokumen <b>Kenyataan Bil Tuntutan</b> akan dipaparkan pada tab baru.</li>
                <li>Klik butang <b>Bayar</b> dan <i>pop-up</i> pembayaran akan dipaparkan.</li>
                    <Admonition type="info">
                         Terdapat <b>dua (2)</b> kaedah pembayaran utama dalam MYKKP iaitu <b>Kad Kredit/Kad Debit</b> dan <b>FPX</b>.
                    </Admonition>                
                <li>Pilih kaedah pembayaran yang dikehendaki sama ada <b>Kad Kredit/Kad Debit</b> atau <b>FPX</b>.</li>
                    <Admonition type="info">
                         Terdapat <b>dua (2)</b> pilihan pembayaran melalui FPX iaitu <b>Online Banking</b> dan <b>Online Banking (B2B)</b>.
                    </Admonition> 
                <li>Klik butang <b>Bayar</b> untuk meneruskan pembayaran.</li>
                <div className="step-card">
                    <Tabs>
                                <TabItem value="pageKad" label="Kad Kredit/Kad Debit" default>
                                <h2 className="print-only">Pembayaran melalui Kad Kredit/Kad Debit</h2>
                                  <ol>
                                        <li>Pilih butang <b>Card</b>.</li>
                                            <ExpandableImage
                                                src={imgKaedahBayarKad}
                                                alt="Pilihan Kaedah Pembayaran"
                                                caption="Pilihan Kaedah Pembayaran" 
                                                width={400}
                                            /> 
                                        <li>Klik butang <b>Pay</b> untuk meneruskan pembayaran secara <b>Kad Debit/Kad Kredit.</b></li>
                                        <li>Isi maklumat Kad yang diperlukan.</li>
                                        <li>Klik butang <b>Pay</b> untuk meneruskan transaksi.</li>
                                    </ol>
                                </TabItem>
                                <TabItem value="pageFPX" label="FPX">               
                                    <h2 className="print-only">Pembayaran melalui FPX</h2>
                                    <ol>
                                        <li>Pilih butang <b>Online Banking</b> atau <b>Online Banking (B2B)</b>.</li>
                                        <ExpandableImage
                                                src={imgKaedahBayarFPX}
                                                alt="Pilihan Kaedah Pembayaran"
                                                caption="Pilihan Kaedah Pembayaran" 
                                                width={400}
                                        /> 
                                       <li>Pilih bank yang dikehendaki.</li>
                                       <li>Klik butang <b>Pay</b> untuk meneruskan pembayaran.</li>
                                       <li>Anda akan diarahkan ke laman bank yang dipilih.</li>
                                       <li>Log masuk ke akaun perbankan internet dan lengkapkan proses pembayaran.</li>
                                       <li>Setelah pembayaran berjaya, anda akan diarahkan semula ke sistem MYKKP dan status pembayaran akan dikemaskini.</li>
                                            <Admonition type="warning">
                                               <p><b>Bagi pembayaran melalui Online Banking (B2B):</b></p>
                                               <ul><li>Pembayaran memerlukan kelulusan daripada pihak organisasi atau syarikat anda terlebih dahulu. </li></ul>
                                               <ul><li>Status pembayaran akan mengambil masa sehingga 24 jam untuk dikemaskini dalam sistem MYKKP selepas kelulusan diberikan. </li></ul>  
                                            </Admonition>
                                    </ol>
                
                                </TabItem>
                    </Tabs>
                </div>

                <li>Selepas pembayaran berjaya, klik butang <b>Lihat Resit</b> untuk melihat salinan resit sebagai bukti pembayaran.</li>
                <ExpandableImage
                    src={imgResit}
                    alt="Halaman Status Bayaran"
                    caption="Halaman Status Bayaran" 
                />                
                <li>Maklumat resit akan dipaparkan pada halaman tab baru.</li>

            </ol>
        </div>
    );
}

