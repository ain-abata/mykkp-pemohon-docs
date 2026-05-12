import React from 'react';
import ExpandableImage from '../../common/ExpandableImage';

interface TabButiranPepasanganProps {
  tabNumber: number;
  tabName: string;
  tabImgSrc?: string;
  maklumatPepasanganImgSrc?: string;
}

export default function TabButiranPepasangan({
  tabNumber,
  tabName,
  tabImgSrc,
  maklumatPepasanganImgSrc,
}: TabButiranPepasanganProps) {
  return (
    <div>
      <h4>Tab {tabNumber}: {tabName}</h4>

      <ol>
        <li>Halaman <b>{tabName}</b> akan dipaparkan seperti di bawah.</li>
        <li>Maklumat akan terpapar secara automatik kerana tempat kerja telah diaktifkan.</li>
        <li>Sila pastikan medan ruangan wajib telah diisi.</li>
      </ol>

      <ExpandableImage
        src={tabImgSrc}
        alt={`Tab ${tabNumber}: ${tabName}`}
        caption={`Tab ${tabNumber}: ${tabName}`}
        width={650}
      />

      <ExpandableImage
        src={maklumatPepasanganImgSrc}
        alt="Maklumat Pepasangan"
        caption="Maklumat Pepasangan"
        width={650}
      />

      <ol start={4}>
        <li>Klik butang <b>Seterusnya</b>.</li>
      </ol>
    </div>
  );
}