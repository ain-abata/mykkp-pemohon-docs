import Admonition from '@site/src/components/admonition';
import React from 'react';

export default function BatalOlehPemohon (){
    return(
        <>
        <Admonition type="warning">
            Pastikan maklumat yang diisi adalah benar dan sah kerana permohonan yang telah dihantar <b>TIDAK BOLEH</b> dibatalkan oleh pemohon.
            <br/><br/>
            Sekiranya terdapat kesilapan atau keperluan untuk membatalkan permohonan, pemohon perlu menghubungi pihak pentadbir untuk tindakan selanjutnya.  
            <br/><br/>
            <b>Talian Terus MyKKP</b><br/>
            Emel: mykkp@mohr.gov.my<br/>
            No. Faks: 03-6419 2525
        </Admonition>
        </>
    );
}