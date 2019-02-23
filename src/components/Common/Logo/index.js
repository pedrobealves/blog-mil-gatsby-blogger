import React from 'react'
import logo from '../../../images/logo.svg'

const Logo = ({ section }) => {
  return (
    <div className={section + '-logo'}>
      <a href="/">
        <img
          src={logo}
          alt="Alchemists"
          srcSet="assets/images/logo@2x.png 2x"
          className={section + '-logo__img w-75'}
        />
      </a>
    </div>
  )
}

export default Logo
