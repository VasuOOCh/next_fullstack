import React from 'react'

import {addPost,deletePost} from '../../lib/actions'
const page = () => {
  return (
    <div>
        <form action={addPost}>
        <input type="text" placeholder='title' name='title'/>
        <br />
        <input type="text" placeholder='description' name='desc'/>
        <br />
        <input type="text" placeholder='slug' name='slug' />
        <br />
        <input type="text" placeholder='userId' name='userId' />
        <br />
        <button>Create</button>
    </form>
    <form action={deletePost}>
        <input type="text" name='id' placeholder='postId' />
        <button>submit</button>
    </form>
    </div>
  )
}

export default page