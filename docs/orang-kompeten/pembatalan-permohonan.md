---
title: Pembatalan Permohonan Orang Kompeten
description: Panduan lengkap pembatalan permohonan orang Kompeten
hide_table_of_contents: true
sidebar_label: 'Pembatalan Permohonan'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';

# 📝 Pembatalan Permohonan

{Admonition({
  type: "important",
  children: React.createElement('null', null, 'Pembatalan permohonan Orang Kompeten hanya boleh dilakukan jika ',
    React.createElement('strong', null, 'Fi Pemprosesan masih belum dibayar'), '.')
})}

<div className="step-card">
    
### Langkah 1: Masuk ke Halaman Senarai Permohonan

import TabSedangDiproses from "@site/assets/images/orang-kompeten/pembatalan-permohonan/halaman_sedang_diproses.png";

<div className="doc-image">
  <img src={TabSedangDiproses} />
  <p>Halaman Tab Sedang Diproses</p>
</div>

1. Klik butang **Senarai Permohonan** pada menu sebelah kiri seterusnya klik butang tab **Sedang Diproses**.
2. Klik butang **Tindakan** pada permohonan yang ingin dibatalkan dan klik butang *dropdown* **Batal Permohonan Oleh Pemohon**.
3. Klik **Ya, Sila Batalkan** untuk membuat pembatalan permohonan.

{Admonition({
  type: "info",
  children: React.createElement('null', null, 'Permohonan yang telah dibatalkan akan masuk ke Tab ',
    React.createElement('strong', null, 'Batal/Tolak '), 'secara automatik.')
})}
</div>

<div className="step-card">

### Langkah 2: Semak Tab Batal/Tolak

import TabBatalTolak from "@site/assets/images/orang-kompeten/pembatalan-permohonan/halaman_batal_tolak.png";

<div className="doc-image">
  <img src={TabBatalTolak} />
  <p>Halaman Tab Batal/Tolak</p>
</div>

1. Klik butang tab **Batal/Tolak**.
2. Status permohonan yang dibatalkan akan dipaparkan sebagai **Selesai Diproses – Dibatalkan**.

</div>