import React from 'react'

const DropdownShopCart = () => {
  return (
    <ul className="header-cart">
      <li className="header-cart__item">
        <figure className="header-cart__product-thumb">
          <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
            <img
              src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/cart-sm-1.jpg"
              alt=""
            />
          </a>
        </figure>
        <div className="header-cart__inner">
          <span className="header-cart__product-cat">Sneakers</span>
          <h5 className="header-cart__product-name">
            <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
              Sundown Sneaker
            </a>
          </h5>
          <div className="header-cart__product-ratings">
            <i className="fa fa-star" /> <i className="fa fa-star" />
            <i className="fa fa-star" /> <i className="fa fa-star" />
            <i className="fa fa-star empty" />
          </div>
          <div className="header-cart__product-sum">
            <span className="header-cart__product-price">$28.00</span> x
            <span className="header-cart__product-count">2</span>
          </div>
          <div className="fa fa-times header-cart__close" />
        </div>
      </li>
      <li className="header-cart__item">
        <figure className="header-cart__product-thumb">
          <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
            <img
              src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/cart-sm-2.jpg"
              alt=""
            />
          </a>
        </figure>
        <div className="header-cart__inner">
          <span className="header-cart__product-cat">Sneakers</span>
          <h5 className="header-cart__product-name">
            <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
              Atlantik Sneaker
            </a>
          </h5>
          <div className="header-cart__product-ratings">
            <i className="fa fa-star" /> <i className="fa fa-star" />
            <i className="fa fa-star" /> <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="header-cart__product-sum">
            <span className="header-cart__product-price">$30.00</span> x
            <span className="header-cart__product-count">4</span>
          </div>
          <div className="fa fa-times header-cart__close" />
        </div>
      </li>
      <li className="header-cart__item">
        <figure className="header-cart__product-thumb">
          <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
            <img
              src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/cart-sm-3.jpg"
              alt=""
            />
          </a>
        </figure>
        <div className="header-cart__inner">
          <span className="header-cart__product-cat">Sneakers</span>
          <h5 className="header-cart__product-name">
            <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
              Aquarium Sneaker
            </a>
          </h5>
          <div className="header-cart__product-ratings">
            <i className="fa fa-star" /> <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star empty" />
            <i className="fa fa-star empty" />
          </div>
          <div className="header-cart__product-sum">
            <span className="header-cart__product-price">$28.00</span> x
            <span className="header-cart__product-count">1</span>
          </div>
          <div className="fa fa-times header-cart__close" />
        </div>
      </li>
      <li className="header-cart__item header-cart__item--subtotal">
        <span className="header-cart__subtotal">Cart Subtotal</span>
        <span className="header-cart__subtotal-sum">$282.00</span>
      </li>
      <li className="header-cart__item header-cart__item--action">
        <a
          href="http://alchemists.dan-fisher.com/basketball/shop-cart.html"
          className="btn btn-default btn-block"
        >
          Go to Cart
        </a>
        <a
          href="http://alchemists.dan-fisher.com/basketball/shop-checkout.html"
          className="btn btn-primary-inverse btn-block"
        >
          Checkout
        </a>
      </li>
    </ul>
  )
}

export default DropdownShopCart
