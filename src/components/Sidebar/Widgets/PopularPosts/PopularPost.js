import React from 'react'

const PopularPost = ({ frontmatter }) => {
  return (
    <li className="posts__item posts__item--category-1">
      <figure className="posts__thumb">
        <a href={frontmatter.slug}>
          <img
            src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img2-xs.jpg"
            alt=""
          />
        </a>
      </figure>
      <div className="posts__inner">
        <div className="posts__cat">
          <span className="label posts__cat-label">tag</span>
        </div>
        <h6 className="posts__title">
          <a href={frontmatter.slug}>{frontmatter.title}</a>
        </h6>
        <time dateTime="2016-08-23" className="posts__date">
          August 22nd, 2018
        </time>
      </div>
    </li>
  )
}

export default PopularPost
