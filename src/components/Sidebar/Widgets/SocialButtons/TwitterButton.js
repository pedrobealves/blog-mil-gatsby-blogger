import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const TwitterButton = () => {
  return (
    <a
      href="https://twitter.com/blog_mil"
      className="btn-social-counter btn-social-counter--twitter"
      target="_blank"
    >
      <div className="btn-social-counter__icon">
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <h6 className="btn-social-counter__title">Follow Us on Twitter</h6>
      <span className="btn-social-counter__count">
        <span className="btn-social-counter__count-num" />
        Followers
      </span>
      <span className="btn-social-counter__add-icon" />{' '}
    </a>
  )
}

export default TwitterButton
