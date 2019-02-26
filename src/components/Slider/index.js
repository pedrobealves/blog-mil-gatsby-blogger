import React from 'react'

const Sidebar = () => {
  return (
    <div className="card card--clean">
      <header className="card__header card__header--has-filter">
        <h4>Featured News</h4>
        <ul className="category-filter category-filter--featured">
          <li className="category-filter__item">
            <a
              href="http://alchemists.dan-fisher.com/basketball/index.html#"
              className="category-filter__link category-filter__link--reset category-filter__link--active"
            >
              All
            </a>
          </li>
          <li className="category-filter__item">
            <a
              href="http://alchemists.dan-fisher.com/basketball/index.html#"
              className="category-filter__link"
              data-category="posts__item--category-1"
            >
              The Team
            </a>
          </li>
          <li className="category-filter__item">
            <a
              href="http://alchemists.dan-fisher.com/basketball/index.html#"
              className="category-filter__link"
              data-category="posts__item--category-3"
            >
              Playoffs
            </a>
          </li>
          <li className="category-filter__item">
            <a
              href="http://alchemists.dan-fisher.com/basketball/index.html#"
              className="category-filter__link"
              data-category="posts__item--category-2"
            >
              Injuries
            </a>
          </li>
        </ul>
      </header>
      <div className="card__content">
        <div className="slick posts posts--slider-featured slick-initialized slick-slider">
          <button
            type="button"
            data-role="none"
            className="slick-prev slick-arrow"
            aria-label="Previous"
            role="button"
            style="display: block;"
          >
            Previous
          </button>
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              role="listbox"
              style="opacity: 1; width: 6200px; transform: translate3d(-4650px, 0px, 0px);"
            >
              <div
                className="posts__item posts__item--category-2 slick-slide slick-cloned"
                data-slick-index="-1"
                aria-hidden="true"
                tabIndex="-1"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide5.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">Injuries</span>
                    </div>
                    <h3 className="posts__title">
                      Jessica Valentine has a
                      <span className="posts__title-higlight">
                        sprained ankle
                      </span>
                      and won't be in the Final
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-4.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">Jesse Stevens</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          April 12th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-1 slick-slide"
                data-slick-index="0"
                aria-hidden="true"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide10"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide1.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">The Team</span>
                    </div>
                    <h3 className="posts__title">
                      The Planettroters will
                      <span className="posts__title-higlight">
                        perform this May 4th
                      </span>
                      at Madison Cube
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-4.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">Jesse Stevens</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          August 28th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-3 slick-slide"
                data-slick-index="1"
                aria-hidden="true"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide11"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide2.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">Playoffs</span>
                    </div>
                    <h3 className="posts__title">
                      New York is preparing all
                      <span className="posts__title-higlight">
                        for the Playoffs Final
                      </span>
                      next December
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-1.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">James Spiegel</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          June 28th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-1 slick-slide"
                data-slick-index="2"
                aria-hidden="true"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide12"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide3.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">The Team</span>
                    </div>
                    <h3 className="posts__title">
                      The new eco friendly
                      <span className="posts__title-higlight">
                        stadium won a Leafy
                      </span>
                      Award in 2016
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-1.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">James Spiegel</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          June 28th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-3 slick-slide"
                data-slick-index="3"
                aria-hidden="true"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide13"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide4.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">Playoffs</span>
                    </div>
                    <h3 className="posts__title">
                      New York Islanders are
                      <span className="posts__title-higlight">
                        now flying to California
                      </span>
                      for the big game
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-1.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">James Spiegel</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          June 28th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-3 slick-slide"
                data-slick-index="4"
                aria-hidden="true"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide14"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide6.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">Playoffs</span>
                    </div>
                    <h3 className="posts__title">
                      Jeremy Rittersen was
                      <span className="posts__title-higlight">
                        called to be
                      </span>
                      in the National Team
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-2.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">Jessica Hoops</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          May 24th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-2 slick-slide slick-current slick-active"
                data-slick-index="5"
                aria-hidden="false"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide15"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="0"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide5.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">Injuries</span>
                    </div>
                    <h3 className="posts__title">
                      Jessica Valentine has a
                      <span className="posts__title-higlight">
                        sprained ankle
                      </span>
                      and won't be in the Final
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-4.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">Jesse Stevens</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          April 12th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="posts__item posts__item--category-1 slick-slide slick-cloned"
                data-slick-index="6"
                aria-hidden="true"
                tabIndex="-1"
                style="width: 775px;"
              >
                <a
                  href="http://alchemists.dan-fisher.com/basketball/index.html#"
                  className="posts__link-wrapper"
                  tabIndex="-1"
                >
                  <figure className="posts__thumb">
                    <img
                      src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/post-slide1.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="posts__inner">
                    <div className="posts__cat">
                      <span className="label posts__cat-label">The Team</span>
                    </div>
                    <h3 className="posts__title">
                      The Planettroters will
                      <span className="posts__title-higlight">
                        perform this May 4th
                      </span>
                      at Madison Cube
                    </h3>
                    <div className="post-author">
                      <figure className="post-author__avatar">
                        <img
                          src="./Alchemists Basketball Club &amp; Sports News HTML Template - Home_files/avatar-4.jpg"
                          alt="Post Author Avatar"
                        />
                      </figure>
                      <div className="post-author__info">
                        <h4 className="post-author__name">Jesse Stevens</h4>
                        <time dateTime="2017-08-28" className="posts__date">
                          August 28th, 2018
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button
            type="button"
            data-role="none"
            className="slick-next slick-arrow"
            aria-label="Next"
            role="button"
            style="display: block;"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
