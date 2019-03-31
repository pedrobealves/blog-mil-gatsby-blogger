import React from 'react'

const Filter = () => {
  return (
    <div className="post-filter">
      <div className="container">
        <form action="#" className="post-filter__form clearfix">
          <div className="post-filter__select">
            <label className="post-filter__label">Category</label>{' '}
            <div className="cs-select cs-skin-border" tabIndex="0">
              <span className="cs-placeholder">Todos Artigos</span>
              <div className="cs-options">
                <ul>
                  <li data-option="" data-value="all">
                    <span>Todos Artigos</span>
                  </li>
                </ul>
              </div>
              <select className="cs-select cs-skin-border">
                <option value="" disabled="disabled" selected="selected">
                  Todos Artigos{' '}
                </option>
                <option value="all">Todos Artigos</option>
              </select>
            </div>
          </div>
          <div className="post-filter__select">
            <label className="post-filter__label">Filtrar Por</label>{' '}
            <div className="cs-select cs-skin-border" tabIndex="0">
              <span className="cs-placeholder">Data</span>
              <div className="cs-options">
                <ul>
                  <li data-option="" data-value="date">
                    <span>Data</span>
                  </li>
                  <li data-option="" data-value="random">
                    <span>Randomico</span>
                  </li>
                </ul>
              </div>
              <select className="cs-select cs-skin-border">
                <option value="" disabled="disabled" selected="selected">
                  Data
                </option>
                <option value="date">Data</option>
                <option value="random">Randomico</option>
              </select>
            </div>
          </div>
          <div className="post-filter__select">
            <label className="post-filter__label">Ordenar</label>{' '}
            <div className="cs-select cs-skin-border" tabIndex="0">
              <span className="cs-placeholder">Ascendente</span>
              <div className="cs-options">
                <ul>
                  <li data-option="" data-value="ascending">
                    <span>Ascendente</span>
                  </li>
                  <li data-option="" data-value="descending">
                    <span>Descendente</span>
                  </li>
                </ul>
              </div>
              <select className="cs-select cs-skin-border">
                <option value="" disabled="disabled" selected="selected">
                  Ascending
                </option>
                <option value="ascending">Ascendente</option>
                <option value="descending">Descendente</option>
              </select>
            </div>
          </div>
          <div className="post-filter__select">
            <label className="post-filter__label">Autor</label>{' '}
            <div className="cs-select cs-skin-border" tabIndex="0">
              <span className="cs-placeholder">Todos Autores</span>
              <div className="cs-options">
                <ul>
                  <li data-option="" data-value="all">
                    <span>Todos Autores</span>
                  </li>
                </ul>
              </div>
              <select className="cs-select cs-skin-border">
                <option value="" disabled="disabled" selected="selected">
                  All Authors
                </option>
                <option value="all">All Authors</option>
              </select>
            </div>
          </div>
          <div className="post-filter__submit">
            <button type="submit" className="btn btn-default btn-lg btn-block">
              Filtrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
