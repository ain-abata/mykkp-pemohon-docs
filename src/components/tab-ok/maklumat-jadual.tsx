/**
 * 
Copy below 👇:
<OkMaklumatJadual
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Maklumat Kelayakan Akademik"
    tabImgSrc={imgOkMaklumatKelayakanAkademik}
    tambahImgSrc={imgOkTambahMaklumatKelayakanAkademik} />

Explanation of alphabetNumbering:
- Isi dengan huruf kecil untuk penomboran abjad pada setiap tab. Contoh: a, b, c, ...

Explanation of tabNumber:
- Isi dengan angka untuk penomboran tab. Contoh: 1, 2, 3, ...

Explanation of tabName:
- Isi dengan nama modul yang dipaparkan pada tab. Contoh: Kelayakan Akademik, Pengalaman Kerja, ...

Explanation of tabImgSrc and tambahImgSrc:
- Import sumber gambar yang ingin dipaparkan pada tab.
- Contoh:
    import imgOkMaklumatKelayakanAkademik from '@site/assets/images/orang-kompeten/tab_maklumat_kelayakan_akademik.png';
                    👇
    tabImgSrc={imgOkMaklumatKelayakanAkademik}

    Image no zoom
    <div className="doc-image">
                <img src={tabImgSrc} />
                <p>Tab {tabNumber}: {tabName}</p>
            </div>

<div className="doc-image">
                <img src={tambahImgSrc} style={{ maxWidth: 500 }} />
                <p><i>Pop-up</i> Tambah Maklumat</p>
            </div>
*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '../common/ExpandableImage';

interface OkMaklumatJadualProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    tambahImgSrc?: string;
}

export default function OkMaklumatJadual({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    tambahImgSrc,
}: OkMaklumatJadualProps) {
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
                <li>Pengemaskinian {tabName} boleh dilakukan seperti berikut:</li>
            </ol>
            <ul>
                <li><b>Tambah Maklumat:</b></li>

                <ol>
                    <li>Klik butang <b>Tambah</b> dan <i>pop-up</i> akan dipaparkan.</li>
                    <li>Isi maklumat pada medan ruangan yang berkaitan.</li>
                    <li>Klik butang <b>Simpan</b> untuk menyimpan maklumat yang telah diisi.</li>
                </ol>
            </ul>

            <ExpandableImage
                src={tambahImgSrc}
                alt="Pop-up Tambah Maklumat"
                caption={
                    <>
                        <i>Pop-up</i> Tambah Maklumat
                    </>
                }
                width={650}
            />
            <ul>
                <li><b>Kemaskini Maklumat:</b></li>

                <ol>
                    <li>Pilih maklumat yang ingin dikemaskini dan klik butang <b>Kemaskini.</b></li>
                    <li>Kemaskini maklumat pada <i>pop-up</i> yang dipaparkan.</li>
                </ol>

                <li><b>Hapus Maklumat:</b></li>
                <ol>
                    <li>Pilih maklumat yang ingin dihapuskan dan klik butang <b>Hapus</b>.</li>
                    <li>Klik butang <b>Ya</b> pada <i>confirmation pop-up</i> yang dipaparkan.</li>
                </ol>
            </ul>
            <ol start={2}>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}