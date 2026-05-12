import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';

interface LangkahMenuUtamaProps {
  stepNumber: number;
  menuUtamaImgSrc?: string;
  jkkp5ImgSrc?: string;
  popupMaklumanImgSrc?: string;
}

export default function LangkahMenuUtama({
  stepNumber,
  menuUtamaImgSrc,
  jkkp5ImgSrc,
  popupMaklumanImgSrc,
}: LangkahMenuUtamaProps) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: Laman Menu Utama</h3>

      <ol>
        <li>Laman <b>Menu Utama</b> akan dipaparkan seperti di bawah.</li>
      </ol>

      <ExpandableImage
        src={menuUtamaImgSrc}
        alt="Laman Menu Utama"
        caption="Laman Menu Utama"
        width={650}
      />

      <ol start={2}>
        <li>Klik pada menu <b>JKKP5</b>.</li>
        <li>Skrin <b>JKKP5 - Pemberitahuan Aktiviti Industri</b> akan dipaparkan.</li>
      </ol>

      <ExpandableImage
        src={jkkp5ImgSrc}
        alt="Laman JKKP5 Pemberitahuan Aktiviti Industri"
        caption="Laman JKKP5 - Pemberitahuan Aktiviti Industri"
        width={650}
      />

      <ol start={4}>
        <li>Klik pada butang <b>JKKP5 Baru</b> untuk melakukan pengisian JKKP5.</li>
        <li><i>Pop-up</i> makluman akan dipaparkan.</li>
      </ol>

      <ExpandableImage
        src={popupMaklumanImgSrc}
        alt="Pop-up Makluman JKKP5"
        caption={
          <>
            <i>Pop-up</i> Makluman JKKP5
          </>
        }
        width={450}
      />

      <ol start={6}>
        <li>Klik butang <b>OK</b> untuk teruskan pengisian.</li>
        <li>Halaman pengisian JKKP5 akan dipaparkan.</li>
      </ol>
    </div>
  );
}