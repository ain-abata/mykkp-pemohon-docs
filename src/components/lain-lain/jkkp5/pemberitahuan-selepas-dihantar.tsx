import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';

interface PemberitahuanSelepasDihantarProps {
  senaraiJkkp5ImgSrc?: string;
  butangLaporanImgSrc?: string;
  popupLaporanImgSrc?: string;
}

export default function PemberitahuanSelepasDihantar({
  senaraiJkkp5ImgSrc,
  butangLaporanImgSrc,
  popupLaporanImgSrc,
}: PemberitahuanSelepasDihantarProps) {
  return (
    <div>
      <ol>
        <li>
          Halaman <b>Pemberitahuan Aktiviti Industri - JKKP5</b> akan dipaparkan seperti di bawah.
        </li>
      </ol>

      <ExpandableImage
        src={senaraiJkkp5ImgSrc}
        alt="Halaman Pemberitahuan Aktiviti Industri JKKP5"
        caption="Halaman Pemberitahuan Aktiviti Industri - JKKP5"
        width={650}
      />

      <ol start={2}>
        <li>Klik butang <b>Pemberitahuan Laporan</b>.</li>
      </ol>

      <ExpandableImage
        src={butangLaporanImgSrc}
        alt="Butang Pemberitahuan Laporan"
        caption="Butang Pemberitahuan Laporan"
        width={650}
      />

      <ol start={3}>
        <li>
          <i>Pop-up</i> <b>Laporan Perlu Dihantar</b> akan dipaparkan seperti di bawah.
        </li>
      </ol>

      <ExpandableImage
        src={popupLaporanImgSrc}
        alt="Pop-up Laporan Perlu Dihantar"
        caption={
          <>
            <i>Pop-up</i> Laporan Perlu Dihantar
          </>
        }
        width={400}
      />

      <ol start={4}>
        <li>
          Pilih salah satu laporan yang perlu dihantar, sama ada <b>Laporan Aktiviti Industri (LAI)</b>,
          <b> Pelan Kecemasan Tapak (ERP)</b> atau <b>Maklumat Kepada Umum (ITP)</b>.
        </li>
        <li>
          Halaman laporan yang dipilih akan dipaparkan pada tab baru.
        </li>
      </ol>
    </div>
  );
}