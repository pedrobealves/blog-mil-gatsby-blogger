import React from 'react'
import styled from 'styled-components'

const CardList = props => {
  return (
    <div className="card card--clean">
      <header className="card__header card__header--has-btn">
        <h4>Latest News</h4>
        <a
          href="http://alchemists.dan-fisher.com/basketball/index.html#"
          className="btn btn-default btn-outline btn-xs card-header__button"
        >
          See All Posts
        </a>
      </header>
      <div className="card__content">
        <div className="posts posts--cards posts--cards-thumb-left post-list">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default CardList
