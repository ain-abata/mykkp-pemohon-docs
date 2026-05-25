import React, { useState } from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';


interface TabMaklumatPemberitahuProps {
    tabNumber: number;
    tabName: string;
    ohdImgSrc?: string;
    majikanImgSrc?: string;
    maklumatIndSrc?: string;
    popupImgSrc?: string;
}

export default function TabMaklumatPemberitahu({
    tabNumber,
    tabName,
    ohdImgSrc,
    majikanImgSrc,
    maklumatIndSrc,
    popupImgSrc,

}: TabMaklumatPemberitahuProps) {
    const [activeTab, setActiveTab] = useState<'ohd' | 'majikan'>('ohd');

    return (
        <div>
            <h4>Tab {tabNumber}: {tabName}</h4>
            <ol>
                <li>
                    Pada bahagian <b>Jenis Pemberitahuan</b>, pilih salah satu pilihan berikut:
                    <ol type="a">
                        <li>Pilih butang radio <b>Pengamal Perubatan</b> sekiranya pemberitahuan dibuat oleh OHD atau pengamal perubatan.</li>
                        <li>Pilih butang radio <b>Majikan</b> sekiranya pemberitahuan dibuat oleh majikan atau wakil majikan.</li>
                    </ol>
                </li>
            </ol>

            <div className="inner-tabs">
                <button
                    type="button"
                    className={activeTab === 'ohd' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('ohd')}
                >
                    OHD / Pengamal Perubatan
                </button>

                <button
                    type="button"
                    className={activeTab === 'majikan' ? 'inner-tab active' : 'inner-tab'}
                    onClick={() => setActiveTab('majikan')}
                >
                    Majikan
                </button>
            </div>

            {activeTab === 'ohd' && (
                <div>
                    <ExpandableImage
                        src={ohdImgSrc}
                        alt="Maklumat Pemberitahu OHD atau Pengamal Perubatan"
                        caption="Maklumat Pemberitahu: OHD / Pengamal Perubatan"
                        width={650}
                    />

                    <ol type="a">
                        <li>
                            Isi maklumat yang berkaitan seperti <b>Nama OHD/Pengamal Perubatan</b>,
                            <b> No. Telefon OHD/Pengamal Perubatan</b>, <b>No. Occupational Health Doctor (OHD)</b>,
                            <b> Emel OHD/Pengamal Perubatan</b> dan <b>No. Malaysia Medical Council (MMC)</b>.
                        </li>
                    </ol>
                </div>
            )}

            {activeTab === 'majikan' && (
                <div>
                    <ExpandableImage
                        src={majikanImgSrc}
                        alt="Maklumat Pemberitahu Majikan"
                        caption="Maklumat Pemberitahu: Majikan"
                        width={650}
                    />

                    <ol type="a">
                        <li>
                            Semak atau isi maklumat yang berkaitan seperti <b>Nama Pemberitahu</b>,
                            <b> Emel Pemberitahu</b> dan <b>No. Telefon</b>.
                        </li>
                    </ol>
                </div>
            )}
            <ol start={2}>
                <li>Pada bahagian <b>Maklumat Industri</b> dipaparkan.</li>
            </ol>

            <ExpandableImage
                src={maklumatIndSrc}
                alt="Maklumat Industri"
                caption="Maklumat Industri"
                width={650}
            />

            <ol start={3}>
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