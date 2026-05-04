/**
 * Copy below 👇:

import DokumenSokongan from '@site/src/components/loji/tab/dokumen-sokongan';

<DokumenSokongan
    alphabetNumbering="D"
    tabNumber={4}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgDokumenSokongan} />

 */

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import uploadIcon from '@site/assets/images/ikon_muat_naik.png';

interface DokumenSokonganProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
}

export default function DokumenSokongan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: DokumenSokonganProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
                
            <ol>
                <li>Klik butang <img src={uploadIcon} style={{width: 15}} /> untuk memuat naik dokumen yang berkenaan pada medan bersyarat <b>Wajib</b>.</li>
                <li>Isi medan <b>Diskripsi</b> dan klik butang <b><i>Choose File</i></b> untuk memilih dokumen.</li>
            </ol>
            
            <Admonition type="warning">
                <ol>
                    <li>Pastikan dokumen yang dimuat naik adalah mengikut format yang ditetapkan.</li>
                    <li>Pastikan saiz dokumen tidak melebihi 20MB.</li>
                    <li>Sila pastikan nama lampiran tidak mengandungi simbol. <b>[Contoh: ! @ # $ % ^ & * ( ) - + dll...]</b></li>
                </ol>
            </Admonition>

            <ol start={3}>
                <li>Klik butang <b>Simpan</b>. <i>Pop-up</i> mesej berjaya akan dipaparkan dan klik butang <b>OK</b>.</li>
                <li>Dokumen yang berjaya dimuat naik akan dipaparkan dalam jadual <b>Senarai Dokumen</b>.</li>
            </ol>

            <Admonition type="info">
                Bagi <b>menghapuskan dokumen</b> yang telah dimuat naik 👉 Klik butang <b>Hapus Fail</b> pada <b>Jadual Senarai Dokumen</b>.
            </Admonition>

            <ol start={5}>
                <li>Klik butang <b>Tutup</b>. Pada kolum <b> Bil. Fail</b> akan menunjukkan jumlah bilangan fail yang telah dimuat naik.</li>
                <li>Setelah selesai muat naik semua dokumen yang diwajibkan, klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}