import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const WidgetContactInfo = () => {
  return (
    <div className="widget widget--footer widget-contact-info">
      <h4 className="widget__title">Contato</h4>
      <div className="widget__content">
        <div className="widget-contact-info__desc">
          <p>
            Um blog com o péssimo hábito de não ter "parte 2", xingar fanbases,
            falar de azeitonas, bolsa de valores e às vezes... games.
          </p>
        </div>
        <div className="widget-contact-info__body info-block">
          <div className="info-block__item">
            <svg role="img" className="df-icon">
              <FontAwesomeIcon icon={faEnvelope} color="#ff6711" />
            </svg>
            <h6 className="info-block__heading">Contate-nos</h6>
            <a className="info-block__link" href="mailto:blogmil@outlook.com">
              blogmil@outlook.com
            </a>
          </div>
          <div className="info-block__item">
            <svg role="img" className="df-icon">
              <FontAwesomeIcon icon={faFacebookF} color="#ff6711" />
            </svg>
            <h6 className="info-block__heading">Siga-nos</h6>
            <a
              className="info-block__link"
              href="https://www.facebook.com/milblog/"
            >
              facebook
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
