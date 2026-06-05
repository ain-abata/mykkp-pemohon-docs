import React, { useState } from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface LangkahProfilSayaProps {
  stepNumber: number;
  menuProfilImgSrc?: string;
  maklumatAmImgSrc?: string;
  maklumatOykImgSrc?: string;
  jadualCepImgSrc?: string;
  maklumatEmelImgSrc?: string;
  tukarKataLaluanImgSrc?: string;
}

export default function LangkahProfilSaya({
  stepNumber,
  menuProfilImgSrc,
  maklumatAmImgSrc,
  maklumatOykImgSrc,
  jadualCepImgSrc,
  maklumatEmelImgSrc,
  tukarKataLaluanImgSrc,
}: LangkahProfilSayaProps) {
  return (
    <div>
      <Tabs>
        <TabItem value="maklumatAm" label="Maklumat Am" default>

          <h4>Maklumat Am</h4>
          <ExpandableImage
            src={maklumatAmImgSrc}
            alt="Maklumat Am"
            caption="Maklumat Am"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Maklumat Am</b>.</li>
            <li>Skrin <b>Maklumat Am</b> akan dipaparkan.</li>
            <li>Klik butang <b>Kemaskini</b> jika ingin mengemaskini maklumat.</li>
            <li>Klik butang <b>Simpan</b> setelah selesai mengemaskini maklumat.</li>
          </ol>

        </TabItem>

        <TabItem value="maklumatOyk" label="Maklumat OYK">
          <h4>Maklumat Oyk</h4>
          <ExpandableImage
            src={maklumatOykImgSrc}
            alt="Maklumat OYK"
            caption="Maklumat OYK"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Maklumat OYK</b>.</li>
            <li>Skrin <b>Maklumat OYK</b> akan dipaparkan.</li>
            <li>Klik butang <b>Lihat Sijil</b> untuk melihat sijil OYK.</li>
            <li>Klik butang <b>Baru</b> untuk membuat pembaharuan OYK.</li>
            <li>Klik butang <b>Kemaskini Maklumat OYK</b> untuk mengemaskini maklumat majikan.</li>
          </ol>

        </TabItem>

        <TabItem value="jadualCep" label="Jadual CEP">
          <h4>Jadual CEP</h4>
          <ExpandableImage
            src={jadualCepImgSrc}
            alt="Jadual CEP"
            caption="Jadual CEP"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Jadual CEP</b>.</li>
            <li>Skrin <b>Jadual CEP</b> akan dipaparkan.</li>
            <li>Klik medan <b>Sila Pilih Jenis OYK</b> untuk memilih jenis Orang Yang Kompeten.</li>
            <li>Klik butang <b>Tambah Baru</b> untuk memuat naik dokumen CEP.</li>
          </ol>

        </TabItem>

        <TabItem value="maklumatEmel" label="Maklumat Emel">
          <h4>Maklumat Emel</h4>
          <ExpandableImage
            src={maklumatEmelImgSrc}
            alt="Maklumat Emel"
            caption="Maklumat Emel"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Maklumat Emel</b>.</li>
            <li>Skrin <b>Maklumat Emel</b> akan dipaparkan.</li>
            <li>Masukkan emel baru untuk mengemaskini emel.</li>
            <li>Klik butang <b>Hantar</b>.</li>
            <li>Kod verifikasi akan dihantar ke emel baru.</li>
          </ol>

        </TabItem>

        <TabItem value="tukarKataLaluan" label="Tukar Kata Laluan">
          <h4>Tukar Kata Laluan</h4>
          <ExpandableImage
            src={tukarKataLaluanImgSrc}
            alt="Tukar Kata Laluan"
            caption="Tukar Kata Laluan"
            width={650}
          />

          <ol>
            <li>Klik sub menu <b>Tukar Kata Laluan</b>.</li>
            <li>Skrin <b>Tukar Kata Laluan</b> akan dipaparkan.</li>
            <li>Masukkan kata laluan lama dan kata laluan baru.</li>
            <li>Klik butang <b>Hantar</b>.</li>
          </ol>

        </TabItem>
      </Tabs>

      <Admonition type="info">
        Menu <b>Profil Saya</b> digunakan untuk menyemak dan mengemaskini maklumat pengguna, maklumat OYK, jadual CEP, emel dan kata laluan.
      </Admonition>
    </div>
  );
}