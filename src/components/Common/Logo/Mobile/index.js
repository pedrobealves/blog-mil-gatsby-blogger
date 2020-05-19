import React from 'react'
import logo from '../../../../images/logo.svg'
import { Link } from 'gatsby'

const Logo = () => {
  return (
    <div className="header-mobile__logo">
      <Link to={'/'}>
        <img
          src={logo}
          srcSet={logo + ' 2x'}
          alt="Blog MIL"
          className="header-mobile__logo-img pt-3"
        />
      </Link>
    </div>
  )
}

export default Logo
