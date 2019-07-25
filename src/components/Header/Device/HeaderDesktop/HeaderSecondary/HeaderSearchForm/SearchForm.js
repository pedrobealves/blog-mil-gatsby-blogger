import React, { Component } from 'react'
import { Index } from 'elasticlunr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchList from './SearchList'
import styled from 'styled-components'

const SearchHeader = styled.div`
  z-index: 0 !important;
  overflow: visible !important;
  position: unset !important;
`

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      isActive: false,
    }
  }

  render() {
    return (
      <>
        <SearchHeader className="header-search-form">
          <form action="#" id="mobile-search-form" className="search-form">
            <input
              type="text"
              className="form-control header-mobile__search-control"
              value={this.state.query}
              onChange={this.search}
              placeholder="Digite sua pesquisa aqui..."
            />
            <button type="submit" className="header-mobile__search-submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <SearchList
              results={this.state.results}
              isActive={this.state.isActive}
            />
          </form>
        </SearchHeader>
      </>
    )
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex)

  handleBlur = e => {
    this.setState({
      isActive: false,
    })
  }

  handleFocus = e => {
    this.state.query &&
      this.setState({
        isActive: true,
      })
  }

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      isActive: !!query,
    })
  }
}

export default SearchForm
