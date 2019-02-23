import React from 'react'

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
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  )
}

export default HeaderSearchForm
