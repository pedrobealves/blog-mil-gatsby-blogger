import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

const RSSButton = () => {
  return (
    <a
      href="#"
      className="btn-social-counter btn-social-counter--rss"
      target="_blank"
    >
      <div className="btn-social-counter__icon">
        <FontAwesomeIcon icon={faRss} />
      </div>
      <h6 className="btn-social-counter__title">Subscribe to Our RSS</h6>
      <span className="btn-social-counter__count">
        <span className="btn-social-counter__count-num">840</span>
        Subscribers
      </span>
      <span className="btn-social-counter__add-icon" />
    </a>
  )
}

export default RSSButton
