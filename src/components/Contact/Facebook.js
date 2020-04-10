import React from 'react'
import { FacebookProvider, MessageUs } from 'react-facebook'
import config from '../../utils/siteConfig'

const Contact = () => {
  return (
    <FacebookProvider appId={config.siteFBAppID}>
      <MessageUs
        messengerAppId={config.siteFBAppID}
        pageId="314219968779578"
      />
    </FacebookProvider>
  )
}

export default Contact
