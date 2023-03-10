import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {
  const postsElements = props.posts.map((p, index) => <Post count={p.count} contain={p.contain} key={`post-${index}`} />)

  const newPostElement = React.createRef()

  const addText = () => {
    let text = newPostElement.current.value
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    let text = newPostElement.current.value
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={s.myPosts}>

      <div className={s.newPost}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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