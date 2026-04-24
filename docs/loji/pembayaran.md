---
title: Bayaran Pemulaan & Bayaran Akhir
description: Panduan lengkap pembayaran Bil
hide_table_of_contents: true
sidebar_label: 'Pembayaran'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

# 📝 Bayaran Pemulaan & Bayaran Akhir

<div className="step-card">

### Langkah 1: Lihat Sebut Harga Perkhidmatan

Terdapat **DUA (2)** cara untuk menyemak dokumen **Sebut Harga Perkhidmatan**:
<Tabs>
  <TabItem value="pagePermohonan" label="Dari Halaman Senarai Permohonan" default>
    <h4 className="print-only">A. Dari Halaman Senarai Permohonan</h4>

import imgPermohonanProses from '@site/assets/images/loji/pembayaran/halaman_senarai_permohonan.png';
        
    <ExpandableImage
      src={imgPermohonanProses}
      alt="Senarai Permohonan"
      caption="Halaman Senarai Permohonan" />

    1. Klik butang **Senarai Permohonan** pada menu sebelah kiri seterusnya klik butang tab **Sedang Diproses**.
    2. Klik butang **Tindakan** pada permohonan yang ingin disemak dan klik butang dropdown **Lihat Sebut Harga Perkhidmatan**.
    3. Dokumen **Sebut Harga Perkhidmatan** akan dipaparkan pada tab baru.
  
  </TabItem>
  <TabItem value="pagePembayaran" label="Dari Halaman Pembayaran">
    <h4 className="print-only">B. Dari Halaman Pembayaran</h4>

import imgBtnLihat from '@site/assets/images/loji/pembayaran/halaman_pembayaran_butang_lihat.png';

      <ExpandableImage
        src={imgBtnLihat}
        alt="Senarai Pembayaran"
        caption="Halaman Senarai Pembayaran" />

      1. Klik butang menu **Pembayaran** dan klik butang **Lihat**.
      2. Dokumen **Sebut Harga Perkhidmatan** akan dipaparkan pada tab baru.

  </TabItem>
</Tabs>

</div>

<div className="step-card">

### Langkah 2: Bayaran Permulaan & Bayaran Akhir

import imgBtnBayar from '@site/assets/images/loji/pembayaran/halaman_pembayaran_butang_bayar.png';

      <ExpandableImage
        src={imgBtnBayar}
        alt="Senarai Pembayaran"
        caption="Halaman Senarai Pembayaran" />

import imgPopUpProses from '@site/assets/images/loji/pembayaran/pop_up_pembayaran.png';
      
      <ExpandableImage
        src={imgPopUpProses}
        alt="Pop-up Pembayaran"
        caption="Pop-up Pembayaran"
        width={400} />
      
      1. Klik butang **Bayar** dan *pop-up* pembayaran akan dipaparkan.
      2. Paparan akan menunjukkan amaun yang perlu dibayar.
      3. Klik butang radio sama ada **Kad Kredit/Kad Debit** atau **FPX**.
      4. Klik butang **Bayar** dan teruskan sehingga pembayaran selesai.

import imgStatusBayarProses from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_status_bayaran_proses.png';

      <div className="doc-image">
        <img src={imgStatusBayarProses} />
        <p>Halaman Status Bayaran</p>
      </div>

      5. Selepas pembayaran berjaya, klik butang **Lihat Resit** untuk melihat salinan resit sebagai bukti pembayaran.
      6. Maklumat resit akan dipaparkan pada halaman tab baru.

      {Admonition({
        type: "info",
        children: React.createElement('null', null, 'Permohonan akan bertukar menjadi status ',
          React.createElement('strong', null, 'Minit Pengarah '), 
          'dan akan diproses oleh pegawai JKKP berdasarkan piagam yang telah ditetapkan.'
        )
      })}

</div>