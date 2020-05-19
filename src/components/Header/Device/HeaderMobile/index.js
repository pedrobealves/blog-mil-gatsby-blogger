import React, { useState } from 'react'
import Logo from '../../../Common/Logo/Mobile'
import ThemeContext from '../../../../context/ThemeContext'
import classnames from 'classnames'
import Search from '../../../Search'

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
      <Logo />
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
      {searchOpen && <Search />}
    </div>
  )
}

export default HeaderMobile
