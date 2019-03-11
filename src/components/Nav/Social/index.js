import React from 'react'
import { SocialButton } from '../../Common/Button'

const Social = () => {
  return (
    <ul className="social-links social-links--inline social-links--main-nav">
      <SocialButton link type="facebook" />
      <SocialButton link type="twitter" />
      <SocialButton link type="instagram" />
    </ul>
  )
}

export default Social
