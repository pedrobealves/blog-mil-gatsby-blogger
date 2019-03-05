import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PopularPost = ({ childMarkdownRemark, labels, cover }) => {
  return (
    <li className="posts__item posts__item--category-1">
      <figure className="posts__thumb">
        <Link to={childMarkdownRemark.frontmatter.slug}>
          <img
            src={cover.childImageSharp.fixed.src}
          />
        </Link>
      </figure>
      <div className="posts__inner">
        <div className="posts__cat">
          {labels.slice(0, 2).map((label, index) => (
            <span key={index} className="label posts__cat-label mr-1 mb-1">
              {label}
            </span>
          ))}
        </div>
        <h6 className="posts__title">
          <Link to={childMarkdownRemark.frontmatter.slug}>
            {childMarkdownRemark.frontmatter.title}
          </Link>
        </h6>
        <time dateTime="2016-08-23" className="posts__date">
          August 22nd, 2018
        </time>
      </div>
    </li>
  )
}

export default PopularPost
