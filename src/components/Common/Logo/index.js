import React from 'react'
import logo from '../../../images/logo.svg'
import { Link } from 'gatsby'

const Logo = ({ section }) => {
  return (
    <div className={section + '-logo'}>
      <Link to={'/'}>
        <img
          src={logo}
          alt="Alchemists"
          srcSet="assets/images/logo@2x.png 2x"
          className={section + '-logo__img w-75'}
        />
      </Link>
    </div>
  )
}

export default Logo
