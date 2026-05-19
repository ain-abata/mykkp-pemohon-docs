
import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

import iconMuatNaik from '@site/assets/images/orang-kompeten/ikon_muat_naik.png';

interface LaporanDOSOJkkp5Props {
    tabName: string;

    senaraiPelaksanaanJkkp5ImgSrc?: string;
    butangDosoImgSrc?: string;
    popupDosoImgSrc?: string;
    tabDosoImgSrc?: string;
    pemberitahuanImgSrc?: string;
    mesejHantarImgSrc?: string;
}

export default function LaporanDOSOJkkp5({
    tabName,

    senaraiPelaksanaanJkkp5ImgSrc,
    butangDosoImgSrc,
    popupDosoImgSrc,
    tabDosoImgSrc,
    pemberitahuanImgSrc,
    mesejHantarImgSrc,
}: LaporanDOSOJkkp5Props) {
    return (
        <div>
            <ol>
                <li>
                    Halaman <b>Pemberitahuan Aktiviti Industri - JKKP5</b> akan terpapar seperti di bawah.
                    {senaraiPelaksanaanJkkp5ImgSrc && (
                        <ExpandableImage
                            src={senaraiPelaksanaanJkkp5ImgSrc}
                            alt="Senarai Pemberitahuan Aktiviti Industri - JKKP5"
                            caption="Senarai Pemberitahuan Aktiviti Industri - JKKP5"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    Klik butang <b>DOSO</b>.
                    {butangDosoImgSrc && (
                        <ExpandableImage
                            src={butangDosoImgSrc}
                            alt="Butang DOSO"
                            caption="Butang DOSO"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    <i>Pop-up</i> <b>DOSO</b> akan terpapar seperti di bawah.
                    {popupDosoImgSrc && (
                        <ExpandableImage
                            src={popupDosoImgSrc}
                            alt="Pop-up DOSO"
                            caption={
                                <>
                                    <i>Pop-up</i> DOSO
                                </>
                            }
                            width={450}
                        />
                    )}
                </li>

                <li>
                    Klik <b>{tabName}</b>.
                </li>

                <li>
                    Halaman <b>{tabName}</b> akan terpapar pada tab baru.
                    {tabDosoImgSrc && (
                        <ExpandableImage
                            src={tabDosoImgSrc}
                            alt={`Tab ${tabName}`}
                            caption={`Tab ${tabName}`}
                            width={650}
                        />
                    )}
                </li>
<li>
                    Muat naik dokumen yang berkaitan mengikut langkah-langkah di bawah:

                    <ol>
                        <li>
                            Klik butang{' '}
                            <img
                                src={iconMuatNaik}
                                style={{ width: 15 }}
                                alt="Ikon muat naik"
                            />{' '}
                            untuk memuat naik dokumen <b>PDF</b> yang berkenaan pada medan bersyarat <b>Wajib</b>.
                        </li>

                        <li>
                            Isi medan <b>Diskripsi</b> dan klik butang <b><i>Choose File</i></b> untuk memilih dokumen.
                        </li>

                        <li>
                            Klik butang <b>Simpan</b>. <i>Pop-up</i> mesej berjaya akan dipaparkan dan klik butang <b>OK</b>.
                        </li>

                        <li>
                            Dokumen yang berjaya dimuat naik akan dipaparkan dalam <b>Jadual Senarai Dokumen</b>.
                        </li>

                        <li>
                            Klik butang <b>Tutup</b>. Pada kolum <b>Bil. Fail</b> akan menunjukkan jumlah bilangan fail yang telah dimuat naik.
                        </li>
                    </ol>

                    <Admonition type="warning">
                        <ol>
                            <li>Pastikan dokumen yang dimuat naik adalah mengikut format yang ditetapkan.</li>
                            <li>Pastikan saiz dokumen tidak melebihi 20MB.</li>
                            <li>
                                Sila pastikan nama lampiran tidak mengandungi simbol.{' '}
                                <b>[Contoh: ! @ # $ % ^ & * ( ) - + dll...]</b>
                            </li>
                        </ol>
                    </Admonition>

                    <Admonition type="info">
                        Bagi <b>menghapuskan dokumen</b> yang telah dimuat naik 👉 Klik butang <b>Hapus Fail</b> pada <b>Jadual Senarai Dokumen</b>.
                    </Admonition>
                </li>
                <li>
                    Pada bahagian <b>Pemberitahuan</b>, pastikan semua medan wajib diisi.
                    {pemberitahuanImgSrc && (
                        <ExpandableImage
                            src={pemberitahuanImgSrc}
                            alt="Bahagian Pemberitahuan DOSO"
                            caption="Bahagian Pemberitahuan DOSO"
                            width={650}
                        />
                    )}
                </li>

                

                <li>
                    Klik butang <b>Simpan</b>.
                </li>

                <li>
                    Klik butang <b>Hantar</b>.
                </li>

                <li>
                    Pop-up makluman akan terpapar seperti di bawah.
                    {mesejHantarImgSrc && (
                        <ExpandableImage
                            src={mesejHantarImgSrc}
                            alt={`Mesej Hantar ${tabName}`}
                            caption={`Mesej Hantar ${tabName}`}
                            width={400}

                        />
                    )}
                </li>

                <li>
                    Klik butang <b>Tutup</b>.
                </li>
            </ol>
        </div>
    );
}