import React from 'react'

const NavBar = () => {
  return (
    <ul className="nav-account">
      <li className="nav-account__item">
        <a
          href="http://alchemists.dan-fisher.com/basketball/index.html#"
          data-toggle="modal"
          data-target="#modal-login-register"
        >
          Your Account
        </a>
      </li>
      <li className="nav-account__item nav-account__item--wishlist">
        <a href="http://alchemists.dan-fisher.com/basketball/shop-wishlist.html">
          Wishlist <span className="highlight">8</span>
        </a>
      </li>
      <li className="nav-account__item has-children">
        <span className="main-nav__toggle" />
        <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
          Currency: <span className="highlight">USD</span>
        </a>
        <ul className="main-nav__sub">
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              USD
            </a>
          </li>
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              EUR
            </a>
          </li>
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              GBP
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-account__item has-children">
        <span className="main-nav__toggle" />
        <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
          Language: <span className="highlight">EN</span>
        </a>
        <ul className="main-nav__sub">
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              English
            </a>
          </li>
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              Spanish
            </a>
          </li>
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              French
            </a>
          </li>
          <li>
            <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
              German
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-account__item nav-account__item--logout">
        <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
          Logout
        </a>
      </li>
    </ul>
  )
}

export default NavBar
