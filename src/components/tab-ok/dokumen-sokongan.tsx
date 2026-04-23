/**
 * 
Copy below 👇:
<OkMaklumatSijil
    alphabetNumbering="a"
    tabNumber={1}
    tabName="Dokumen Sokongan"
    tabImgSrc={imgOkDokumenSokongan} />

Explanation of alphabetNumbering:
- Isi dengan huruf kecil untuk penomboran abjad pada setiap tab. Contoh: a, b, c, ...

Explanation of tabNumber:
- Isi dengan angka untuk penomboran tab. Contoh: 1, 2, 3, ...

Explanation of tabName:
- Isi dengan nama modul yang dipaparkan pada tab. Contoh: Kelayakan Akademik, Pengalaman Kerja, ...

Explanation of tabImgSrc:
- Import sumber gambar yang ingin dipaparkan pada tab.
- Contoh:
    import imgOkMaklumatAm from '@site/assets/images/orang-kompeten/ods-gred2/tab_maklumat_am.png';
                    👇
    tabImgSrc={imgOkMaklumatAm}
*/

import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import iconMuatNaik from '@site/assets/images/orang-kompeten/ikon_muat_naik.png';

interface OkDokumenSokonganProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
}

export default function OkDokumenSokongan({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
}: OkDokumenSokonganProps) {
  return (
    <div>
        <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
        <ExpandableImage
            src={tabImgSrc}
            alt={tabName}
            caption={'Tab ' + tabNumber + ': ' + tabName}
            width={450} />
        <ol>
            <li>Klik butang <img src={iconMuatNaik} style={{width: 15}} /> untuk memuat naik dokumen <b>PDF</b> yang berkenaan pada medan bersyarat <b>Wajib</b>.</li>
            <li>Isi medan <b>Diskripsi</b> dan klik butang <b><i>Choose File</i></b> untuk memilih dokumen.</li>
            <li>Klik butang <b>Simpan</b>. <i>Pop-up</i> mesej berjaya akan dipaparkan dan klik butang <b>OK</b>.</li>
            <li>Dokumen yang berjaya dimuat naik akan dipaparkan dalam <b>Jadual Senarai Dokumen</b></li>
            <li>Klik butang <b>Tutup</b>. Pada kolum <b> Bil. Fail</b> akan menunjukkan jumlah bilangan fail yang telah dimuat naik.</li>
        </ol>
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
    </div>
  );
}