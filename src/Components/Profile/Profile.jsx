import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPost/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return <main className={s.main}>
    <ProfileInfo />
    <MyPosts posts={props.state.posts} />
  </main>
}

export default Profile


