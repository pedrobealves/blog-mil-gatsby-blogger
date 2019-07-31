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
            <h6 className="info-block__heading">Contate-nos</h6>
            <a className="info-block__link" href="mailto:blogmil@outlook.com">
              blogmil@outlook.com
            </a>
          </li>
          <li className="info-block__item info-block__item--contact-secondary">
            <svg role="img" className="df-icon df-icon--basketball">
              <use xlinkHref="assets/images/icons-basket.svg#basketball" />
            </svg>
            <h6 className="info-block__heading">Siga-nos</h6>
            <a
              className="info-block__link"
              href="https://www.facebook.com/milblog/"
            >
              facebook
            </a>
          </li>
          <li className="info-block__item info-block__item--shopping-cart has-children">
            <a href="#" className="info-block__link-wrapper">
              <div className="df-icon-stack df-icon-stack--bag">
                <svg role="img" className="df-icon df-icon--bag">
                  <use xlinkHref="assets/images/icons-basket.svg#bag" />
                </svg>
                <svg role="img" className="df-icon df-icon--bag-handle">
                  <use xlinkHref="assets/images/icons-basket.svg#bag-handle" />
                </svg>
              </div>
              <h6 className="info-block__heading">Configurações</h6>
              <span className="info-block__cart-sum">></span>{' '}
            </a>
            <DropdownShopCart />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderSecondary
