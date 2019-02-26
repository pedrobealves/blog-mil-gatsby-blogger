import React from 'react'
import Social from './Social'
import PushyPanel from './PushyPanel'
import Menu from './Menu'

const Nav = () => {
  return (
    <nav className="main-nav clearfix">
      <Menu />
      <Social />
      <PushyPanel />
    </nav>
  )
}

export default Nav
