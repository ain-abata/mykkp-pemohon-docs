import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
    return (
        <div>
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
            <div>
                <Tabs>
                    <TabItem value="sedangDiproses" label="Sedang Diproses" default>
                        <h4>Tab Sedang Diproses</h4>
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
                    </TabItem>
                    <TabItem value="deraf" label="Deraf" default>

                        <h4>Tab Deraf</h4>
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
                    </TabItem>
                    <TabItem value="lulus" label="Lulus" default>

                        <h4>Tab Lulus</h4>
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
                    </TabItem>
                    <TabItem value="batal/tolak" label="Batal/Tolak" default>

                        <h4>Tab Batal Tolak</h4>
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
                    </TabItem>
                    <TabItem value="mpengurusanDeraf" label="Pengurusan Deraf" default>

                        <h4>Tab Pengurusan Deraf</h4>
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
                    </TabItem>
                </Tabs>
            </div>

            <Admonition type="info">
                Menu <b>Senarai Permohonan</b> digunakan untuk menyemak status permohonan,
                melihat permohonan yang sedang diproses, deraf, lulus serta permohonan yang dibatalkan atau ditolak.
            </Admonition>
        </div>
    );
}