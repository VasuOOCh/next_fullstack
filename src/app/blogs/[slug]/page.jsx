import React, { Suspense } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import PostUser from '../../../components/postUser/PostUser'
import { getPost, getUser } from '../../../lib/data'

export const generateMetadata = async ({params}) => {
  const post = await getPost(params.slug);

  return {
    title : post.title,
    description : post.desc
  }
}


const getData = async (slug) => {
  const res = await fetch('http://localhost:3000/api/posts/' + slug);
  if(!res.ok) {
    // console.log(res);
    throw new Error("Some thing went wrong")
  }

  return res.json()
}

// export const metadata = await genrateMeta()

const Slug =async ({params,searchParams}) => {
  // async function getData() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.slug)
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.
   
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }
   
  //   return res.json()
  // }
  // const resp = await getData();
  // const post = await getPost(params.slug);
  const post = await getData(params.slug)


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {
          post.Image && (
            <Image src={post.img} fill alt='' />
          )
        }
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading User</div>}>
          <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>10.01.2020</span>
          </div>
        </div>
        <p className={styles.content}>{post.desc}</p>

      </div>
    </div>
  )
}

export default Slug