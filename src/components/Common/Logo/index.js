import React from 'react'
import logo from '../../../images/logo.png'
import { Link } from 'gatsby'

const Logo = ({ section }) => {
  return (
    <div className={section + '-logo'}>
      <Link to={'/'}>
        <img
          src={logo}
          alt="Blog MIL"
          srcSet={logo}
          className={section + '-logo__img w-75'}
        />
      </Link>
    </div>
  )
}

export default Logo
