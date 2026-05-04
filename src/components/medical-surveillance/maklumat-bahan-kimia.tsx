import React from 'react';
import ExpandableImage from '../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatBahanKimiaProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    popupImgSrc?: string;
}

export default function MaklumatBahanKimia({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    popupImgSrc,
}: MaklumatBahanKimiaProps) {
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
                <li>Isi maklumat <b>Bahan Kimia Berkaitan</b>.</li>
                <li>Klik butang radio <b>Jadual Bahan Kimia</b>.</li>
                <li>Klik <i>dropdown</i> <b>Kimia Individu</b>.</li>
                <li>Pilih <b>Kimia Individu</b> dalam senarai <i>dropdown</i> yang disediakan.</li>
                <li>
                    Klik <i>checkbox</i> yang berkaitan pada pilihan <b>Pemeriksaan Fizikal</b>, <b>Biological Monitoring/Biological Effect Monitoring</b> dan <b>Health Effects Monitoring</b>.
                </li>
                <li>
                    Klik butang radio <b>Lain-lain</b> jika bahan kimia terlibat tiada dalam jadual.
                </li>
                <li>Isi ruangan <b>Kimia Individu</b> yang disediakan.</li>
                <li>
                    Klik butang <b>Carian</b> pada mana-mana jenis pemeriksaan sama ada <b>Pemeriksaan Fizikal</b>, <b>Health Effects Monitoring</b> atau <b>Biological Monitoring / Biological Effect Monitoring</b>.
                </li>
                <li><i>Pop-up</i> akan dipaparkan mengikut jenis pemeriksaan yang dipilih.</li>
                <li>Klik pada <i>checkbox</i> bagi senarai yang berkaitan.</li>
                <li>Klik butang <b>Simpan</b>.</li>
            </ol>

            <ExpandableImage
                src={popupImgSrc}
                alt="Pop-up Maklumat Bahan Kimia"
                caption={
                    <>
                        <i>Pop-up</i> Maklumat Bahan Kimia
                    </>
                }
                width={650}
            />

            <ol start={12}>
                <li>
                    Jika ingin menghapuskan mana-mana nama ujian yang dipilih, klik butang <b>Kemaskini</b>.
                </li>
            </ol>
            <Admonition type="info">
                <ol>
                    <li><i>Pop-up</i> mengikut jenis pemeriksaan yang dipilih akan dipaparkan untuk mengemaskini maklumat.</li>
                    <li>Klik <i>checkbox</i> pada nama ujian yang dikehendaki.</li>
                    <li>Klik butang <b>Hapus</b> dan maklumat yang dipilih akan dipadamkan.</li>
                </ol>
            </Admonition>
            <ol start={13}>
                <li>
                    Jika selesai, klik butang <b>Seterusnya</b>.
                </li>                
            </ol>


        </div>
    );
}