import React from 'react'
import HeaderSearchForm from './HeaderSearchForm'
import DropdownShopCart from './DropdownShopCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'

const HeaderSecondary = () => {
  return (
    <div className="header__secondary">
      <div className="container">
        <HeaderSearchForm />
        <ul className="info-block info-block--header">
          <li className="info-block__item info-block__item--contact-primary">
            <h6 className="info-block__heading">Contate-nos</h6>
            <a className="info-block__link" href="mailto:blogmil@outlook.com">
              blogmil@outlook.com
            </a>
          </li>
          <li className="info-block__item info-block__item--contact-secondary">
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
              <h6 className="info-block__heading">Mais</h6>
              <span className="info-block__cart-sum">
                <FontAwesomeIcon icon={faClone} size="xs" color="#ff6711" />
              </span>
            </a>
            <DropdownShopCart />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderSecondary
