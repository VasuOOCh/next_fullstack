import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import PostUser from '../../../components/postUser/PostUser'

const Slug = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/contact.png'} fill alt='' />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <PostUser />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jane Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>10.01.2020</span>
          </div>
        </div>
        <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas animi blanditiis quos fuga ex provident laboriosam deleniti dolore et voluptas! Ratione adipisci dolore facilis aspernatur eaque, hic minus minima placeat?</p>

      </div>
    </div>
  )
}

export default Slug