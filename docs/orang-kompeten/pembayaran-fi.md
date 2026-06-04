---
title: Pembayaran Fi Pemprosesan dan Fi Pendaftaran test
description: Panduan lengkap pembayaran fi OYK
hide_table_of_contents: false
sidebar_label: 'Pembayaran Fi'
---

import Admonition from '@site/src/components/admonition';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExpandableImage from '@site/src/components/common/ExpandableImage';

# 📝 Pembayaran Fi Pemprosesan dan Fi Pendaftaran

## Fi Pemprosesan

  <h2 className="print-only">Pembayaran Fi Pemprosesan</h2>

  <div className="step-card">

  ### Lihat Sebut Harga Pemprosesan

  Terdapat **DUA (2)** cara untuk menyemak dokumen **Sebut Harga Pemprosesan**:

  #### A. Dari Halaman Senarai Permohonan

import imgPermohonanProses from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_senarai_permohonan_proses.png';

  <div className="doc-image">
        <img src={imgPermohonanProses} />
        <p>Halaman Senarai Permohonan</p>
  </div>

      1. Klik butang **Senarai Permohonan** pada menu sebelah kiri seterusnya klik butang tab **Sedang Diproses**.
      2. Klik butang **Tindakan** pada permohonan yang ingin disemak dan klik butang dropdown **Lihat Sebut Harga Perkhidmatan**.
      3. Dokumen **Sebut Harga Pemprosesan** akan dipaparkan pada tab baru.

  #### B. Dari Halaman Pembayaran

import imgLihatSHargaProses from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_pembayaran_proses_butang_lihat.png';

  <div className="doc-image">
        <img src={imgLihatSHargaProses} />
        <p>Halaman Senarai Pembayaran</p>
  </div>
      1. Klik butang menu **Pembayaran**. Maklumat senarai pembayaran bagi **Bayaran Fi Proses OYK** dipaparkan.
      2. Klik butang **Lihat** dan dokumen **Sebut Harga Pemprosesan** akan dipaparkan pada tab baru.

  </div>

  <div className="step-card">

  ### Bayar Fi Pemprosesan

import imgBayarSHargaProses from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_pembayaran_proses_butang_bayar.png';

  <div className="doc-image">
        <img src={imgBayarSHargaProses} />
        <p>Halaman Senarai Pembayaran</p>
  </div>

import imgPopUpProses from '@site/assets/images/orang-kompeten/pembayaran-fi/pop_up_pembayaran_proses.png';
import imgPembayaranKad from '@site/assets/images/loji/pembayaran/kaedah_pembayaran_kad.png';
import imgPembayaranFPX from '@site/assets/images/loji/pembayaran/kaedah_pembayaran_online.png';

  <div className="doc-image">
        <img src={imgPopUpProses} style={{ width: 400 }} />
        <p><i>Pop-up</i> Pembayaran</p>
  </div>
      
      1. Klik butang menu **Pembayaran**.  
      2. Klik butang **Bayar** dan *pop-up* pembayaran akan dipaparkan. 
        <Admonition type="info">
             Terdapat <b>dua (2)</b> kaedah pembayaran utama dalam MYKKP iaitu <b>Kad Kredit/Kad Debit</b> dan <b>FPX</b>.
        </Admonition>   
      3. Pilih kaedah pembayaran yang dikehendaki sama ada **Kad Kredit/Kad Debit** atau **FPX**.  
        <Admonition type="info">
              Terdapat <b>dua (2)</b> pilihan pembayaran melalui FPX iaitu <b>Online Banking</b> dan <b>Online Banking (B2B)</b>.
        </Admonition>  
      4. Klik butang **Bayar** untuk meneruskan pembayaran.
<div className="step-card">
    <Tabs>
      <TabItem value="pageKad" label="Kad Kredit/Kad Debit" default>
        <h2 className="print-only">Pembayaran melalui Kad Kredit/Kad Debit</h2>
          <ol style={{ listStyleType: 'lower-roman' }}>
          <li>Pilih butang <b>Card</b>.</li>
          <ExpandableImage
              src={imgPembayaranKad}
              alt="Pilihan Kaedah Pembayaran"
              caption="Pilihan Kaedah Pembayaran" 
              width = {400}
          /> 
          <li>Klik butang <b>Pay</b> untuk meneruskan pembayaran secara <b>Kad Debit/Kad Kredit.</b></li>
          <li>Isi maklumat Kad yang diperlukan.</li>
          <li>Klik butang <b>Pay</b> untuk meneruskan transaksi.</li>
          </ol>
          </TabItem>
                <TabItem value="pageFPX" label="FPX">  
                  <h2 className="print-only">Pembayaran melalui FPX</h2>             
                    <ol style={{ listStyleType: 'lower-roman' }}>
                        <li>Pilih butang <b>Online Banking</b> atau <b>Online Banking (B2B)</b>.</li>
                            <ExpandableImage
                                src={imgPembayaranFPX}
                                alt="Pilihan Kaedah Pembayaran"
                                caption="Pilihan Kaedah Pembayaran" 
                                width = {400}
                            /> 
                        <li>Pilih bank yang dikehendaki.</li>
                        <li>Klik butang <b>Pay</b> untuk meneruskan pembayaran.</li>
                        <li>Anda akan diarahkan ke laman bank yang dipilih.</li>
                        <li>Log masuk ke akaun perbankan internet dan lengkapkan proses pembayaran.</li>
                        <li>Setelah pembayaran berjaya, anda akan diarahkan semula ke sistem MYKKP dan status pembayaran akan dikemaskini.</li>
                         <Admonition type="warning">
                            <p><b>Bagi pembayaran melalui Online Banking (B2B):</b></p>
                            <ul><li>Pembayaran memerlukan kelulusan daripada pihak organisasi atau syarikat anda terlebih dahulu. </li></ul>
                            <ul><li>Status pembayaran akan mengambil masa sehingga 24 jam untuk dikemaskini dalam sistem MYKKP selepas kelulusan diberikan. </li></ul>  
                         </Admonition>
                    </ol>
        </TabItem>
    </Tabs>                   
</div>

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

## Fi Pendaftaran
  <h2 className="print-only">Pembayaran Fi Pendaftaran</h2>

  <div className="step-card">

  ### Lihat Sebut Harga Pendaftaran

    Terdapat **DUA (2)** cara untuk menyemak dokumen **Sebut Harga Pendaftaran**:

  #### A. Dari Halaman Senarai Permohonan

import imgPermohonanDaftar from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_senarai_permohonan_daftar.png';

  <div className="doc-image">
        <img src={imgPermohonanDaftar} />
        <p>Halaman Senarai Permohonan</p>
  </div>

      1. Klik butang **Senarai Permohonan** pada menu sebelah kiri seterusnya klik butang tab **Sedang Diproses**.
      2. Klik butang **Tindakan** pada permohonan yang ingin disemak dan klik butang dropdown **Lihat Sebut Harga Perkhidmatan**.
      3. Dokumen **Sebut Harga Pendaftaran** akan dipaparkan pada tab baru.

  #### B. Dari Halaman Pembayaran

import imgLihatSHargaDaftar from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_pembayaran_daftar_butang_lihat.png';

  <div className="doc-image">
        <img src={imgLihatSHargaDaftar} />
        <p>Halaman Senarai Pembayaran</p>
  </div>
      1. Klik butang menu **Pembayaran**. Maklumat senarai pembayaran bagi **Bayaran Kelulusan OYK** dipaparkan.
      2. Klik butang **Lihat** dan dokumen **Sebut Harga Pendaftaran** akan dipaparkan pada tab baru.

  </div>

  <div className="step-card">

  ### Bayar Fi Pendaftaran

import imgBayarSHargaDaftar from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_pembayaran_daftar_butang_bayar.png';

<div className="doc-image">
        <img src={imgBayarSHargaDaftar} />
        <p>Halaman Senarai Pembayaran</p>
</div>

import imgPopUpDaftar from '@site/assets/images/orang-kompeten/pembayaran-fi/pop_up_pembayaran_daftar.png';

  <div className="doc-image">
        <img src={imgPopUpDaftar} style={{ width: 400 }} />
        <p><i>Pop-up</i> Pembayaran</p>
  </div>
      1. Klik butang menu **Pembayaran**.  
      2. Klik butang **Bayar** dan *pop-up* pembayaran akan dipaparkan. 
        <Admonition type="info">
             Terdapat <b>dua (2)</b> kaedah pembayaran utama dalam MYKKP iaitu <b>Kad Kredit/Kad Debit</b> dan <b>FPX</b>.
        </Admonition>   
      3. Pilih kaedah pembayaran yang dikehendaki sama ada **Kad Kredit/Kad Debit** atau **FPX**.  
        <Admonition type="info">
              Terdapat <b>dua (2)</b> pilihan pembayaran melalui FPX iaitu <b>Online Banking</b> dan <b>Online Banking (B2B)</b>.
        </Admonition> 
      4. Klik butang **Bayar** untuk meneruskan pembayaran.
      <div className="step-card">
    <Tabs>
      <TabItem value="pageKad" label="Kad Kredit/Kad Debit" default>
          <ol style={{ listStyleType: 'lower-roman' }}>
          <li>Pilih butang <b>Card</b>.</li>
          <ExpandableImage
              src={imgPembayaranKad}
              alt="Pilihan Kaedah Pembayaran"
              caption="Pilihan Kaedah Pembayaran" 
              width = {400}
          /> 
          <li>Klik butang <b>Pay</b> untuk meneruskan pembayaran secara <b>Kad Debit/Kad Kredit.</b></li>
          <li>Isi maklumat Kad yang diperlukan.</li>
          <li>Klik butang <b>Pay</b> untuk meneruskan transaksi.</li>
          </ol>
          </TabItem>
                <TabItem value="pageFPX" label="FPX">               
                    <ol style={{ listStyleType: 'lower-roman' }}>
                        <li>Pilih butang <b>Online Banking</b> atau <b>Online Banking (B2B)</b>.</li>
                            <ExpandableImage
                                src={imgPembayaranFPX}
                                alt="Pilihan Kaedah Pembayaran"
                                caption="Pilihan Kaedah Pembayaran" 
                                width = {400}
                            /> 
                        <li>Pilih bank yang dikehendaki.</li>
                        <li>Klik butang <b>Pay</b> untuk meneruskan pembayaran.</li>
                        <li>Anda akan diarahkan ke laman bank yang dipilih.</li>
                        <li>Log masuk ke akaun perbankan internet dan lengkapkan proses pembayaran.</li>
                        <li>Setelah pembayaran berjaya, anda akan diarahkan semula ke sistem MYKKP dan status pembayaran akan dikemaskini.</li>
                         <Admonition type="warning">
                            <p><b>Bagi pembayaran melalui Online Banking (B2B):</b></p>
                            <ul><li>Pembayaran memerlukan kelulusan daripada pihak organisasi atau syarikat anda terlebih dahulu. </li></ul>
                            <ul><li>Status pembayaran akan mengambil masa sehingga 24 jam untuk dikemaskini dalam sistem MYKKP selepas kelulusan diberikan. </li></ul>  
                         </Admonition>
                    </ol>
        </TabItem>
    </Tabs>                   
</div>

import imgStatusBayarDaftar from '@site/assets/images/orang-kompeten/pembayaran-fi/halaman_status_bayaran_daftar.png';

  <div className="doc-image">
        <img src={imgStatusBayarDaftar} />
        <p>Halaman Status Bayaran</p>
  </div>

      5. Selepas pembayaran berjaya, klik butang **Lihat Resit** untuk melihat salinan resit sebagai bukti pembayaran.
      6. Maklumat resit akan dipaparkan pada halaman tab baru.

      {Admonition({
        type: "info",
        children: React.createElement('null', null, 'Status permohonan akan bertukar menjadi ',
          React.createElement('strong', null, 'Selesai Diproses – Diluluskan '), 
          'setelah pembayaran dilakukan oleh pemohon.'
        )
      })}

 </div>