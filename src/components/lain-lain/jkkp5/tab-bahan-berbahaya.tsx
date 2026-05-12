import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';


interface BahanBerbahayaProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    tambahImgSrc?: string;
    yaImgSrc?: string;
    tidakImgSrc?: string;
}

export default function BahanBerbahaya({
    tabNumber,
    tabName,
    tabImgSrc,
    tambahImgSrc,
    yaImgSrc,
    tidakImgSrc,
}: BahanBerbahayaProps) {
    return (
        <div>
            <h4>Tab {tabNumber}: {tabName}</h4>

            <ol>
                <li>Halaman <b>Tab {tabNumber}: {tabName}</b> akan dipaparkan seperti di bawah.</li>
            </ol>

            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={650}
            />

            <ol start={2}>
                <li>Klik butang <b>Tambah</b> untuk melakukan pengisian kuantiti bahan berbahaya di pepasangan.</li>
                <li><i>Pop-up</i> maklumat bahan berbahaya akan dipaparkan seperti di bawah.</li>
            </ol>

            <ExpandableImage
                src={tambahImgSrc}
                alt="Pop-up Maklumat Bahan Berbahaya"
                caption={
                    <>
                        <i>Pop-up</i> Maklumat Bahan Berbahaya
                    </>
                }
                width={450}
            />

            <ol start={4}>
                <li>Klik butang radio <b>Ya</b>, maklumat akan dipaparkan seperti di bawah.</li>
            </ol>

            <ExpandableImage
                src={yaImgSrc}
                alt="Maklumat Bahan Berbahaya - Ya"
                caption="Maklumat Bahan Berbahaya - Ya"
                width={450}
            />

            <ol start={5}>
                <li>Klik butang radio <b>Tidak</b>, maklumat akan dipaparkan seperti di bawah.</li>
            </ol>

            <ExpandableImage
                src={tidakImgSrc}
                alt="Maklumat Bahan Berbahaya - Tidak"
                caption="Maklumat Bahan Berbahaya - Tidak"
                width={450}
            />

            <ol start={6}>
                <li>Sila pastikan medan ruangan wajib telah diisi.</li>
                <li>Klik butang <b>Simpan</b> untuk menyimpan maklumat.</li>
                <li>Klik butang <b>Kemaskini</b> untuk mengemaskini maklumat yang telah berjaya disimpan.</li>
                <li>Klik butang <b>Hapus</b> untuk menghapuskan maklumat yang telah diisi.</li>
                <Admonition type="info" >
                    <p>
                        Secara ringkasnya, MHI, NMHI dan NTC ditentukan berdasarkan jumlah bahan
                        berbahaya yang digunakan atau disimpan oleh sesuatu aktiviti industri.
                    </p>

                    <ul>
                        <li><strong>MHI:</strong> Sama atau melebihi kuantiti ambang.</li>
                        <li><strong>NMHI:</strong> Kurang daripada kuantiti ambang tetapi melebihi 10%.</li>
                        <li><strong>NTC:</strong> Sama atau kurang daripada 10% kuantiti ambang.</li>
                    </ul>
                </Admonition>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}