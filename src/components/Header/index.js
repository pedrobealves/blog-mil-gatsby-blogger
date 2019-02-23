import React from 'react'
import HeaderMobile from './Device/HeaderMobile'
import HeaderDesktop from './Device/HeaderDesktop'

const Header = () => {
  return (
    <React.Fragment>
      <HeaderMobile />
      <HeaderDesktop />
    </React.Fragment>
  )
}

export default Header
