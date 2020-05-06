import React from 'react'
import logo from '../../../images/logo.svg'
import { Link, graphql, StaticQuery } from 'gatsby'

const Logo = ({ section }) => {
  return (
    <div className={section + '-logo'}>
      <Link to={'/'}>
        <img
          src={logo}
          alt="Blog MIL"
          className={section + '-logo__img w-50'}
        />
      </Link>
    </div>
  )
}

export default Logo
