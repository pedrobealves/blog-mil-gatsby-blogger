import React from 'react'
import MenuItens from './MenuItens'
import Logo from '../../Common/Logo/Mobile'
import ThemeContext from '../../../context/ThemeContext'

const Menu = props => {
  return (
    <ul className="main-nav__list">
      <Logo />
      <ThemeContext.Consumer>
        {theme => (
          <span className="main-nav__back" onClick={theme.toogleMenu} />
        )}
      </ThemeContext.Consumer>
      <MenuItens header />
    </ul>
  )
}

export default Menu
