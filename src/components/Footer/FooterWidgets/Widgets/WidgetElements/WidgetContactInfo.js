import React from 'react'

const WidgetContactInfo = () => {
  return (
    <div className="widget widget--footer widget-contact-info">
      <h4 className="widget__title">Contact Info</h4>
      <div className="widget__content">
        <div className="widget-contact-info__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="widget-contact-info__body info-block">
          <div className="info-block__item">
            <svg role="img" className="df-icon df-icon--basketball">
              <use xlinkHref="assets/images/icons-basket.svg#basketball" />
            </svg>
            <h6 className="info-block__heading">Contate-nos</h6>
            <a className="info-block__link" href="blogmil@outlook.com">
              blogmil@outlook.com
            </a>
          </div>
          <div className="info-block__item">
            <svg role="img" className="df-icon df-icon--jersey">
              <use xlinkHref="assets/images/icons-basket.svg#jersey" />
            </svg>
            <h6 className="info-block__heading">Increva-se</h6>
            <a className="info-block__link" href="blogmil@outlook.com">
              info@blogmil.com
            </a>
          </div>
          <div className="info-block__item info-block__item--nopadding">
            <ul className="social-links">
              <li className="social-links__item">
                <a href="#" className="social-links__link">
                  <i className="fa fa-facebook" /> Facebook
                </a>
              </li>
              <li className="social-links__item">
                <a href="#" className="social-links__link">
                  <i className="fa fa-twitter" /> Twitter
                </a>
              </li>
              <li className="social-links__item">
                <a href="#" className="social-links__link">
                  <i className="fa fa-google-plus" /> Google+
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetContactInfo
