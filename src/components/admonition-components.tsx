import React from 'react';
import Admonition from '@site/src/components/admonition';

export function KemaskiniMaklumat ({ jenisMaklumat }: { jenisMaklumat: string }) {
  return (
    <Admonition type="info">
      Untuk mengemaskini {jenisMaklumat}, sila rujuk 👉 <b>Kemaskini {jenisMaklumat}</b>.
    </Admonition>
  )
}

export function EmptyFieldWarning () {
  return (
    <Admonition type="warning">
      Pemberitahuan tidak boleh diteruskan jika terdapat medan mandatori yang tidak diisi.
    </Admonition>
  )
}