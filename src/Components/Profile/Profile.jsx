import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPost/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPost } from '../../redux/state'

const Profile = (props) => {
  return <main className={s.main}>
    <ProfileInfo />
    <MyPosts posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
  </main>
}

export default Profile


