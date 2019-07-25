import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.div`
  transform: rotateX(0deg) !important;
  opacity: 1 !important;
  visibility: visible !important;
  top: 42px !important;
`
const SearchList = ({ results, isActive }) => {
  const item = post => (
    <li>
      <Link to={post.slug}>{post.title}</Link>
    </li>
  )
  return (
    <>
      {isActive && (
        <List className="main-nav__sub">{results.map(post => item(post))}</List>
      )}
    </>
  )
}

export default SearchList
