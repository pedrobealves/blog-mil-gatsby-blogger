import React from 'react'
import { Link } from 'gatsby'
const slugify = require('slugify')

const SimpleCard = ({ labels, childMarkdownRemark, ...props }) => {
  const { title, date, slug } = childMarkdownRemark.frontmatter
  const path = props.basePath ? props.basePath : ''

  return (
    <li className="posts__item card posts__item--category-2">
      <div className="posts__inner card__content">
        <div className="posts__cat">
          <Link
            to={
              '/' +
              slugify(labels[0], {
                lower: true,
              })
            }
          >
            <span className="label posts__cat-label">{labels[0]}</span>
          </Link>
        </div>
        <h6 className="posts__title">
          <Link to={`${path}${slug}`}>{title}</Link>
        </h6>
        <time dateTime="2017-08-23" className="posts__date">
          {date}
        </time>
        <div className="posts__excerpt">{childMarkdownRemark.excerpt}</div>
      </div>
    </li>
  )
}

export default SimpleCard
