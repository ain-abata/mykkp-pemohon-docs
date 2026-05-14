import React from 'react';
import Admonition from '@site/src/components/admonition';

export default function KemaskiniMaklumat ({ jenisMaklumat }: { jenisMaklumat: string }) {
  return (
    <Admonition type="info">
      Untuk mengemaskini {jenisMaklumat}, sila rujuk 👉 <b>Kemaskini {jenisMaklumat}</b>.
    </Admonition>
  )
}

