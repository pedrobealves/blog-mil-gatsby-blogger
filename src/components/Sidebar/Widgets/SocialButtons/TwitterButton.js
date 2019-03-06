import React from 'react'

const TwitterButton = () => {
  return (
    <a
      href="https://twitter.com/danfisher_dev"
      className="btn-social-counter btn-social-counter--twitter"
      target="_blank"
    >
      <div className="btn-social-counter__icon">
        <i className="fa fa-twitter" />
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
