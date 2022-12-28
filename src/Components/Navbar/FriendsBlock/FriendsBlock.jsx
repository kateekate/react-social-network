import React from 'react'
import s from './FriendsBlock.module.css'
import FriendsItem from '../FriendsItem/FriendsItem'

const FriendsBlock = (props) => {
  return (
    <div className={s.friendsBlock}>
      <p className={s.title}>My friends</p>
      <div className={s.friendsCards}>
        {props.friends.map((friend, index) => (
          <FriendsItem img={friend.img} name={friend.name} key={`friend-${index}`} />
        ))}
      </div>
    </div>
  )
}


export default FriendsBlock
