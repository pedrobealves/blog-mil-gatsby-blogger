import React from 'react'
import { Link } from 'gatsby'
const slugify = require('slugify')

const Label = ({ text }) => {
  return (
    <Link
      to={
        '/' +
        slugify(text, {
          lower: true,
        })
      }
      className="btn btn-primary btn-xs btn-outline btn-sm"
    >
      {text}
    </Link>
  )
}

export default Label
