import React from 'react'

const WidgetPopularPosts = () => {
  return (
    <div className="widget widget--footer widget-popular-posts">
      <h4 className="widget__title">Popular News</h4>
      <div className="widget__content">
        <ul className="posts posts--simple-list">
          <li className="posts__item posts__item--category-2">
            <div className="posts__cat">
              <span className="label posts__cat-label">Injuries</span>
            </div>
            <h6 className="posts__title">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                Mark Johnson has a Tibia Fracture and is gonna be out
              </a>
            </h6>
            <time dateTime="2017-08-23" className="posts__date">
              August 23rd, 2018
            </time>
          </li>
          <li className="posts__item posts__item--category-1">
            <div className="posts__cat">
              <span className="label posts__cat-label">The Team</span>
            </div>
            <h6 className="posts__title">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                Jay Rorks is only 24 points away from breaking the record
              </a>
            </h6>
            <time dateTime="2017-08-23" className="posts__date">
              August 22nd, 2018
            </time>
          </li>
          <li className="posts__item posts__item--category-1">
            <div className="posts__cat">
              <span className="label posts__cat-label">The Team</span>
            </div>
            <h6 className="posts__title">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                The new eco friendly stadium won a Leafy Award in 2016
              </a>
            </h6>
            <time dateTime="2017-08-23" className="posts__date">
              June 8th, 2018
            </time>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WidgetPopularPosts
