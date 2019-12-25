import React from 'react'
import ThemeContext from '../../../../../../context/ThemeContext'

const DropdownShopCart = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <ul className="header-cart">
          {/* <li className="header-cart__item header-cart__item--subtotal">
            <span className="header-cart__subtotal">Modo Escuro</span>
            <span className="header-cart__subtotal-sum">
              <label className="checkbox checkbox-inline mr-2">
                <input
                  type="checkbox"
                  id="inlineCheckbox1"
                  checked={theme.dark}
                  onClick={theme.toggleDark}
                />
                <span className="checkbox-indicator" />
              </label>
            </span>
      </li> */}
          <li className="header-cart__item header-cart__item--subtotal">
            <span className="header-cart__subtotal">Estender</span>
            <span className="header-cart__subtotal-sum">
              <label className="checkbox checkbox-inline mr-2">
                <input
                  type="checkbox"
                  id="inlineCheckbox1"
                  checked={theme.full}
                  onClick={theme.toggleFull}
                />
                <span className="checkbox-indicator" />
              </label>
            </span>
          </li>
          <li className="header-cart__item header-cart__item--action">
            <a href="#" className="btn btn-default btn-block">
              Limpar
            </a>
            <a href="#" className="btn btn-primary-inverse btn-block">
              Ativar
            </a>
          </li>
        </ul>
      )}
    </ThemeContext.Consumer>
  )
}

export default DropdownShopCart
