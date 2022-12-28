import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const postsElements = props.posts.map((p, index) => <Post count={p.count} contain={p.contain} key={`post-${index}`} />)

  return (
    <div className={s.myPosts}>

      <div className={s.newPost}>
        <textarea placeholder='Write something interesting' />
        <button>New Post</button>
      </div>

      <p className={s.allContent}>All Content</p>

      <div className={s.posts}>
        {postsElements}
      </div>

    </div >
  )
}

export default MyPosts 