import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

import iconMuatNaik from '@site/assets/images/orang-kompeten/ikon_muat_naik.png';

interface LaporanJkkp5Props {
  reportName: string;
  reportShortName: string;
  tabImgSrc?: string;
  popupDokumenImgSrc?: string;
  popupCarianOykmhImgSrc?: string;
  mesejHantarImgSrc?: string;
  hasCarianOykmh?: boolean;
}

export default function LaporanJkkp5({
  reportName,
  reportShortName,
  tabImgSrc,
  popupDokumenImgSrc,
  popupCarianOykmhImgSrc,
  mesejHantarImgSrc,
  hasCarianOykmh = true,
}: LaporanJkkp5Props) {
  return (
    <div>
      <h4>{reportName} ({reportShortName})</h4>

      <ol>
        <li>
          Halaman <b>{reportName} ({reportShortName})</b> akan dipaparkan seperti di bawah.
        </li>
      </ol>

      <ExpandableImage
        src={tabImgSrc}
        alt={`${reportName} (${reportShortName})`}
        caption={`${reportName} (${reportShortName})`}
        width={650}
      />

      <ol start={2}>
        <li>
          Klik butang <img src={iconMuatNaik} style={{ width: 15 }} /> untuk memuat naik dokumen <b>PDF</b> yang berkenaan pada medan bersyarat <b>Wajib</b>.
        </li>
        <li>
          <i>Pop-up</i> urus dokumen akan dipaparkan.
        </li>
      </ol>

      <ExpandableImage
        src={popupDokumenImgSrc}
        alt="Pop-up Urus Dokumen"
        caption={
          <>
            <i>Pop-up</i> Urus Dokumen
          </>
        }
        width={650}
      />

      <ol start={4}>
        <li>Isi medan <b>Diskripsi</b>.</li>
        <li>Klik butang <b><i>Choose File</i></b> untuk memilih dokumen.</li>
        <li>Klik butang <b>Simpan</b>.</li>
        <li>Dokumen yang berjaya dimuat naik akan dipaparkan dalam <b>Jadual Senarai Dokumen</b>.</li>
        <li>Klik butang <b>Tutup</b>.</li>
      </ol>

      <Admonition type="warning">
        <ol>
          <li>Pastikan dokumen yang dimuat naik adalah mengikut format yang ditetapkan.</li>
          <li>Pastikan saiz dokumen tidak melebihi 20MB.</li>
          <li>Sila pastikan nama lampiran tidak mengandungi simbol. <b>[Contoh: ! @ # $ % ^ & * ( ) - + dll...]</b></li>
        </ol>
      </Admonition>

      <Admonition type="info">
        Bagi <b>menghapuskan dokumen</b> yang telah dimuat naik 👉 Klik butang <b>Hapus Fail</b> pada <b>Jadual Senarai Dokumen</b>.
      </Admonition>

      {hasCarianOykmh && (
        <>
          <ol start={9}>
            <li>Klik butang <b>Carian</b> untuk mencari maklumat <b>OYKMH</b>.</li>
            <li><i>Pop-up</i> carian <b>OYKMH</b> akan dipaparkan.</li>
          </ol>

          <ExpandableImage
            src={popupCarianOykmhImgSrc}
            alt="Pop-up Carian OYKMH"
            caption={
              <>
                <i>Pop-up</i> Carian OYKMH
              </>
            }
            width={650}
          />

          <ol start={11}>
            <li>Klik butang radio pada maklumat OYK yang ingin dipilih.</li>
            <li><i>Pop-up</i> makluman akan terpapar.</li>
            <li>Klik <b>Tidak</b> untuk tidak teruskan.</li>
            <li>Klik <b>Ya</b> untuk teruskan.</li>
            <li>Sila pastikan maklumat wajib seperti <b>Jawatan</b> dan <b>Tarikh Surat Deklarasi Laporan</b> telah diisi sebelum melakukan penghantaran.</li>
            <li>Klik butang <b>Simpan</b> untuk simpan maklumat yang telah diisi.</li>
            <li>Klik butang <b>Hantar</b> untuk menghantar laporan.</li>
          </ol>
        </>
      )}

      {!hasCarianOykmh && (
        <ol start={9}>
          <li>Sila pastikan maklumat wajib seperti <b>Jawatan</b> dan <b>Tarikh Surat Deklarasi Laporan</b> telah diisi sebelum melakukan penghantaran.</li>
          <li>Klik butang <b>Simpan</b> untuk simpan maklumat yang telah diisi.</li>
          <li>Klik butang <b>Hantar</b> untuk menghantar laporan.</li>
        </ol>
      )}

      <ExpandableImage
        src={mesejHantarImgSrc}
        alt={`Mesej Hantar ${reportShortName}`}
        caption={`Mesej Hantar ${reportShortName}`}
        width={450}
      />
    </div>
  );
}