import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt='post_img' fill sizes='100%' />
            </div>
            <span className={styles.date}>01.01.2000</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.</p>
            <Link className={styles.link} href={'/blogs/id'} >Read more</Link>
        </div>
    </div>
  )
}

export default PostCard