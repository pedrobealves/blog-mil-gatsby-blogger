import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CounterButton = ({ url, type, text, icon }) => {
  return (
    <a
      href={url}
      className={'btn-social-counter btn-social-counter--' + type}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="btn-social-counter__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h6 className="btn-social-counter__title">{text}</h6>
      <span className="btn-social-counter__count">
        <span className="btn-social-counter__count-num" />
        Likes
      </span>
      <span className="btn-social-counter__add-icon" />{' '}
    </a>
  )
}

export default CounterButton
