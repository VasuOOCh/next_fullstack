import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  // console.log(post);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                {
                  post.img && (
                    <Image src={post.img} alt='post_img' fill sizes='100%' />
                  )
                }
            </div>
            <span className={styles.date}>01.01.2000</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={'/blogs/' + post.slug} >Read more</Link>
        </div>
    </div>
  )
}

export default PostCard