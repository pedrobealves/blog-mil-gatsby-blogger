import React from 'react'
import PopularPosts from './Widgets/PopularPosts'
import Banner from './Widgets/Banner'
import Newsletter from './Widgets/Newsletter'
import SocialButtons from './Widgets/SocialButtons'

const Sidebar = () => {
  return (
    <>
      <PopularPosts />
      <SocialButtons />
      <Banner />
      <Newsletter />
    </>
  )
}

export default Sidebar
