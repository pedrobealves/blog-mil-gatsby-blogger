import React from 'react'
import { Link } from 'gatsby'
const slugify = require('slugify')

const PostFooter = ({ labels }) => {
  return (
    <footer className="post__footer">
      <div className="post__tags">
        {labels.slice(0, 25).map((label, { index }) => (
          <Link
            key={label}
            to={
              '/' +
              slugify(label, {
                lower: true,
              })
            }
            className="btn btn-primary btn-outline btn-xs"
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default PostFooter
