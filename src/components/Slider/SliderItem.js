import React from 'react'
import styled from 'styled-components'

const HeaderImg = styled.img`
  width: 773px;
  height: 408px;
`

const SliderItem = ({
  slug,
  title,
  published,
  labels,
  childMarkdownRemark,
  cover,
  author,
  ...props
}) => {
  return (
    <div className="posts__item posts__item--category-1">
      <a href="#" className="posts__link-wrapper">
        <figure className="posts__thumb">
          <HeaderImg src={cover.childImageSharp.fluid.src} alt="" />
        </figure>
        <div className="posts__inner">
          <div className="posts__cat">
            <span className="label posts__cat-label">{labels[0]}</span>
          </div>
          <h3 className="posts__title">
            {title} <span className="posts__title-higlight" />{' '}
          </h3>
          <div className="post-author">
            <figure className="post-author__avatar">
              <img src={author.image.url} alt="Post Author Avatar" />
            </figure>
            <div className="post-author__info">
              <h4 className="post-author__name">{author.displayName}</h4>
              <time dateTime="2017-08-28" className="posts__date">
                {published}
              </time>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default SliderItem
