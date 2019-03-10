import React from 'react'

const SharingButtons = () => {
  return (
    <div className="post-sharing">
      <a
        href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#"
        className="btn btn-default btn-facebook btn-icon btn-block"
      >
        <i className="fa fa-facebook" />
        <span className="post-sharing__label hidden-xs">Share on Facebook</span>
      </a>
      <a
        href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#"
        className="btn btn-default btn-twitter btn-icon btn-block"
      >
        <i className="fa fa-twitter" />
        <span className="post-sharing__label hidden-xs">Share on Twitter</span>
      </a>
      <a
        href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#"
        className="btn btn-default btn-gplus btn-icon btn-block"
      >
        <i className="fa fa-google-plus" />
        <span className="post-sharing__label hidden-xs">Share on Google+</span>
      </a>
    </div>
  )
}

export default SharingButtons
