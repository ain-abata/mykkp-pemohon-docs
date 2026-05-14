import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

interface MaklumatProjekTapakPembinaanProps {
  tabNumber: number;
  tabImgSrc: string;
}

export default function MaklumatProjekTapakPembinaan({
  tabNumber,
  tabImgSrc,
}: MaklumatProjekTapakPembinaanProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: Maklumat Projek</h4>
      <ol>
        <li>
          Halaman <b>Maklumat Projek</b> akan terpapar seperti di bawah.
        </li>
        <ExpandableImage
          src={tabImgSrc}
          alt="Halaman Maklumat Projek"
          caption="Halaman Maklumat Projek"
          width={650}
        />
        <li>
          Semak <b>Maklumat Klien</b>, <b>Maklumat Projek</b> dan{' '}
          <b>Maklumat Pegawai Yang Bertanggungjawab (Klien)</b> yang dipaparkan.
        </li>
        <li>
          Klik pada butang <b>Seterusnya</b>.
        </li>
      </ol>
    </div>
  );
}