import React from 'react'
import { Link } from 'gatsby'
const slugify = require('slugify')

const PostCategory = ({ label }) => {
  return (
    <div className="post__category">
      <Link
        to={
          '/' +
          slugify(label, {
            lower: true,
          })
        }
      >
        {' '}
        <span className="label posts__cat-label">{label}</span>
      </Link>
    </div>
  )
}

export default PostCategory
