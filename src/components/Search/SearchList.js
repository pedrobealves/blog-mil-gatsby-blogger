import React from 'react'
import { Link } from 'gatsby'
import { List } from './styles'

const SearchList = ({ results, isActive }) => {
  const size = results.length

  const item = post => (
    <li>
      <Link to={post.slug}>{post.title}</Link>
    </li>
  )
  return (
    <>
      {isActive && size > 0 && (
        <List className="main-nav__sub">{results.map(post => item(post))}</List>
      )}
    </>
  )
}

export default SearchList
