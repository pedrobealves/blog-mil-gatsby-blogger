import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CoverImg = styled(Img)`
  height: ${props => props.height || 'auto'};
`

const Card = ({
  slug,
  title,
  published,
  labels,
  childMarkdownRemark,
  cover,
  author,
  ...props
}) => {
  const path = props.basePath ? props.basePath : ''

  return (
    <div className="post-list__item">
      <div className="posts__item posts__item--card posts__item--category-1 card card--block">
        <figure className="posts__thumb">
          <Link to={`${path}/${slug}`}>
            <CoverImg
              fluid={cover.childImageSharp.fluid}
              height={'340px'}
              backgroundColor={'#eeeeee'}
            />
          </Link>
          <a href="#" className="posts__cta" />
        </figure>
        <div className="posts__inner">
          <div className="card__content card__pd">
            <div className="posts__cat">
              {labels.slice(0, 2).map((label, index) => (
                <span key={index} className="label posts__cat-label mr-1 mb-1">
                  {label}
                </span>
              ))}
            </div>
            <h6 className="posts__title">
              <Link to={`${path}/${slug}`}>{title}</Link>
            </h6>
            <time dateTime="2016-08-17" className="posts__date">
              {published}
            </time>
            <div className="posts__excerpt posts__excerpt_pd">
              {childMarkdownRemark.excerpt}
            </div>
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
            {/* <ul className="post__meta meta">
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
              </ul> */}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Card
