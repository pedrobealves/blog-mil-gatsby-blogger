import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderSearchForm = () => {
  return (
    <div className="header-search-form">
      <form
        action="http://alchemists.dan-fisher.com/basketball/index.html#"
        id="mobile-search-form"
        className="search-form"
      >
        <input
          type="text"
          className="form-control header-mobile__search-control"
          value=""
          placeholder="Enter your search here..."
        />
        <button type="submit" className="header-mobile__search-submit">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </form>
    </div>
  )
}

export default HeaderSearchForm
