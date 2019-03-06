import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const FacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/milblog/"
      className="btn-social-counter btn-social-counter--fb"
      target="_blank"
    >
      <div className="btn-social-counter__icon">
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <h6 className="btn-social-counter__title">Like Our Facebook Page</h6>
      <span className="btn-social-counter__count">
        <span className="btn-social-counter__count-num" />
        Likes
      </span>
      <span className="btn-social-counter__add-icon" />{' '}
    </a>
  )
}

export default FacebookButton
