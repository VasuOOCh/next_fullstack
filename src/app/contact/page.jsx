// 'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'Contact page' ,
  description: "Contact page",
};

const Contact = () => {
    
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt='img' src={'/contact.png'} sizes='100%'
        fill />
      </div>
      <div className={styles.formContainer}>
        <h1>Contact Us</h1>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder='Name'/>
          <input type="text" className={styles.input} placeholder='Email'/>
          <input type="text" className={styles.input} placeholder='Password'/>
          <textarea className={styles.message} placeholder='Message'></textarea>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact