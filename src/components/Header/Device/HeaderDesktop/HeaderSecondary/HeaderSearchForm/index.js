import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchForm from './SearchForm'

const Search = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => <SearchForm searchIndex={data.siteSearchIndex.index} />}
    />
  )
}

export default Search
