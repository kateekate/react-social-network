import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>

      <img src="https://cdn.shopify.com/s/files/1/0014/2648/9388/products/aniplex-pvc-scale-figures-my-dress-up-darling-marin-kitagawa-swimsuit-ver-1-7-scale-figure-31778866724908_360x.jpg?v=1667515608' alt='avatar' />" alt="lil_avatar" />
      <p>{props.contain}</p>

      <div><span> Like {props.count}</span></div>
    </div>
  )
}

export default Post 