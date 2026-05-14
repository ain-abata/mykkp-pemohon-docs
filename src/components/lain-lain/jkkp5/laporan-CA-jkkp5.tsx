import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LaporanCAJkkp5Props {
    senaraiJkkp5ImgSrc?: string;
    butangConsAnalysisImgSrc?: string;
    tabConsAnalysisImgSrc?: string;
    popupPilihanBahanBerbahayaImgSrc?: string;
    senaraiBahanBerbahayaImgSrc?: string;
    popupMaklumatImpakImgSrc?: string;
    gambarJadualConsequencesAnalysisImgSrc?: string;
    mesejHantarImgSrc?: string;
}

export default function LaporanCAJkkp5({
    senaraiJkkp5ImgSrc,
    butangConsAnalysisImgSrc,
    tabConsAnalysisImgSrc,
    popupPilihanBahanBerbahayaImgSrc,
    senaraiBahanBerbahayaImgSrc,
    popupMaklumatImpakImgSrc,
    gambarJadualConsequencesAnalysisImgSrc,
    mesejHantarImgSrc,
}: LaporanCAJkkp5Props) {
    return (
        <div>
            <ol>
                <li>
                    Halaman <b>Pemberitahuan Aktiviti Industri - JKKP5</b> akan terpapar seperti di bawah.
                    {senaraiJkkp5ImgSrc && (
                        <ExpandableImage src={senaraiJkkp5ImgSrc}
                            alt="Senarai Pemberitahuan Aktiviti Industri - JKKP5"
                            caption="Senarai Pemberitahuan Aktiviti Industri - JKKP5"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    Klik butang <b>Consequences Analysis</b>.
                    {butangConsAnalysisImgSrc && (
                        <ExpandableImage src={butangConsAnalysisImgSrc}
                            alt="Butang Consequences Analysis"
                            caption="Butang Consequences Analysis"
                            width={650} />
                    )}
                </li>

                <li>
                    Halaman <b>Consequences Analysis</b> akan terpapar pada tab baru.
                    {tabConsAnalysisImgSrc && (
                        <ExpandableImage src={tabConsAnalysisImgSrc}
                            alt="Tab Consequences Analysis"
                            caption="Tab Consequences Analysis"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    Keperluan <b>Consequences Analysis</b> akan default <b>Ya</b> jika klasifikasi pepasangan adalah <b>MHI</b>.
                </li>

                <li>
                    Klik butang <b>+ Tambah Bahan</b>.
                </li>

                <li>
                    <i>Pop-up</i> <b>Pilihan Bahan Berbahaya</b> akan terpapar seperti di bawah.
                    {popupPilihanBahanBerbahayaImgSrc && (
                        <ExpandableImage src={popupPilihanBahanBerbahayaImgSrc}
                            alt="Pop-up Pilihan Bahan Berbahaya"
                            caption={
                                <>
                                    <i>Pop-up</i> Pilihan Bahan Berbahaya
                                </>
                            }
                            width={400}
                        />
                    )}
                </li>

                <li>
                    Klik butang <b>Carian</b> jika terdapat banyak senarai bahan berbahaya bagi memudahkan penambahan bahan berbahaya.

                    <Admonition type="info">
                        Butang <b>Carian</b> boleh digunakan untuk mencari bahan berbahaya dengan lebih mudah sekiranya senarai bahan yang dipaparkan adalah banyak.
                    </Admonition>
                </li>

                <li>
                    Klik butang <b>checkbox</b> pada pilihan senarai bahan.
                </li>

                <li>
                    Klik butang <b>Pilih</b>.
                </li>

                <li>
                    Jadual <b>Senarai Bahan Berbahaya</b> akan terpapar seperti di bawah.
                    {senaraiBahanBerbahayaImgSrc && (
                        <ExpandableImage src={senaraiBahanBerbahayaImgSrc}
                            alt="Jadual Senarai Bahan Berbahaya"
                            caption="Jadual Senarai Bahan Berbahaya"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    Klik butang <b>Pengisian Impak</b> pada jadual <b>Consequences Analysis</b>.
                </li>

                <li>
                    Pop-up maklumat <b>Pengisian Maklumat Impak</b> akan terpapar seperti di bawah.
                    {popupMaklumatImpakImgSrc && (
                        <ExpandableImage src={popupMaklumatImpakImgSrc} alt="Pop-up Pengisian Maklumat Impak" />
                    )}
                </li>

                <li>
                    Maklumat nilai <b>Immediately Dangerous to Life or Health (IDLH)</b> akan terpapar jika terdapat pengisian yang telah diisi pada jenis impak <b>Toxic Dispersion Impact</b>.

                    <Admonition type="info">
                        Maklumat nilai <b>Immediately Dangerous to Life or Health (IDLH)</b> hanya akan dipaparkan sekiranya pengguna telah mengisi maklumat bagi jenis impak <b>Toxic Dispersion Impact</b>.
                    </Admonition>
                </li>

                <li>
                    Sila pastikan semua maklumat telah diisi sebelum klik butang <b>Simpan</b>.
                </li>

                <li>
                    Klik butang <b>Simpan</b>.
                </li>

                <li>
                    Klik butang <b>Ya</b> untuk teruskan pada pop-up makluman.
                </li>

                <li>
                    Pop-up makluman akan terpapar seperti di bawah.
                </li>

                <li>
                    Klik butang <b>Tutup</b>.
                </li>

                <li>
                    Halaman jadual <b>Consequences Analysis</b> akan terpapar seperti di bawah.
                    {gambarJadualConsequencesAnalysisImgSrc && (
                        <ExpandableImage src={gambarJadualConsequencesAnalysisImgSrc}
                            alt="Jadual Consequences Analysis"
                            caption="Jadual Consequences Analysis"
                            width={650}
                        />
                    )}
                </li>

                <li>
                    Klik butang <b>Kemaskini Pengisian Impak</b> jika perlu pengemaskinian semula.
                </li>

                <li>
                    Sila pastikan maklumat <b>Pengisian Risk Rating</b> telah diisi sebelum melakukan penghantaran.
                </li>

                <li>
                    Klik butang <b>Simpan</b> untuk simpan maklumat yang telah diisi.
                </li>

                <li>
                    Klik butang <b>Hantar</b>.
                </li>

                <li>
                    Pop-up makluman akan terpapar seperti di bawah.
                    {mesejHantarImgSrc && (
                        <ExpandableImage src={mesejHantarImgSrc}
                            alt="Mesej Hantar Consequences Analysis"
                            caption="Mesej Hantar Consequences Analysis"
                            width={650} />
                    )}
                </li>

                <li>
                    Klik butang <b>Tutup</b>.
                </li>
            </ol>
        </div>
    );
}