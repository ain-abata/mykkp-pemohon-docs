import React from 'react';
import ExpandableImage from '../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';


interface OkMaklumatCepProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    tambahImgSrc?: string;
    uploadImgSrc?: string;
}

export default function OkMaklumatCep({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    tambahImgSrc,
    uploadImgSrc,
}: OkMaklumatCepProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>

            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={650}
            />

            <ol>
                <li>Pengemaskinian maklumat CEP boleh dilakukan seperti berikut:</li>
                <li>
                    Klik butang <b>Sila klik disini untuk mengisi maklumat CEP</b>.
                </li>
                <li>
                    <i>Pop-up</i> Jadual CEP akan dipaparkan.
                </li>
                <ExpandableImage
                    src={tambahImgSrc}
                    alt="Pop-up Tambah Maklumat CEP"
                    caption={
                        <>
                            <i>Pop-up</i> Jadual CEP
                        </>
                    }
                    width={450}
                />
                <li>
                    Klik butang <b>Tambah Baru</b>.
                </li>
                <li>
                    Isi maklumat pada medan ruangan yang berkaitan dan klik butang <b>Hantar</b>.
                </li>
                <li>
                    Skrol ke bahagian bawah dan klik butang <b>Urus Dokumen</b>.
                </li>
                <ol>
                    <li>Klik butang <b>Tambah Dokumen</b> untuk memuat naik dokumen <b>PDF</b> yang berkenaan pada medan bersyarat <b>Wajib</b>.</li>
                    <li>Isi medan <b>Diskripsi</b> dan klik butang <b><i>Choose File</i></b> untuk memilih dokumen.</li>
                    <li>Klik butang <b>Simpan</b>. <i>Pop-up</i> mesej berjaya akan dipaparkan dan klik butang <b>OK</b>.</li>
                    <li>Dokumen yang berjaya dimuat naik akan dipaparkan dalam <b>Jadual Senarai Dokumen</b></li>
                    <li>Klik butang <b>Tutup</b>. Pada kolum <b> Bil. Fail</b> akan menunjukkan jumlah bilangan fail yang telah dimuat naik.</li>

                    <Admonition type="warning">
                        <ol>
                            <li>Pastikan dokumen yang dimuat naik adalah mengikut format yang ditetapkan.</li>
                            <li>Pastikan saiz dokumen tidak melebihi 20MB.</li>
                            <li>Sila pastikan nama lampiran tidak mengandungi simbol. <b>[Contoh: ! @ # $ % ^ & * ( ) - + dll...]</b></li>
                        </ol>
                    </Admonition>
                    <Admonition type="info">
                        Bagi <b>menghapuskan dokumen</b> yang telah dimuat naik 👉 Klik butang <b>Hapus Fail</b> pada <b>Jadual Senarai Dokumen</b>.
                    </Admonition>

                </ol>
                <li>
                    Klik butang <b>Seterusnya</b>.
                </li>
            </ol>
        </div>
    );
}