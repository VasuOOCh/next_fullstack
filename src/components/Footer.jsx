import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.text}>
       Copyright 2024 | All rights reserved.
      </div>
    </div>
  )
}

export default Footer