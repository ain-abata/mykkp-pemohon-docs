import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface SenaraiLojiProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    leftTableName: string;
    rightTableName: string;
    hasDropdownSearch?: boolean;
}

export default function SenaraiLoji({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    leftTableName,
    rightTableName,
    hasDropdownSearch,
}: SenaraiLojiProps) {
    return (
        <>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
            {hasDropdownSearch ? (
            <>
                <Admonition type="tip">
                Cara melakukan carian loji <b>(Jika Perlu)</b>:
                <ol style={{ listStyleType: 'lower-roman' }}>
                    <li>Klik pada pilihan <i>dropdown</i> <b>Kategori</b>.</li>
                    <li>Isi maklumat loji pada medan carian.</li>
                    <li>Klik butang <b>Carian Loji</b>.</li>
                </ol>
                </Admonition>

                <ol>
                <li>Klik butang <i>checkbox</i> pada loji yang dikehendaki di jadual <b>{leftTableName}</b>.</li>
                <li>Klik butang <b>Pilih Loji</b> dan loji yang dipilih akan masuk ke jadual <b>{rightTableName}</b>.</li>
                <li>Klik butang <b>Seterusnya</b>.</li>
                </ol>

                <Admonition type="info">
                    Klik butang <i>checkbox</i> pada loji di jadual <b>{rightTableName}</b> dan klik butang <b>Batal Pilihan Loji</b> jika ingin membatalkan pemilihan loji.
                </Admonition>
            </>
            ) : (
                <>
                <ol>
                    <li>Pilih negeri lokasi loji pada CF/eDoket semasa.</li>
                    <li>Isi <b>No. Pendaftaran Loji</b> pada medan carian dan klik butang <b>Tambah Loji</b>.</li>
                    <li>Klik butang <b>Pilih</b> pada <i>pop-up</i> <b>Maklumat Loji</b> yang dipaparkan.</li>
                    <li>Klik butang <b>Ya</b> dan loji berikut akan dipaparkan dalam jadual <b>Senarai Loji Untuk Pindah Hak Milik</b>.</li>
                </ol>

                <Admonition type="info">
                    Maksima loji yang boleh dipilih adalah 5 loji sahaja.
                </Admonition>
                </>
            )}
        </>
    );
}