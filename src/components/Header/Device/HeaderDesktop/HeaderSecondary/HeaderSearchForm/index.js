import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderSearchForm = () => {
  return (
    <div className="header-search-form">
      <form
        action="#"
        id="mobile-search-form"
        className="search-form"
      >
        <input
          type="text"
          className="form-control header-mobile__search-control"
          value=""
          placeholder="Digite sua pesquisa aqui..."
        />
        <button type="submit" className="header-mobile__search-submit">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </form>
    </div>
  )
}

export default HeaderSearchForm
