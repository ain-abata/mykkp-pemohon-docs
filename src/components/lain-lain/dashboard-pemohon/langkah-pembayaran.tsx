import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
            <h3>{stepNumber}. Laman Pembayaran</h3>

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

            <div className="inner-tabs">
                <button
                    type="button"
                    className={activeTab === 'bilBelumBayar' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('bilBelumBayar')}
                >
                    Pembayaran Belum Dilaksanakan
                </button>

                <button
                    type="button"
                    className={activeTab === 'bilDahBayar' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('bilDahBayar')}
                >
                    Bil Telah Bayar
                </button>

                <button
                    type="button"
                    className={activeTab === 'resit' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('resit')}
                >
                    Resit
                </button>
            </div>

            {activeTab === 'bilBelumBayar' && (
                <div>
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
                </div>
            )}

            {activeTab === 'bilDahBayar' && (
                <div>
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
                </div>
            )}

            {activeTab === 'resit' && (
                <div>
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
                </div>
            )}

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