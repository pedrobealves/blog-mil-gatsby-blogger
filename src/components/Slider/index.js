import React from 'react'
import Slider from 'react-slick'
import SliderItem from './SliderItem'

const SliderFeatured = ({ posts }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="card card--clean">
      <header className="card__header card__header--has-filter">
        <h4>Featured</h4>
        <ul className="category-filter category-filter--featured">
          <li className="category-filter__item">
            <a
              href="#"
              className="category-filter__link category-filter__link--reset category-filter__link--active"
            >
              All
            </a>
          </li>
          <li className="category-filter__item">
            <a
              href="#"
              className="category-filter__link"
              data-category="posts__item--category-1"
            >
              RPG
            </a>
          </li>
          <li className="category-filter__item">
            <a
              href="#"
              className="category-filter__link"
              data-category="posts__item--category-3"
            >
              Action
            </a>
          </li>
          <li className="category-filter__item">
            <a
              href="#"
              className="category-filter__link"
              data-category="posts__item--category-2"
            >
              Terror
            </a>
          </li>
        </ul>
      </header>
      <div className="card__content">
        <div className="slick posts posts--slider-featured">
          <Slider {...settings}>
            {posts.slice(0, 5).map(({ node: post }) => (
              <SliderItem key={post.id} {...post} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default SliderFeatured
