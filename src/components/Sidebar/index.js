import React from 'react'
import PopularPosts from './Widgets/PopularPosts'
import Banner from './Widgets/Banner'
import Newsletter from './Widgets/Newsletter'
import SocialButtons from './Widgets/SocialButtons'
import HighlightPosts from './Widgets/HighlightPosts'
import TagCloud from './Widgets/TagCloud'

const Sidebar = () => {
  return (
    <>
      <PopularPosts />
      <SocialButtons />
      <HighlightPosts />
      <Banner />
      <Newsletter />
      <TagCloud />
    </>
  )
}

export default Sidebar
