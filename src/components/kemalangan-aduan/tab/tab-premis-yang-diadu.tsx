import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabPremisYangDiaduProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  popupImgSrc?: string;

}

export default function TabPremisYangDiadu({
  tabNumber,
  tabName,
  tabImgSrc,
  popupImgSrc,

}: TabPremisYangDiaduProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: {tabName}</h4>

      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650}
      />

      <ol>
        <li>Klik butang <b>Carian</b> untuk memilih premis.</li>
        <li><i>Pop-up</i> carian premis akan dipaparkan.</li>
        <li>Pilih premis yang dikehendaki dan klik butang <b>Pilih</b>.</li>
        <ExpandableImage
          src={popupImgSrc}
          alt="Pop-up Carian Loji"
          caption={
            <>
              <i>Pop-up</i> Carian Loji
            </>
          }
          width={650}
        />
        <li>
          Isi maklumat yang dikendaki pada ruangan yang disediakan.
        </li>
        <li>
          Jika ingin membatalkan pilihan, klik butang <b>Batal Pemilihan Loji</b>.
        </li>
        <Admonition type="tip">
          Premis Yang Dipilih Untuk Pemberitahuan Pembukaan akan dipaparkan.
        </Admonition>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}