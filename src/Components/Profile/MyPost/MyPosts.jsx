import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  console.log(props)
  const postsElements = props.posts.map((p, index) => <Post count={p.count} contain={p.contain} key={`post-${index}`} />)

  const newPostElement = React.createRef()
  const addText = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  return (
    <div className={s.myPosts}>

      <div className={s.newPost}>
        <textarea ref={newPostElement} placeholder='Write something interesting' />
        <button onClick={addText}>New Post</button>
      </div>

      <p className={s.allContent}>All Content</p>

      <div className={s.posts}>
        {postsElements}
      </div>

    </div >
  )
}

export default MyPosts 