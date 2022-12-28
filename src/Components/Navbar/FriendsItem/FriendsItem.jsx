import React from 'react'
import s from './FriendsItem.module.css'

const FriendsItem = (props) => {

  return (
    <div className={s.container}>

      <img className={s.friendAvatar} src={props.img} alt={props.name} />
      <p>{props.name}</p>

    </div>
  )
}


export default FriendsItem