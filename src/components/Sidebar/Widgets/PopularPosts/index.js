import React from 'react'

const PopularPosts = () => {
  return (
    <aside className="widget widget--sidebar card widget-popular-posts">
      <div className="widget__title card__header">
        <h4>Popular News</h4>
      </div>
      <div className="widget__content card__content">
        <ul className="posts posts--simple-list">
          <li className="posts__item posts__item--category-2">
            <figure className="posts__thumb">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                <img
                  src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img1-xs.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="posts__inner">
              <div className="posts__cat">
                <span className="label posts__cat-label">Injuries</span>
              </div>
              <h6 className="posts__title">
                <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                  Mark Johnson has a Tibia Fracture and is gonna be out
                </a>
              </h6>
              <time dateTime="2016-08-23" className="posts__date">
                August 23rd, 2018
              </time>
            </div>
          </li>
          <li className="posts__item posts__item--category-1">
            <figure className="posts__thumb">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                <img
                  src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img2-xs.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="posts__inner">
              <div className="posts__cat">
                <span className="label posts__cat-label">The Team</span>
              </div>
              <h6 className="posts__title">
                <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                  Jay Rorks is only 24 points away from breaking the record
                </a>
              </h6>
              <time dateTime="2016-08-23" className="posts__date">
                August 22nd, 2018
              </time>
            </div>
          </li>
          <li className="posts__item posts__item--category-1">
            <figure className="posts__thumb">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                <img
                  src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img3-xs.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="posts__inner">
              <div className="posts__cat">
                <span className="label posts__cat-label">The Team</span>
              </div>
              <h6 className="posts__title">
                <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                  The new eco friendly stadium won a Leafy Award in 2016
                </a>
              </h6>
              <time dateTime="2016-08-23" className="posts__date">
                June 8th, 2018
              </time>
            </div>
          </li>
          <li className="posts__item posts__item--category-1">
            <figure className="posts__thumb">
              <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                <img
                  src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-img4-xs.jpg"
                  alt=""
                />
              </a>
            </figure>
            <div className="posts__inner">
              <div className="posts__cat">
                <span className="label posts__cat-label">The Team</span>
              </div>
              <h6 className="posts__title">
                <a href="http://alchemists.dan-fisher.com/basketball/index.html#">
                  The team is starting a new power breakfast regimen
                </a>
              </h6>
              <time dateTime="2016-08-23" className="posts__date">
                May 12th, 2018
              </time>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default PopularPosts
