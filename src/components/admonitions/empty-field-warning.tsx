import React from 'react';
import Admonition from '@site/src/components/admonition';

export default function EmptyFieldWarning () {
  return (
    <Admonition type="warning">
      Pemberitahuan tidak boleh diteruskan jika terdapat medan mandatori yang tidak diisi.
    </Admonition>
  )
}