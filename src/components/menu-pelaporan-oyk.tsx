import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahMaklumatOykProps {
  stepNumber: number;
  lamanPemohonImgSrc?: string;
  subMenuProfilImgSrc?: string;
  maklumatOykImgSrc?: string;
}

export default function LangkahMaklumatOyk({
  stepNumber,
  lamanPemohonImgSrc,
  subMenuProfilImgSrc,
  maklumatOykImgSrc,
}: LangkahMaklumatOykProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: Laman Maklumat OYK</h3>

      <ol>
        <li>Skrin <b>Pemohon</b> akan dipaparkan.</li>
        <li>Klik menu <b>Profil Saya</b> di sebelah kiri.</li>
      </ol>

      <ExpandableImage
        src={lamanPemohonImgSrc}
        alt="Laman Pemohon"
        caption="Laman Pemohon"
        width={650}
      />

      <ol start={3}>
        <li>Sub-menu <b>Profil Saya</b> akan dipaparkan.</li>
        <li>Klik pada sub-menu <b>Maklumat OYK</b>.</li>
      </ol>

      <ExpandableImage
        src={subMenuProfilImgSrc}
        alt="Sub-menu Profil Saya"
        caption="Sub-menu Profil Saya"
        width={650}
      />

      <ol start={5}>
        <li>Halaman <b>Maklumat OYK</b> akan dipaparkan.</li>
        <li>Skrol ke bawah dan pergi ke bahagian <b>Senarai Permohonan Yang Diluluskan</b>.</li>
        <li>Klik butang <b>Lihat Sijil</b> untuk melihat sijil.</li>
        <li>Klik butang <b>Baru</b> untuk membuat permohonan baru.</li>
        <li>Klik butang <b>Pelaporan OYK</b>.</li>
      </ol>

      <ExpandableImage
        src={maklumatOykImgSrc}
        alt="Maklumat OYK"
        caption="Maklumat OYK"
        width={650}
      />

      <ol start={10}>
        <li>Halaman <b>Pelaporan OYK</b> akan dipaparkan pada tab baru.</li>
      </ol>

      <Admonition type="info">
        Butang <b>Pelaporan OYK</b> digunakan untuk memulakan permohonan pelaporan bagi Orang Yang Kompeten.
      </Admonition>
    </div>
  );
}