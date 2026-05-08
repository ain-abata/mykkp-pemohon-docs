import Admonition from '@site/src/components/admonition';
import React from 'react';

export default function HapusMaklumat (){
    return(
        <>
        <Admonition type="tip">
            Bagi menghapuskan maklumat:
            <ol style={{ listStyleType: 'lower-roman' }}>
                <li>Klik ikon <i>delete</i>.</li>
                <li>Klik butang <b>Ya</b> untuk meneruskan tindakan hapus maklumat atau <b>Tidak</b> untuk batal penghapusan maklumat.</li>
            </ol>
        </Admonition>
        </>
    );
}