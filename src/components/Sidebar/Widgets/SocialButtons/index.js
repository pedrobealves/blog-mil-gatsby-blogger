import React from 'react'
import { SocialButton } from '../../../Common/Button'

const SocialButtons = () => {
  return (
    <aside className="widget widget--sidebar widget-social">
      <SocialButton counter type="facebook" text="Curta Nossa Página" />
      <SocialButton counter type="twitter" text="Siga-nos no Twitter" />
      <SocialButton counter type="rss" text="Increva-se em nosso RSS" />
    </aside>
  )
}

export default SocialButtons
