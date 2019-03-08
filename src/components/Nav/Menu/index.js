import React from 'react'
import MenuItens from './MenuItens'
import logo from '../../../images/logo.png'
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <ul className="main-nav__list">
      <div className="header-mobile__logo">
        <span className="main-nav__back" />
        <Link to={'/'}>
          <img
            src={logo}
            srcSet="assets/images/logo@2x.png 2x"
            alt="Alchemists"
            className="header-mobile__logo-img"
          />
        </Link>
      </div>
      <MenuItens header />
    </ul>
  )
}

export default Menu
