import React from 'react'

const DropdownShopCart = () => {
  return (
    <ul className="header-cart">
      <li className="header-cart__item header-cart__item--subtotal">
        <span className="header-cart__subtotal">Modo Escuro</span>
        <span className="header-cart__subtotal-sum">
          <label className="checkbox checkbox-inline mr-2">
            <input type="checkbox" id="inlineCheckbox1" value="option2" />
            <span className="checkbox-indicator" />
          </label>
        </span>
      </li>
      <li className="header-cart__item header-cart__item--subtotal">
        <span className="header-cart__subtotal">Tela Cheia</span>
        <span className="header-cart__subtotal-sum">
          <label className="checkbox checkbox-inline mr-2">
            <input type="checkbox" id="inlineCheckbox1" value="option2" />
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
  )
}

export default DropdownShopCart
