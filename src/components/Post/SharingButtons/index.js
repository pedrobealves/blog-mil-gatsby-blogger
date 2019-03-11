import React from 'react'
import { SocialButton } from '../../Common/Button'

const SharingButtons = () => {
  return (
    <div className="post-sharing">
      <SocialButton share type="facebook" text="Compartilhe no Facebook" />
      <SocialButton share type="twitter" text="Compartilhe no Twitter" />
    </div>
  )
}

export default SharingButtons
