import React from 'react'
import MenuItens from './MenuItens'
import logo from '../../../images/logo.png'
import ThemeContext from '../../../context/ThemeContext'
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <ul className="main-nav__list">
      <div className="header-mobile__logo">
        <ThemeContext.Consumer>
          {theme => (
            <span className="main-nav__back" onClick={theme.toogleMenu} />
          )}
        </ThemeContext.Consumer>

        <Link to={'/'}>
          <img
            src={logo}
            srcSet={logo + ' 2x'}
            alt="Blog MIL"
            className="header-mobile__logo-img"
          />
        </Link>
      </div>
      <MenuItens header />
    </ul>
  )
}

export default Menu
