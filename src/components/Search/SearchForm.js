import React, { useState, useEffect, createRef, useMemo } from 'react'
import { Index } from 'elasticlunr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchList from './SearchList'
import { SearchHeader } from './styles'
import handleClick from '../Listeners/handleClick'

const SearchForm = ({ searchIndex }) => {
  const ref = createRef()
  const [results, setResults] = useState([])
  const [active, setActive] = useState(false)
  const [query, setQuery] = useState(``)

  const index = useMemo(() => Index.load(searchIndex), [searchIndex])

  const search = evt => {
    const query = evt.target.value
    setQuery(query)
    setResults(
      index
        .search(query, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
    setActive(!!query)
  }

  handleClick(ref, setActive)

  return (
    <>
      <SearchHeader ref={ref} className="header-search-form">
        <form action="#" id="mobile-search-form" className="search-form">
          <input
            type="text"
            className="form-control header-mobile__search-control"
            value={query}
            onChange={e => search(e)}
            onFocus={() => setActive(!!query)}
            placeholder="Digite sua pesquisa aqui..."
          />
          <button type="submit" className="header-mobile__search-submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <SearchList results={results} isActive={active} />
        </form>
      </SearchHeader>
    </>
  )
}

export default SearchForm
