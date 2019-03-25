import React from 'react'
import { SocialButton } from '../../Common/Button'

const SharingButtons = ({ pagePath }) => {
  return (
    <div className="post-sharing">
      <SocialButton
        share
        type="facebook"
        pagePath={pagePath}
        text="Compartilhe no Facebook"
      />
      <SocialButton
        share
        pagePath={pagePath}
        type="twitter"
        text="Compartilhe no Twitter"
      />
    </div>
  )
}

export default SharingButtons
