import React from 'react';
import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface PembaharuanOkProps {
    stepNumber: number;
    pageName: string;
  moduleName: string;
    pageImgSrc?: string;
    tambahImgSrc?: string;
}

export default function PembaharuanOk({
    stepNumber,
    pageName,
      moduleName,

    pageImgSrc,
    tambahImgSrc,
}: PembaharuanOkProps) {
    return (
        <div className="step-card">
            <h3>Langkah {stepNumber}: Masuk Ke Halaman Pembaharuan {pageName}</h3>

            <ExpandableImage
                src={pageImgSrc}
                alt={`Halaman Menu Utama ${pageName}`}
                caption="Halaman Menu Utama"
                width={650}
            />

            <ol>
                <li>
                    Klik butang menu <b>Profil Saya</b> yang terdapat pada menu di sebelah kiri.
                </li>
                <li>
                    Klik butang sub-menu <b>Maklumat OK</b> yang terdapat dalam pilihan menu <b>Profil Saya</b>.
                </li>
                <Admonition type="tip">
                    Pastikan dashboard yang dipilih adalah dashboard <b>Orang Kompeten</b>.
                </Admonition>
                <li>
                    Halaman <b>Maklumat OK/Orang Terlatih</b> akan dipaparkan seperti di bawah.
                </li>
                <ExpandableImage
                    src={tambahImgSrc}
                    alt={`Halaman Maklumat OK ${pageName}`}
                    caption="Halaman Maklumat OK"
                    width={650}
                />
                <li>
                    Pada <b>Senarai Kompetensi Yang Diluluskan</b>, klik butang <b>Pembaharuan</b> untuk membuat permohonan pembaharuan bagi no. pendaftaran jenis <b>{moduleName}</b>.
                </li>
            </ol>



            <Admonition type="info">
                Halaman pembaharuan <b>{pageName}</b> akan dipaparkan pada tab baharu.
            </Admonition>
        </div>
    );
}