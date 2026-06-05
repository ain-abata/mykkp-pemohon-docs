import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface LangkahPembayaranProps {
    stepNumber: number;
    pembayaranImgSrc?: string;
}

export default function LangkahPembayaran({
    stepNumber,
    pembayaranImgSrc,
}: LangkahPembayaranProps) {
    const [activeTab, setActiveTab] = useState<
        'bilBelumBayar' | 'bilDahBayar' | 'resit'
    >('bilBelumBayar');
    const pembayaranFiUrl = useBaseUrl('docs/orang-kompeten/pembayaran-fi');

    return (
        <div>
            <ol>
                <li>Pilih menu yang betul sama ada <b>Kilang/Jentera</b> atau <b>OYK</b>.</li>
                <li>Klik menu <b>Pembayaran</b>.</li>
                <li>Skrin <b>Pembayaran</b> akan dipaparkan seperti di bawah.</li>
                <li>
                    Halaman pembayaran memaparkan tiga tab iaitu <b>Bil Belum Bayar</b>,
                    <b> Bil Dah Bayar</b> dan <b>Resit</b>.
                </li>
            </ol>

            <ExpandableImage
                src={pembayaranImgSrc}
                alt="Laman Pembayaran"
                caption="Laman Pembayaran"
                width={650}
            />
            <div>
                <Tabs>
                    <TabItem value="belumDilaksanakan" label="Pembayaran Belum Dilaksanakan" default>

                        <h4>Tab Pembayaran Belum Dilaksanakan</h4>
                        <ol>
                            <li>Klik tab <b>Pembayaran Belum Dilaksanakan</b>.</li>
                            <li>
                                Pilih <b>Kategori Carian</b> seperti <b>No. Rujukan</b>,
                                <b> Tarikh Permohonan</b>, <b>Nama</b>, <b>Maklumat Bil</b>,
                                <b> Amaun (RM)</b> atau <b>Semua</b>.
                            </li>
                            <li>Masukkan maklumat pada medan <b>Carian</b>.</li>
                            <li>Klik butang <b>Carian</b>.</li>
                            <li>Klik butang <b>Lihat</b> untuk melihat <b>Lampiran Butiran Sebut Harga</b>.</li>
                            <li>Klik butang <b>Bayar</b>untuk membuat pembayaran.</li>
                        </ol>
                    </TabItem>
                    <TabItem value="telahDibayar" label="Telah Dibayar" default>

                        <h4>Tab Bil Telah Dibayar</h4>
                        <ol>
                            <li>Klik tab <b>Bil Telah Bayar</b>.</li>
                            <li>
                                Pilih <b>Kategori Carian</b> seperti <b>No. Rujukan</b>,
                                <b> Tarikh Permohonan</b>, <b>Nama</b>, <b>Maklumat Bil</b>,
                                <b> Amaun (RM)</b> atau <b>Semua</b>.
                            </li>
                            <li>Masukkan maklumat pada medan <b>Carian</b>.</li>
                            <li>Klik butang <b>Carian</b>.</li>
                            <li>Klik butang <b>Lihat Bil</b>untuk melihat lampiran bil.</li>
                        </ol>
                    </TabItem>
                    <TabItem value="Resit" label="Resit" default>

                        <h4>Resit</h4>
                        <ol>
                            <li>Klik tab <b>Resit</b>.</li>
                            <li>
                                Pilih <b>Kategori Carian</b> seperti <b>No. Resit</b>,
                                <b> Tarikh Resit</b>, <b>No. Rujukan/No. Bil</b>,
                                <b> Kaedah Pembayaran</b>, <b>Nama</b> atau <b>Jumlah (RM)</b>.
                            </li>
                            <li>Masukkan maklumat pada medan <b>Carian</b>.</li>
                            <li>Klik butang <b>Carian</b>.</li>
                            <li>Klik butang <b>Lihat Resit</b>untuk melihat lampiran resit.</li>

                        </ol>
                    </TabItem>
                </Tabs>
            </div>


            <Admonition type="info">
                <p>
                    Untuk mengetahui dengan lebih lanjut mengenai 👉{' '}
                    <b>
                        <Link to={pembayaranFiUrl}>
                            Cara Pembayaran Fi
                        </Link>
                    </b>.
                </p>
            </Admonition>
        </div>
    );
}