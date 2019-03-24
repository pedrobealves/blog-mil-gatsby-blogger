import React from 'react'

const NavBar = () => {
  return (
    <ul className="nav-account">
      <li className="nav-account__item has-children">
        <span className="main-nav__toggle" />
        <a href="#">
          Language: <span className="highlight">PT</span>
        </a>
        <ul className="main-nav__sub">
          <li>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">Spanish</a>
          </li>
          <li>
            <a href="#">French</a>
          </li>
          <li>
            <a href="#">German</a>
          </li>
        </ul>
      </li>
      <li className="nav-account__item nav-account__item--logout">
        <a href="#">Sair</a>
      </li>
    </ul>
  )
}

export default NavBar
