import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return <header className={s.header}>
    <div>  <img className={s.logo} src='https://freesvg.org/img/shyladyface1924.png' alt='logotype' /></div>
  </header>
}

export default Header 