import React from 'react';
import ExpandableImage from '../common/ExpandableImage';

interface MuatturunCfProps {

    imgMenu?: string;
    imgSenarai?: string;
    imgCarian?: string;
    imgCarianLoji?: string;
    imgCF?: string;
    imgDoket?: string;
}

export default function MuatturunCf({

    imgMenu,
    imgSenarai,
    imgCarian,
    imgCarianLoji,
    imgCF,
    imgDoket,

}: MuatturunCfProps) {
    return (
        <div>
            <h3>Langkah 2: Halaman Senarai Loji/CF</h3>
            <ol>
                <li>Halaman Menu Utama akan dipaparkan seperti di bawah.</li>
                <li>Klik menu <b>Profil Tempat Kerja</b>.</li>
                <li>Pilih <b>Senarai Loji/CF</b>.</li>

                <ExpandableImage
                    src={imgMenu}
                    alt="Menu Utama"
                    caption="Menu Utama MyKKP"
                    width={650}
                />

                <li>Paparan <b>Senarai Loji/CF</b> akan dipaparkan seperti dibawah.</li>

                <ExpandableImage
                    src={imgSenarai}
                    alt="Carian Jentera CF"
                    caption="Carian Senarai Jentera / CF"
                    width={650}
                />
            </ol>


            <h3>Langkah 3: Carian CF (Senarai Loji Tempat Kerja)</h3>
            <ol>
                <li>Masukkan <b>Nombor Jentera</b> pada ruangan carian.</li>
                <li>Klik butang <b>Cari</b>.</li>

                <ExpandableImage
                    src={imgCarian}
                    alt="Carian Jentera CF"
                    caption="Carian Senarai Jentera / CF"
                    width={650}
                />

                <li>Paparan carian akan dipaparkan.</li>
                <li>Klik butang <b>Papar CF</b> untuk melihat Permohonan CF.</li>
                <li>Klik butang <b>Papar Doket</b> untuk melihat doket.</li>
                <ExpandableImage
                    src={imgCarianLoji}
                    alt="Carian Jentera CF"
                    caption="Carian Loji"
                    width={650}
                />
                <li>Paparan CF akan terpapar seperti di bawah:</li>
                <ExpandableImage
                    src={imgCF}
                    alt="Carian Jentera CF"
                    caption="Contoh CF"
                    width={450}
                />
                <li>Paparan Doket akan terpapar seperti di bawah:</li>
                <ExpandableImage
                    src={imgDoket}
                    alt="Carian Jentera CF"
                    caption="Contoh Doket"
                    width={650}
                />
            </ol>



        </div>
    );
}