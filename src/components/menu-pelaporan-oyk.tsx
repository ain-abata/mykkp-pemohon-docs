import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

import imgMenu from '@site/assets/images/orang-kompeten/pelaporan/menu_pelaporan.png';
import imgMaklumatOK from '@site/assets/images/orang-kompeten/pelaporan/maklumat_ok.png';


interface MenuPelaporanOKProps {
  stepNumber: number;
  pageName: string;
  kategoriPermohonan: string;
  moduleName: string;
  moduleType: string;
  hasDropdown: boolean;
}

export default function MenuPelaporanOK({
  stepNumber,
  pageName,
  kategoriPermohonan,
  moduleName,
  moduleType,
  hasDropdown
}: MenuPelaporanOKProps) {
  return (
    <div>

      <ExpandableImage
        src={imgMenu}
        alt={`Halaman Menu Utama`}
        caption={`Halaman Menu Utama`}
        width={650}
      />

      <ol>
        <li>Pada halaman <b>Menu Utama</b>, klik pada butang <b>Profil Saya</b> dan seterusnya pada butang <b>{kategoriPermohonan}</b>.</li>
      </ol>

      <Admonition type="info">
      <ul>  
        <li>Pastikan dashboard yang dipilih adalah dashboard <b>Orang Kompeten</b>.</li>
      </ul>
      </Admonition>
            
      <ExpandableImage
        src={imgMaklumatOK}
        alt="Halaman Profil Saya - Maklumat OK / Orang Terlatih"
        caption="Halaman Profil Saya - Maklumat OK / Orang Terlatih"
        width={650}
      />

      <ol start={2}>
        <li>Halaman <b>{pageName}</b> akan dipaparkan.</li>
        <li>Skrol ke bawah dan pergi ke bahagian <b>Senarai Kompetensi Yang Diluluskan</b>.</li>
        <li>Klik butang <b>Lihat Slip</b> untuk melihat paparan <b>Slip Ringkas Perakuan Pendaftaran</b>.</li>
        <li>Klik butang <b>Pembaharuan</b> untuk membuat permohonan pembaharuan bagi Orang Kompeten yang akan atau telah tamat tempoh.</li>
        <li>Klik butang <b>Pelaporan OK</b> untuk membuat pelaporan Orang Kompeten bagi modul yang dikehendaki.</li>
      </ol>

        <Admonition type="info">

        <p>Bagi <b>Pelaporan OK</b>, modul Orang Kompeten yang terlibat adalah seperti berikut:</p>
        <ul>
          <li><b>Penaksir Risiko Bising (OYKPEB)</b></li>
          <li><b>Juruteknik Higien 1 (OYKJHI)</b></li>
          <li><b>Juruteknik Higien 2 (OYKJHII)</b></li>
          <li><b>Pengapit (OYKCHRA)</b></li>
          <li><b>Kualiti Udara Dalaman (OYKIAQ)</b></li>
          <li><b>Penguji Gas Bertauliah dan Penyelia Kemasukan (OYKAGTES)</b></li>
          <li><b>Penyelia Keselamatan Tapak Bina (OYKSSS)</b></li>
          <li><b>Pegawai Keselamatan dan Kesihatan (OYKSHO)</b></li>
          <li><b>Major Hazard (OYKMH)</b></li>
        </ul>
      </Admonition>
    </div>
  );
}