// src/components/lain-lain/jkkp5/pelaksanaan-jkkp5.tsx

import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface PelaksanaanJkkp5Props {
  tabName: string;
  isErp?: boolean;

  senaraiPelaksanaanJkkp5ImgSrc?: string;
  butangPelaksanaanImgSrc?: string;
  popupPelaksanaanImgSrc?: string;
  tabPelaksanaanImgSrc?: string;

  popupPilihanBahanBerbahayaImgSrc?: string;
  senaraiBahanBerbahayaImgSrc?: string;

  mesejHantarImgSrc?: string;
}

export default function PelaksanaanJkkp5({
  tabName,
  isErp = false,

  senaraiPelaksanaanJkkp5ImgSrc,
  butangPelaksanaanImgSrc,
  popupPelaksanaanImgSrc,
  tabPelaksanaanImgSrc,

  popupPilihanBahanBerbahayaImgSrc,
  senaraiBahanBerbahayaImgSrc,

  mesejHantarImgSrc,
}: PelaksanaanJkkp5Props) {
  return (
    <div>
      <ol>
        <li>
          Halaman <b>Pemberitahuan Aktiviti Industri - JKKP5</b> akan terpapar seperti di bawah.
          {senaraiPelaksanaanJkkp5ImgSrc && (
            <ExpandableImage
              src={senaraiPelaksanaanJkkp5ImgSrc}
              alt="Senarai Pemberitahuan Aktiviti Industri - JKKP5"
            />
          )}
        </li>

        <li>
          Klik butang <b>Pelaksanaan</b>.
          {butangPelaksanaanImgSrc && (
            <ExpandableImage
              src={butangPelaksanaanImgSrc}
              alt="Butang Pelaksanaan"
            />
          )}
        </li>

        <li>
          Pop-up <b>Pelaksanaan</b> akan terpapar seperti di bawah.
          {popupPelaksanaanImgSrc && (
            <ExpandableImage
              src={popupPelaksanaanImgSrc}
              alt="Pop-up Pelaksanaan"
            />
          )}
        </li>

        <li>
          Klik <b>{tabName}</b>.
        </li>

        <li>
          Halaman <b>{tabName}</b> akan terpapar pada tab baru.
          {tabPelaksanaanImgSrc && (
            <ExpandableImage
              src={tabPelaksanaanImgSrc}
              alt={`Tab ${tabName}`}
            />
          )}
        </li>

        {isErp && (
          <>
            <li>
              Klik butang <b>+ Tambah Bahan</b>.
            </li>

            <li>
              Pop-up <b>Pilihan Bahan Berbahaya</b> akan terpapar seperti di bawah.
              {popupPilihanBahanBerbahayaImgSrc && (
                <ExpandableImage
                  src={popupPilihanBahanBerbahayaImgSrc}
                  alt="Pop-up Pilihan Bahan Berbahaya"
                />
              )}
            </li>

            <li>
              Klik butang <b>Carian</b> jika terdapat banyak senarai bahan berbahaya bagi memudahkan penambahan bahan berbahaya.

              <Admonition type="info">
                Butang <b>Carian</b> boleh digunakan untuk mencari bahan berbahaya dengan lebih mudah sekiranya senarai bahan yang dipaparkan adalah banyak.
              </Admonition>
            </li>

            <li>
              Klik butang <b>checkbox</b> pada pilihan senarai bahan.
            </li>

            <li>
              Klik butang <b>Pilih</b>.
            </li>

            <li>
              Jadual <b>Senarai Bahan Berbahaya</b> akan terpapar seperti di bawah.
              {senaraiBahanBerbahayaImgSrc && (
                <ExpandableImage
                  src={senaraiBahanBerbahayaImgSrc}
                  alt="Jadual Senarai Bahan Berbahaya"
                />
              )}
            </li>
          </>
        )}

        <li>
          Sila pastikan maklumat seperti <b>Tarikh Pelaksanaan</b>, <b>Jenis Latihan</b>, <b>Jenis Scenario</b> dan <b>Penerangan Scenario Latihan</b> telah diisi sebelum klik butang <b>Simpan</b>.
        </li>

        <li>
          Klik butang <b>Simpan</b>.
        </li>

        <li>
          Klik butang <b>Hantar</b>.
        </li>

        <li>
          Pop-up makluman akan terpapar seperti di bawah.
          {mesejHantarImgSrc && (
            <ExpandableImage
              src={mesejHantarImgSrc}
              alt={`Mesej Hantar ${tabName}`}
            />
          )}
        </li>

        <li>
          Klik butang <b>Tutup</b>.
        </li>
      </ol>
    </div>
  );
}