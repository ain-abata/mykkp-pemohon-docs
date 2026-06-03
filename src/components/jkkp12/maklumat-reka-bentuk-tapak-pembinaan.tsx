import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatRekaBentukTapakPembinaanProps {
  tabNumber: number;
  tabImgSrc: string;
  maklumatPerekaBentukImgSrc: string;
  popupMaklumatPerekaBentukImgSrc: string;
  pilihanPerekaBentukPrinsipalImgSrc: string;
  popupPilihanPerekaBentukImgSrc: string;
}

export default function MaklumatRekaBentukTapakPembinaan({
  tabNumber,
  tabImgSrc,
  maklumatPerekaBentukImgSrc,
  popupMaklumatPerekaBentukImgSrc,
  pilihanPerekaBentukPrinsipalImgSrc,
  popupPilihanPerekaBentukImgSrc,
}: MaklumatRekaBentukTapakPembinaanProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: Maklumat Reka Bentuk</h4>
      <ol>
        <li>
          Halaman <b>Maklumat Pereka Bentuk</b> akan terpapar seperti di bawah.
        </li>
        <ExpandableImage
        src={tabImgSrc}
        alt="Halaman Maklumat Pereka Bentuk"
        caption="Halaman Maklumat Pereka Bentuk"
        width={650}
      />
      </ol>

      <h5>a. Tambah Maklumat Pereka Bentuk Kerja Pembinaan</h5>

      <ol>
        <li>
          Klik butang <b>Tambah</b>.
</li>
          <ExpandableImage
            src={maklumatPerekaBentukImgSrc}
            alt="Bahagian Maklumat Pereka Bentuk Kerja Pembinaan"
            caption="Bahagian Maklumat Pereka Bentuk Kerja Pembinaan"
            width={650}
          />
        
        <li>
          <i>Pop-up</i> modal <b>Maklumat Pereka Bentuk Kerja Pembinaan</b> akan terpapar.

          <ExpandableImage
            src={popupMaklumatPerekaBentukImgSrc}
            alt="Pop-up Modal Maklumat Pereka Bentuk Kerja Pembinaan"
            caption="Pop-up Modal Maklumat Pereka Bentuk Kerja Pembinaan"
            width={450}
          />
        </li>
        <li>
          Pilih <b>Kategori</b> dan isi carian pada medan ruangan <b>Carian</b>.
          Klik butang <b>Carian</b>.
        </li>
        <li>
          Klik butang radio untuk memilih <b>Pereka Bentuk Kerja Pembinaan</b>{' '}
          yang dikehendaki.
        </li>
        <li>
          Klik butang <b>Pilih</b>.
        </li>
        <li>
          Maklumat tempat kerja yang dipilih akan terpapar dalam senarai{' '}
          <b>Maklumat Pereka Bentuk Kerja Pembinaan</b>.
        </li>
      </ol>

      <h5>b. Tambah Maklumat Pereka Bentuk Prinsipal Kerja Pembinaan</h5>

      <ol>
        <li>
          Klik butang{' '}
          <b>Pilihan Senarai Pereka Bentuk Prinsipal Kerja Pembinaan</b>.

          <ExpandableImage
            src={pilihanPerekaBentukPrinsipalImgSrc}
            alt="Butang Pilihan Senarai Pereka Bentuk Prinsipal Kerja Pembinaan"
            caption="Pilihan Senarai Pereka Bentuk Prinsipal Kerja Pembinaan"
            width={650}
          />
        </li>
      </ol>

      <Admonition type="info">
        Pereka Bentuk Prinsipal wajib dipilih jika terdapat lebih daripada satu{' '}
        <b>Kontraktor Kerja Pembinaan</b> yang dilantik oleh{' '}
        <b>Klien/Pemberitahu</b>.
      </Admonition>

      <ol start={2}>
        <li>
          Pop-up <b>Pilihan Senarai Pereka Bentuk</b> akan terpapar.

          <ExpandableImage
            src={popupPilihanPerekaBentukImgSrc}
            alt="Pop-up Pilihan Senarai Pereka Bentuk"
            caption="Pop-up Pilihan Senarai Pereka Bentuk"
            width={650}
          />
        </li>
        <li>
          Klik butang radio pada <b>Tempat Kerja</b> yang dikehendaki.
        </li>
        <li>
          Klik butang <b>Pilih</b> untuk memilih{' '}
          <b>Pereka Bentuk Prinsipal Kerja Pembinaan</b>.
        </li>
        <li>
          Maklumat tempat kerja yang dipilih akan terpapar dalam senarai{' '}
          <b>Maklumat Pereka Bentuk Prinsipal Kerja Pembinaan</b>.
        </li>
      </ol>
    </div>
  );
}