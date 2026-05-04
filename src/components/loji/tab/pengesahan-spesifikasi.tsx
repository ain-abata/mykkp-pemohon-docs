import React from 'react';
import Admonition from '@site/src/components/admonition';
import Link from '@docusaurus/Link';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

import boileterSpecImg from '@site/assets/images/loji/pekala/superheater_economizer.png';

interface PengesahanSpesifikasiProps {
    alphabetNumbering: string;
    tabNumber: number;
    tabName: string;
    tabImgSrc?: string;
    hasBoilerType: boolean;
}

export default function PengesahanSpesifikasi({
    alphabetNumbering,
    tabNumber,
    tabName,
    tabImgSrc,
    hasBoilerType,
}: PengesahanSpesifikasiProps) {
    return (
        <div>
            <h4>{alphabetNumbering}. Tab {tabNumber}: {tabName}</h4>
            <ExpandableImage
                src={tabImgSrc}
                alt={`Tab ${tabNumber}: ${tabName}`}
                caption={`Tab ${tabNumber}: ${tabName}`}
                width={450} />
            <ol>
                <li>Klik butang <b>Lihat Loji</b> dan <i>pop-up</i> <b>Pengesahan Spesifikasi</b> akan dipaparkan.</li>
            </ol>
            {hasBoilerType && (
              <>
                <Admonition type="tip">
                    Bagi loji <b>Dandang Stim (Sub Jenis - Boiler):</b> <br/>
                    Sila klik butang <i>checkbox</i> untuk memilih <b>Superheater/Economizer</b> pada tab <b>Maklumat Teknikal</b>.
                    <ExpandableImage
                        src={boileterSpecImg}
                        alt="Medan Dandang dilengkapi dengan Superheater / Economizer"
                        caption="Medan Pilihan Superheater / Economizer"
                        width={300} />
                </Admonition>
                </>
            )}
            <ol>
                <ol style={{ paddingLeft: '20px' }} >
                    <li>Klik butang <b>Simpan</b> selepas membuat semakan.</li>
                    <li>Mesej berjaya yang dipaparkan. Klik butang <b>OK</b> pada <i>pop-up</i> tersebut.</li>
                    <li>Pada <i>pop-up</i> <b>Pengesahan Spesifikasi</b>, klik butang <b>Seterusnya</b>.</li>
                    <li>Ulangi langkah di atas bagi setiap tab dalam <i>pop-up</i> <b>Pengesahan Spesifikasi</b>, kemudian pada tab terakhir klik butang <b>Pengesahan Spesifikasi</b>.</li>
                    <li>Butang <b>Lihat Loji</b> akan berubah dari warna oren menjadi warna hitam.</li>
                    <li>Klik butang <b>OK</b> pada <i>pop-up</i> mesej berjaya yang dipaparkan.</li>
                </ol>
            </ol>
            <ol start={2} >
                <li>Klik butang <b>Seterusnya</b>.</li>
            </ol>
            <Admonition type="warning">
                Permohonan tidak boleh diteruskan jika terdapat butang <b>Lihat Loji</b> yang masih berwarna oren.
            </Admonition>
        </div>
    );
}