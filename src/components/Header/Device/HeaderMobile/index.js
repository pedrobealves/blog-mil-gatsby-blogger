import React, { useState } from 'react'
import logo from '../../../../images/logo.png'
import ThemeContext from '../../../../context/ThemeContext'
import classnames from 'classnames'
import { Link } from 'gatsby'

const HeaderMobile = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div
      className={classnames(
        'header-mobile clearfix',
        searchOpen && 'header-mobile--expanded'
      )}
      id="header-mobile"
    >
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
      <div className="header-mobile__inner">
        <ThemeContext.Consumer>
          {theme => (
            <a
              id="header-mobile__toggle"
              className="burger-menu-icon"
              onClick={theme.toogleMenu}
            >
              <span className="burger-menu-icon__line" />
            </a>
          )}
        </ThemeContext.Consumer>
        <span
          className={classnames(
            'header-mobile__search-icon',
            searchOpen && 'header-mobile__search-icon--close'
          )}
          id="header-mobile__search-icon"
          onClick={() => setSearchOpen(!searchOpen)}
        />
      </div>
      <div className="header-search-form">
        <form action="#" id="mobile-search-form" className="search-form">
          <input
            type="text"
            className="form-control header-mobile__search-control"
            value=""
            placeholder="Digite sua pesquisa aqui..."
          />
          <button type="submit" className="header-mobile__search-submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default HeaderMobile
