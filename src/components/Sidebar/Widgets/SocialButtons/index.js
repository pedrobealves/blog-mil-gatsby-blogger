import React from 'react'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import RSSButton from './RSSButton'

const SocialButtons = () => {
  return (
    <aside className="widget widget--sidebar widget-social">
      <FacebookButton />
      <TwitterButton />
      <RSSButton />
    </aside>
  )
}

export default SocialButtons
