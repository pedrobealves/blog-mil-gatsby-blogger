import React from 'react'

const RSSButton = () => {
  return (
    <a
      href="http://alchemists.dan-fisher.com/basketball/index.html#"
      className="btn-social-counter btn-social-counter--rss"
      target="_blank"
    >
      <div className="btn-social-counter__icon">
        <i className="fa fa-rss" />
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
