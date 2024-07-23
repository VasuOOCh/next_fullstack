import React from 'react'
import styles from './page.module.css'
import PostCard from '../../components/postCard/PostCard'
import {getPosts} from '../../lib/data'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  if(!res.ok) {
    throw new Error("Some thing went wrong")
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData(); //using actual api

  return (
    <div className={styles.container}>
      {data.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}

    </div>
  )
}

export default Blog