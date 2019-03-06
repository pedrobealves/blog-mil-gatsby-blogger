import React from 'react'
import PopularPosts from './Widgets/PopularPosts'
import Banner from './Widgets/Banner'
import Newsletter from './Widgets/Newsletter'
import SocialButtons from './Widgets/SocialButtons'

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar col-md-4">
      <PopularPosts />
      <SocialButtons />
      <Banner />
      <Newsletter />
    </div>
  )
}

export default Sidebar
