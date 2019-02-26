import React from 'react'
import HeaderSearchForm from './HeaderSearchForm'
import DropdownShopCart from './DropdownShopCart'

const HeaderSecondary = () => {
  return (
    <div className="header__secondary">
      <div className="container">
        <HeaderSearchForm />
        <ul className="info-block info-block--header">
          <li className="info-block__item info-block__item--contact-primary">
            <svg role="img" className="df-icon df-icon--jersey">
              <use xlinkHref="assets/images/icons-basket.svg#jersey" />
            </svg>
            <h6 className="info-block__heading">Join</h6>
            <a className="info-block__link" href="mailto:blogmil@blogmil.com">
              blogmil@blogmil.com
            </a>
          </li>
          <li className="info-block__item info-block__item--contact-secondary">
            <svg role="img" className="df-icon df-icon--basketball">
              <use xlinkHref="assets/images/icons-basket.svg#basketball" />
            </svg>
            <h6 className="info-block__heading">Contact Us</h6>
            <a className="info-block__link" href="mailto:info@alchemists.com">
              info@blogmil.com
            </a>
          </li>
          <li className="info-block__item info-block__item--shopping-cart has-children">
            <a
              href="http://alchemists.dan-fisher.com/basketball/index.html#"
              className="info-block__link-wrapper"
            >
              <div className="df-icon-stack df-icon-stack--bag">
                <svg role="img" className="df-icon df-icon--bag">
                  <use xlinkHref="assets/images/icons-basket.svg#bag" />
                </svg>
                <svg role="img" className="df-icon df-icon--bag-handle">
                  <use xlinkHref="assets/images/icons-basket.svg#bag-handle" />
                </svg>
              </div>
              <h6 className="info-block__heading">Your Bag (8 items)</h6>
              <span className="info-block__cart-sum">$256,30</span>{' '}
            </a>
            <DropdownShopCart />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderSecondary
