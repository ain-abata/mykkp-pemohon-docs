import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahSenaraiPermohonanProps {
    stepNumber: number;
    menuSenaraiPermohonanImgSrc?: string;
    sedangDiprosesImgSrc?: string;
    derafImgSrc?: string;
    lulusImgSrc?: string;
    batalTolakImgSrc?: string;
    pengurusanDerafImgSrc?: string;
}

export default function LangkahSenaraiPermohonan({
    stepNumber,
    menuSenaraiPermohonanImgSrc,
    sedangDiprosesImgSrc,
    derafImgSrc,
    lulusImgSrc,
    batalTolakImgSrc,
    pengurusanDerafImgSrc,
}: LangkahSenaraiPermohonanProps) {
    const [activeTab, setActiveTab] = useState<
        'sedangDiproses' | 'deraf' | 'lulus' | 'batalTolak' | 'pengurusanDeraf'
    >('deraf');

    return (
        <div>
            <h3>{stepNumber}. Laman Senarai Permohonan</h3>

            <ol>
                <li>Pilih menu yang betul sama ada <b>Kilang/Jentera</b> atau <b>OYK</b>.</li>
                <li>Klik menu <b>Senarai Permohonan</b>.</li>
                <li>Skrin <b>Senarai Permohonan</b> akan memaparkan beberapa tab.</li>
            </ol>

            <ExpandableImage
                src={menuSenaraiPermohonanImgSrc}
                alt="Senarai Permohonan"
                caption="Senarai Permohonan"
                width={450}
            />

            <div className="inner-tabs">
                <button
                    type="button"
                    className={activeTab === 'deraf' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('deraf')}
                >
                    Deraf
                </button>

                <button
                    type="button"
                    className={activeTab === 'sedangDiproses' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('sedangDiproses')}
                >
                    Sedang Diproses
                </button>
                <button
                    type="button"
                    className={activeTab === 'lulus' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('lulus')}
                >
                    Lulus
                </button>

                <button
                    type="button"
                    className={activeTab === 'batalTolak' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('batalTolak')}
                >
                    Batal/Tolak
                </button>

                <button
                    type="button"
                    className={activeTab === 'pengurusanDeraf' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('pengurusanDeraf')}
                >
                    Pengurusan Deraf
                </button>
            </div>

            {activeTab === 'sedangDiproses' && (
                <div>
                    <ExpandableImage
                        src={sedangDiprosesImgSrc}
                        alt="Tab Sedang Diproses"
                        caption="Tab Sedang Diproses"
                        width={650}
                    />

                    <ol>
                        <li>Tab <b>Sedang Diproses</b> akan dipaparkan.</li>
                        <li>
                            Pilih kategori carian seperti <b>No. Rujukan</b>, <b>Jenis Permohonan</b>,
                            <b>Status Permohonan</b>, <b>Nama Pegawai</b> atau <b>Nama Pemohon</b>.
                        </li>
                        <li>Masukkan maklumat pada medan carian.</li>
                        <li>Klik butang <b>Carian</b>.</li>
                        <li>Klik butang <b>Lihat Maklumat</b> untuk melihat permohonan yang dihantar.</li>
                    </ol>
                </div>
            )}

            {activeTab === 'deraf' && (
                <div>
                    <ExpandableImage
                        src={derafImgSrc}
                        alt="Tab Deraf"
                        caption="Tab Deraf"
                        width={650}
                    />

                    <ol>
                        <li>Tab <b>Deraf</b> akan dipaparkan.</li>
                        <li>
                            Pilih kategori carian seperti <b>Jenis Permohonan</b>, <b>Jenis OYK</b>,
                            <b>Tarikh Permohonan</b> atau <b>Status</b>.
                        </li>
                        <li>Masukkan maklumat pada medan carian.</li>
                        <li>Klik butang <b>Carian</b>.</li>
                        <li>Klik butang <b>Kemaskini</b> untuk meneruskan permohonan.</li>
                        <li>Klik butang <b>Hapus</b> untuk menghapuskan permohonan.</li>
                    </ol>
                </div>
            )}

            {activeTab === 'lulus' && (
                <div>
                    <ExpandableImage
                        src={lulusImgSrc}
                        alt="Tab Lulus"
                        caption="Tab Lulus"
                        width={650}
                    />

                    <ol>
                        <li>Tab <b>Lulus</b> akan dipaparkan.</li>
                        <li>
                            Pilih kategori carian seperti <b>No. Rujukan Permohonan</b>,
                            <b>Tarikh Lulus</b> atau <b>Tarikh Tamat</b>.
                        </li>
                        <li>Masukkan maklumat pada medan carian.</li>
                        <li>Klik butang <b>Carian</b>.</li>
                        <li>Klik butang <b>Lihat</b> untuk melihat permohonan.</li>
                        <li>
                            Klik butang <b>Lihat Dokumen</b> untuk memuat turun sijil OYK dan surat kelulusan.
                        </li>
                    </ol>
                </div>
            )}

            {activeTab === 'batalTolak' && (
                <div>
                    <ExpandableImage
                        src={batalTolakImgSrc}
                        alt="Tab Batal Tolak"
                        caption="Tab Batal/Tolak"
                        width={650}
                    />

                    <ol>
                        <li>Tab <b>Batal/Tolak</b> akan dipaparkan.</li>
                        <li>
                            Pilih kategori carian seperti <b>No. Rujukan Permohonan</b>,
                            <b>Tarikh Permohonan</b> atau <b>Tarikh Batal/Tolak</b>.
                        </li>
                        <li>Masukkan maklumat pada medan carian.</li>
                        <li>Klik butang <b>Carian</b>.</li>
                        <li>Klik butang <b>Lihat Maklumat</b> untuk melihat permohonan.</li>
                        <li>
                            Klik butang <b>Klon Permohonan</b> untuk memohon semula permohonan yang dibatalkan atau ditolak.
                        </li>
                    </ol>
                </div>
            )}
            {activeTab === 'pengurusanDeraf' && (
                <div>
                    <ExpandableImage
                        src={pengurusanDerafImgSrc}
                        alt="Tab Pengurusan Deraf"
                        caption="Tab Pengurusan Deraf"
                        width={650}
                    />

                    <ol>
                        <li>Tab <b>Pengurusan Deraf</b> akan dipaparkan.</li>
                        <li>
                            Pilih kategori carian seperti <b>No. Rujukan Permohonan</b>,
                            <b>Tarikh Permohonan</b> atau <b>Tarikh Batal/Tolak</b>.
                        </li>
                        <li>Masukkan maklumat pada medan carian.</li>
                        <li>Klik butang <b>Carian</b>.</li>
                        <li>Klik butang <b>Lihat Maklumat</b> untuk melihat permohonan.</li>
                    </ol>
                </div>
            )}
            <Admonition type="info">
                Menu <b>Senarai Permohonan</b> digunakan untuk menyemak status permohonan,
                melihat permohonan yang sedang diproses, deraf, lulus serta permohonan yang dibatalkan atau ditolak.
            </Admonition>
        </div>
    );
}