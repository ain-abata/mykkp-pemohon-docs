import React from 'react';
import ExpandableImage from '../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface LangkahModulKemaskiniTempatKerjaProps {
  stepNumber: number;
  modulImgSrc?: string;
  IICMSImgSrc?: string;
  maklumatPerhubunganImgSrc?: string;
}

export default function LangkahModulKemaskiniTempatKerja({
  stepNumber,
  modulImgSrc,
  IICMSImgSrc,
  maklumatPerhubunganImgSrc,
}: LangkahModulKemaskiniTempatKerjaProps) {
  return (
    <div>
      <ol>
        <li>Skrin <b>Kemaskini Tempat Kerja</b> akan dipaparkan.</li>
        <li>
          Klik butang <b>Kemaskini</b> bagi pengemaskinian maklumat pengguna.
        </li>
        <li>Klik butang <b>Simpan</b> untuk menyimpan data yang dikemaskini.</li>



        <ExpandableImage
          src={modulImgSrc}
          alt="Laman Modul Kemaskini Tempat Kerja"
          caption="Laman Modul Kemaskini Tempat Kerja"
          width={650}
        />

        <li>
          Klik butang <b>Kemaskini Geolokasi</b> bagi pengemaskinian maklumat lokasi.
        </li>
        <li>Halaman <i>IICMS Map Platform</i> akan dipaparkan.</li>
        <ExpandableImage
          src={IICMSImgSrc}
          alt="Laman IICMS Map PlatformIICMS Map Platform"
          caption="Laman IICMS Map PlatformIICMS Map Platform"
          width={650}
        />
        <li>
          Klik butang <b><i>Search</i></b> dan tetapkan koordinat lokasi bagi pengemaskinian lokasi.
        </li>
        <ExpandableImage
        src={maklumatPerhubunganImgSrc}
        alt="Maklumat Pekerja dan Maklumat Pegawai Dosh-Coordinator"
        caption="Maklumat Pekerja dan Maklumat Pegawai Dosh-Coordinator"
        width={650}
      />
        <li>Untuk kemaskini <b>Maklumat Pekerja</b> dan  <b>Maklumat Pegawai Dosh-Coordinator</b>.</li>
        <li>
          Klik butang <b>Kemaskini</b> bagi pengemaskinian maklumat pengguna.
        </li>
        <li>
          Masukkan maklumat bagi pengemaskinian maklumat pengguna.
        </li>
        <li>Klik butang <b>Simpan</b> untuk menyimpan data yang dikemaskini.</li>
      </ol>

      

      <Admonition type="info">
        Pastikan maklumat perhubungan yang dikemaskini adalah tepat sebelum klik butang <b>Simpan</b>.
      </Admonition>
    </div>
  );
}