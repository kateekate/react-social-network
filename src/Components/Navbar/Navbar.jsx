import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import FriendsBlock from './FriendsBlock/FriendsBlock'

const Navbar = (props) => {

  return <div className={s.nav}>
    <div className={s.navBlock}>

      <div>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/profile' >Profile</NavLink>
      </div>
      <div>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/dialogues'>Messages</NavLink>
      </div>
      <div>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/news'>News</NavLink>
      </div>
      <div>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settings'>Settings</NavLink>
      </div>

    </div>
    <FriendsBlock friends={props.state.friends} />

  </div>

}

export default Navbar