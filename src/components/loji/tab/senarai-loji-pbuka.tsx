import React from 'react';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Admonition from '@site/src/components/admonition';

interface TabSenaraiLojiProps {
  alphabetNumbering: string;
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  popupImgSrc?: string;
}

export default function TabSenaraiLoji({
  alphabetNumbering,
  tabNumber,
  tabName,
  tabImgSrc,
  popupImgSrc,
}: TabSenaraiLojiProps) {
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
        <li>Halaman Tab {tabNumber}: <b>{tabName}</b> akan dipaparkan.</li>
        <li>Klik butang <b>Carian Loji</b> untuk memilih loji.</li>
        <li><i>Pop-up</i> carian loji akan dipaparkan.</li>
        <li>Pilih loji yang dikehendaki dan klik butang <b>Pilih</b>.</li>
      </ol>

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

      <ol start={5}>
        <li>
          Jika ingin membatalkan pilihan, klik butang <b>Batal Pemilihan Loji</b>.
        </li>
        <Admonition type="tip">
                        Senarai Loji Yang Dipilih Untuk Pemberitahuan Pembukaan akan dipaparkan.
                        
                    </Admonition>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}