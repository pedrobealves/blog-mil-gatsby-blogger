import React from 'react'
import Logo from '../../../../Common/Logo'
import Nav from './Nav'

const HeaderPrimary = () => {
  return (
    <div className="header__primary">
      <div className="container">
        <div className="header__primary-inner">
          <Logo section="header" />
          <Nav />
        </div>
      </div>
    </div>
  )
}

export default HeaderPrimary
