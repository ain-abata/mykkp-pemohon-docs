// src/components/jkkp12/maklumat-tapak.tsx

import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface MaklumatTapakProps {
  tabNumber: number;
  tabImgSrc?: string;
}

export default function MaklumatTapak({
  tabNumber,
  tabImgSrc,
}: MaklumatTapakProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: Maklumat Tapak</h4>
      <ol>
        <li>
          Halaman <b>Maklumat Tapak</b> akan terpapar seperti di bawah.
        </li>
        <ExpandableImage
          src={tabImgSrc}
          alt={`Tab ${tabNumber} Maklumat Tapak`}
          caption={`Tab ${tabNumber}: Maklumat Tapak`}
          width={650}
        />
        <li>
          Untuk menambah <b>Tapak Pembinaan</b>, klik pada butang <b>Tambah Tapak</b>.
        </li>
        <Admonition type="info">
          Sila rujuk pada{' '}
          <a href="#pemberitahuan-tapak-pembinaan">
            Pemberitahuan Tapak Pembinaan Projek
          </a>{' '}
          untuk aktiviti penambahan tapak pembinaan.
        </Admonition>
        <li>
          Klik butang <b>Refresh Senarai Tapak</b> untuk muat semula maklumat tapak yang baru diisi.
        </li>

        <li>
          Klik butang <b>Seterusnya</b>.
        </li>
      </ol>
    </div>
  );
}