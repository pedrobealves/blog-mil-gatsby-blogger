import React from 'react'
import Social from './Social'
import PushyPanel from './PushyPanel'

const HeaderLogo = () => {
  return (
    <nav className="main-nav clearfix">
      <ul className="main-nav__list">
        <div className="header-mobile__logo">
          <span className="main-nav__back" />
          <a href="http://alchemists.dan-fisher.com/basketball/index.html">
            <img
              src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/logo.png"
              srcSet="assets/images/logo@2x.png 2x"
              alt="Alchemists"
              className="header-mobile__logo-img"
            />
          </a>
        </div>
        <li className="active has-children">
          <span className="main-nav__toggle" />
          <a href="http://alchemists.dan-fisher.com/basketball/index.html">
            Home
          </a>
          <ul className="main-nav__sub">
            <li className="active">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html">
                Home - version 1
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/index-2.html">
                Home - version 2
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/index-3.html">
                Home - version 3
              </a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <span className="main-nav__toggle" />
          <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
            Features
          </a>
          <div className="main-nav__megamenu clearfix">
            <ul className="col-lg-2 col-md-3 col-12 main-nav__ul">
              <li className="main-nav__title">Features</li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-shortcodes.html">
                  Shortcodes
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-typography.html">
                  Typography
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-widgets-blog.html">
                  Widgets - Blog
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-widgets-shop.html">
                  Widgets - Shop
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-widgets-sports.html">
                  Widgets - Sports
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-404.html">
                  404 Error Page
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/features-search-results.html">
                  Search Results
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/page-contacts.html">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="col-lg-2 col-md-3 col-12 main-nav__ul">
              <li className="main-nav__title">Main Features</li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/team-overview.html">
                  Team Overview
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/team-roster-2.html">
                  Team Roster
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/staff-single.html">
                  Staff Member
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/shop-list.html">
                  Shop Page V1
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/shop-grid.html">
                  Shop Page V2
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/shop-cart.html">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/shop-wishlist.html">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="http://alchemists.dan-fisher.com/basketball/shop-checkout.html">
                  Checkout
                </a>
              </li>
            </ul>
            <div className="col-lg-4 col-md-3 col-12">
              <div className="posts posts--simple-list posts--simple-list--lg">
                <div className="posts__item posts__item--category-1">
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">The Team</span>
                    </div>
                    <h6 className="posts__title">
                      <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                        The team is starting a new power breakfast regimen
                      </a>
                    </h6>
                    <time dateTime="2017-08-23" className="posts__date">
                      August 23rd, 2017
                    </time>
                    <div className="posts__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisi nel elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                  <div className="posts__footer card__footer">
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-1.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">James Spiegel</h4>
                      </div>
                    </div>
                    <ul className="post__meta meta">
                      <li className="meta__item meta__item--likes">
                        <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                          <i className="meta-like meta-like--active icon-heart" />
                          530
                        </a>
                      </li>
                      <li className="meta__item meta__item--comments">
                        <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                          18
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-12">
              <ul className="posts posts--simple-list">
                <li className="posts__item posts__item--category-1">
                  <figure className="posts__thumb">
                    <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                      <img
                        src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img3-xs.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">The Team</span>
                    </div>
                    <h6 className="posts__title">
                      <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                        The new eco friendly stadium won a Leafy Award in 2016
                      </a>
                    </h6>
                    <time dateTime="2016-08-21" className="posts__date">
                      August 21st, 2016
                    </time>
                  </div>
                </li>
                <li className="posts__item posts__item--category-2">
                  <figure className="posts__thumb">
                    <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                      <img
                        src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img1-xs.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">Injuries</span>
                    </div>
                    <h6 className="posts__title">
                      <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                        Mark Johnson has a Tibia Fracture and is gonna be out
                      </a>
                    </h6>
                    <time dateTime="2016-08-23" className="posts__date">
                      August 23rd, 2016
                    </time>
                  </div>
                </li>
                <li className="posts__item posts__item--category-1">
                  <figure className="posts__thumb">
                    <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                      <img
                        src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img4-xs.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">The Team</span>
                    </div>
                    <h6 className="posts__title">
                      <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                        The team is starting a new power breakfast regimen
                      </a>
                    </h6>
                    <time dateTime="2016-08-21" className="posts__date">
                      August 21st, 2016
                    </time>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="has-children">
          <span className="main-nav__toggle" />
          <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
            The Team
          </a>
          <ul className="main-nav__sub">
            <li>
              <a href="http://alchemists.dan-fisher.com/basketball/team-overview.html">
                Overview
              </a>
            </li>
            <li className="has-children">
              <span className="main-nav__toggle-2" />
              <a href="http://alchemists.dan-fisher.com/basketball/team-roster-2.html">
                Roster
              </a>
              <ul className="main-nav__sub-2">
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/team-roster-1.html">
                    Roster - 1
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/team-roster-2.html">
                    Roster - 2
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/team-roster-3.html">
                    Roster - 3 &nbsp;
                    <span className="label label-danger">New</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://alchemists.dan-fisher.com/basketball/team-standings.html">
                Standings
              </a>
            </li>
            <li>
              <a href="http://alchemists.dan-fisher.com/basketball/team-last-results.html">
                Latest Results
              </a>
            </li>
            <li>
              <a href="http://alchemists.dan-fisher.com/basketball/team-schedule.html">
                Schedule
              </a>
            </li>
            <li className="has-children">
              <span className="main-nav__toggle-2" />
              <a href="http://alchemists.dan-fisher.com/basketball/team-gallery.html">
                Gallery
              </a>
              <ul className="main-nav__sub-2">
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/team-gallery-album.html">
                    Single Album
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <span className="main-nav__toggle-2" />
              <a href="http://alchemists.dan-fisher.com/basketball/player-overview.html">
                Player Pages
              </a>
              <ul className="main-nav__sub-2">
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/player-overview.html">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/player-stats.html">
                    Full Statistics
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/player-bio.html">
                    Biography
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/player-news.html">
                    Related News
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/player-gallery.html">
                    Gallery
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://alchemists.dan-fisher.com/basketball/staff-single.html">
                Staff Member
              </a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <span className="main-nav__toggle" />
          <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
            News
          </a>
          <ul className="main-nav__sub">
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/blog-1.html">
                News - version 1
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/blog-2.html">
                News - version 2
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/blog-3.html">
                News - version 3
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/blog-4.html">
                News - version 4
              </a>
            </li>
            <li className="has-children">
              <span className="main-nav__toggle-2" />
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                Post
              </a>
              <ul className="main-nav__sub-2">
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html">
                    Single Post - version 1
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/blog-post-2.html">
                    Single Post - version 2
                  </a>
                </li>
                <li>
                  <a href="http://alchemists.dan-fisher.com/basketball/blog-post-3.html">
                    Single Post - version 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <span className="main-nav__toggle" />
          <a href="http://alchemists.dan-fisher.com/basketball/shop-grid.html">
            Shop
          </a>
          <ul className="main-nav__sub">
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-grid.html">
                Shop - Grid
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-list.html">
                Shop - List
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-fullwidth.html">
                Shop - Full Width
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-product.html">
                Single Product
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-cart.html">
                Shopping Cart
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-checkout.html">
                Checkout
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-wishlist.html">
                Wishlist
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-login.html">
                Login
              </a>
            </li>
            <li className="">
              <a href="http://alchemists.dan-fisher.com/basketball/shop-account.html">
                Account
              </a>
            </li>
          </ul>
        </li>
        <li className="main-nav__item--shopping-cart">
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
            <span className="info-block__cart-sum">$256,30</span>
          </a>
        </li>
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
        <li className="info-block__item info-block__item--contact-primary">
          <svg role="img" className="df-icon df-icon--jersey">
            <use xlinkHref="assets/images/icons-basket.svg#jersey" />
          </svg>
          <h6 className="info-block__heading">Join Our Team!</h6>
          <a className="info-block__link" href="mailto:tryouts@alchemists.com">
            tryouts@alchemists.com
          </a>
        </li>
        <li className="info-block__item info-block__item--contact-secondary">
          <svg role="img" className="df-icon df-icon--basketball">
            <use xlinkHref="assets/images/icons-basket.svg#basketball" />
          </svg>
          <h6 className="info-block__heading">Contact Us</h6>
          <a className="info-block__link" href="mailto:info@alchemists.com">
            info@alchemists.com
          </a>
        </li>
        <li className="main-nav__item--social-links">
          <a
            href="http://alchemists.dan-fisher.com/basketball/index.html#"
            className="social-links__link"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Facebook"
          >
            <i className="fa fa fa-facebook" />
          </a>
          <a
            href="http://alchemists.dan-fisher.com/basketball/index.html#"
            className="social-links__link"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Twitter"
          >
            <i className="fa fa fa-twitter" />
          </a>
          <a
            href="http://alchemists.dan-fisher.com/basketball/index.html#"
            className="social-links__link"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Google+"
          >
            <i className="fa fa fa-google-plus" />
          </a>
        </li>
      </ul>
      <Social />
      <PushyPanel />
    </nav>
  )
}

export default HeaderLogo
