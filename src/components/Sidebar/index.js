import React from 'react'
import PopularPosts from './Widgets/PopularPosts'
import Banner from './Widgets/Banner'
import Newsletter from './Widgets/Newsletter'
import SocialButtons from './Widgets/SocialButtons'
import HighlightPosts from './Widgets/HighlightPosts'

const Sidebar = () => {
  return (
    <>
      <PopularPosts />
      <SocialButtons />
      <HighlightPosts />
      <Banner />
      <Newsletter />
    </>
  )
}

export default Sidebar
