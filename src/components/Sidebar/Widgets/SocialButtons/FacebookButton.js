import React from 'react'

const FacebookButton = () => {
  return (
    <a
      href="http://alchemists.dan-fisher.com/basketball/index.html#"
      className="btn-social-counter btn-social-counter--fb"
      target="_blank"
    >
      <div className="btn-social-counter__icon">
        <i className="fa fa-facebook" />
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
