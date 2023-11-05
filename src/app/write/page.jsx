'use client'

import Image from 'next/image'
import styles from './write.module.css'
import { useState } from 'react'

const WritePage = () => {
  const [open, setIsOpen] = useState(false)
  return (
    <div className={styles.container}>
      <input type='text' placeholder='Title' />
      <div className={styles.eidtor}>
        <button className={styles.button}>
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src='/image.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WritePage
