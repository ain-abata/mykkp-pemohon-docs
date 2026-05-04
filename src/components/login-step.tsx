import React from 'react';
import Admonition from '@site/src/components/admonition';
import ExpandableImage from '@site/src/components/common/ExpandableImage';
import Link from '@docusaurus/Link';

import imgLogin from '@site/assets/images/log_masuk.png';

export default function LoginStep({ stepNumber, title }: { stepNumber: number; title: string }) {
  return (
    <div className="step-card">
      <h3>Langkah {stepNumber}: {title}</h3>

      <p>
        Klik pautan berikut: 👉{' '}
        <a href="https://mykkpstg.dosh.gov.my/#/home/log-masuk">
          Log Masuk MyKKP
        </a>
      </p>

      <ExpandableImage
        src={imgLogin}
        alt="Halaman Log Masuk MyKKP"
        caption="Halaman Log Masuk MyKKP"
        width={300} />

      <ol>
        <li>Masukkan <b>ID pengguna</b> dan <b>Kata Laluan</b>.</li>
        <li>Klik butang <b>Log Masuk</b>.</li>
      </ol>

      <Admonition type="info">
        <ul>
          <li>
            Jika terlupa ID Pengguna, sila emel kepada MyKKP: <Link href="mailto:mykkp@mohr.gov.my">mykkp@mohr.gov.my</Link>
          </li>
          <li>
            Jika terlupa Kata Laluan, sila klik <b>Lupa Kata Laluan?</b>
          </li>
          <li>
            Jika belum mempunyai akaun, sila klik <b>Daftar sini</b>
          </li>
        </ul>
      </Admonition>
    </div>
  );
}