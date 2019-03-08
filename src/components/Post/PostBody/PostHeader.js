import React from 'react'
import { Link } from 'gatsby'

const PostThumbnail = ({ header }) => {
  return (
    <header className="post__header">
      <Link to={`${header.slug}`}>
        <h2 className="post__title">{header.title}</h2>
      </Link>
      <ul className="post__meta meta">
        <li className="meta__item meta__item--date">
          <time dateTime="2017-08-23">{header.date}</time>
        </li>
        <li className="meta__item meta__item--views">2369</li>
        <li className="meta__item meta__item--likes">
          <a href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#">
            <i className="meta-like icon-heart" />
            530
          </a>
        </li>
        <li className="meta__item meta__item--comments">
          <a href="http://alchemists.dan-fisher.com/basketball/blog-post-1.html#">
            18
          </a>
        </li>
      </ul>
    </header>
  )
}

export default PostThumbnail
