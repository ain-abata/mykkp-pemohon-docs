import React from 'react';
import ExpandableImage from '../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahModulKemaskiniTempatKerjaProps {
  stepNumber: number;
  modulImgSrc?: string;
  maklumatPerhubunganImgSrc?: string;
}

export default function LangkahModulKemaskiniTempatKerja({
  stepNumber,
  modulImgSrc,
  maklumatPerhubunganImgSrc,
}: LangkahModulKemaskiniTempatKerjaProps) {
  return (
    <div>
      <h3>Langkah {stepNumber}: Laman Modul Kemaskini Tempat Kerja</h3>

      <ol>
        <li>Skrin <b>Kemaskini Tempat Kerja</b> akan dipaparkan.</li>
        <li>
          Klik butang <b>Kemaskini</b> bagi pengemaskinian maklumat pengguna.
        </li>
        <li>Klik butang <b>Simpan</b> untuk menyimpan data yang dikemaskini.</li>

      </ol>

      <ExpandableImage
        src={modulImgSrc}
        alt="Laman Modul Kemaskini Tempat Kerja"
        caption="Laman Modul Kemaskini Tempat Kerja"
        width={650}
      />

      <ol start={4}>
        <li><b>Maklumat Pekerja</b> dan  <b>Maklumat Pegawai Dosh-Coordinator</b> akan dipaparkan.</li>
        <li>
          Klik butang <b>Kemaskini</b> bagi pengemaskinian maklumat pengguna.
        </li>
        <li>
          Masukkan maklumat bagi pengemaskinian maklumat pengguna.
        </li>
        <li>Klik butang <b>Simpan</b> untuk menyimpan data yang dikemaskini.</li>
      </ol>

      <ExpandableImage
        src={maklumatPerhubunganImgSrc}
        alt="Maklumat Perhubungan"
        caption="Maklumat Perhubungan"
        width={650}
      />

      <Admonition type="info">
        Pastikan maklumat perhubungan yang dikemaskini adalah tepat sebelum klik butang <b>Simpan</b>.
      </Admonition>
    </div>
  );
}