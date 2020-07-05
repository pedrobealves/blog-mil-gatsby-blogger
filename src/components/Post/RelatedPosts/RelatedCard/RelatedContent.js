import React from 'react'
import { Link } from 'gatsby'
const slugify = require('slugify')

const RelatedContent = (props) => {
  const { title, published, slug, labels } = props.content
  const path = props.basePath ? props.basePath : ''

  return (
    <ul className="posts posts--simple-list">
      <li className="posts__item posts__item--category-1">
        <div className="posts__inner">
          <div className="posts__cat">
            <Link
              to={'/' + slugify(labels[0], {
                lower: true,
              })}
            >
              <span className="label posts__cat-label">{labels[0]}</span>
            </Link>
          </div>
          <h6 className="posts__title">
            <Link to={`${path}${slug}`}>{title}</Link>
          </h6>
          <time dateTime="2016-08-23" className="posts__date">
            {published}
          </time>
        </div>
      </li>
    </ul>
  )
}

export default RelatedContent
