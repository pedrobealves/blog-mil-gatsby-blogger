import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Card = ({
  slug,
  title,
  published,
  childMarkdownRemark,
  author,
  ...props
}) => {
  return (
    <div className="post-list__item">
      <div className="posts__item posts__item--card posts__item--category-1 card card--block">
        <figure className="posts__thumb">
          <Link to={`/${slug}/`}>
            <img src={childMarkdownRemark.frontmatter.cover} alt="" />
          </Link>
          <a href="#" className="posts__cta" />
        </figure>
        <div className="posts__inner">
          <div className="card__content">
            <div className="posts__cat">
              <span className="label posts__cat-label">The Team</span>
            </div>
            <h6 className="posts__title">
              <Link to={`/${slug}/`}>{title}</Link>
            </h6>
            <time dateTime="2016-08-17" className="posts__date">
              {published}
            </time>
            <div className="posts__excerpt">{childMarkdownRemark.excerpt}</div>
          </div>
          <footer className="posts__footer card__footer">
            <div className="post-author">
              <figure className="post-author__avatar">
                <img src={author.image.url} alt="Post Author Avatar" />
              </figure>
              <div className="post-author__info">
                <h4 className="post-author__name">{author.displayName}</h4>
              </div>
            </div>
            <ul className="post__meta meta">
              <li className="meta__item meta__item--views">2369</li>
              <li className="meta__item meta__item--likes">
                <a href="#">
                  <i className="meta-like icon-heart" />
                  530
                </a>
              </li>
              <li className="meta__item meta__item--comments">
                <a href="#">18</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Card
