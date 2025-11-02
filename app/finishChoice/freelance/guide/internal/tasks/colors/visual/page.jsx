'use client'

import Gallery from '../../../../../../../components/Gallery'
import styles from './visual.module.css'
import { useState } from 'react'

export default function VisualPage() {


  const [selected, setSelected] = useState(null)

  return (
    <div className={styles.container}>
      <Gallery />
    </div>
  )
}
