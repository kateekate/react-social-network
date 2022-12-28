import React from "react"
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  return (
    <div className={s.avatarWrapper}><img className={s.avatar} src='https://cdn.shopify.com/s/files/1/0014/2648/9388/products/aniplex-pvc-scale-figures-my-dress-up-darling-marin-kitagawa-swimsuit-ver-1-7-scale-figure-31778866724908_360x.jpg?v=1667515608' alt='avatar' /></div>
  )
}

export default ProfileInfo