import React, { useState } from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';


interface TabMaklumatPenyakitProps {
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    maklumatHospSrc?: string;
    popupImgSrc?: string;
}

export default function TabMaklumatPenyakit({
    tabNumber,
    tabName,
    tabImgSrc,
    maklumatHospSrc,
    popupImgSrc,

}: TabMaklumatPenyakitProps) {
    const [activeTab, setActiveTab] = useState<'ohd' | 'majikan'>('ohd');

    return (
        <div>
            <h4>B. Tab {tabNumber}: {tabName}</h4>
            <ol>
                <li>
                    Pada bahagian <b>Data Keracunan Pekerjaan & Penyakit Pekerjaan</b>
                    <ExpandableImage
                        src={tabImgSrc}
                        alt={`Tab ${tabNumber}: ${tabName}`}
                        caption={`Tab ${tabNumber}: ${tabName}`}
                        width={650}
                    />
                    <ol type="a">
                        <li>Isi maklumat pada ruangan yang disediakan.</li>
                    </ol>
                </li>
            </ol>

            <ol start={3}>
                <li>Pada Maklumat Hospital/Klinik yang dirawat.</li>


                <ExpandableImage
                    src={maklumatHospSrc}
                    alt="Maklumat Industri"
                    caption="Maklumat Industri"
                    width={650}
                />
                <li>Pilih butang radio <b>Tempat kerja Berdaftar</b> sekiranya tempat kerja sudah berdaftar JKKP.</li>
                <li>Pilih butang radio <b>Pendaftaran Tempat Kerja Baharu</b> sekiranya tempat kerja belum berdaftar.</li>
                <li>Klik butang <b>Carian</b> untuk memilih organisasi.</li>
                <li><i>Pop-up</i> carian organisasi akan dipaparkan.</li>
                <li>Pilih premis yang dikehendaki dan klik butang <b>Pilih</b>.</li>
            </ol>
            <ExpandableImage
                src={popupImgSrc}
                alt="Pop-up Carian Organisasi"
                caption={
                    <>
                        <i>Pop-up</i> Carian Organisasi
                    </>
                }
                width={650}
            />
            <ol start={8}>
                <li>Isi maklumat yang dikehendaki pada ruangan yang disediakan.</li>
                <li>Jika ingin membatalkan pilihan, klik butang <b>Batal Pemilihan Organisasi</b>.</li>
            </ol>
            <Admonition type="tip">
                Organisasi yang dipilih untuk pemberitahuan akan dipaparkan.
            </Admonition>
            <ol start={10}>
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
        </div>
    );
}