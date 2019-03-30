import React from 'react'
import { FacebookProvider, MessageUs } from 'react-facebook'
import configFacebook from '../../utils/facebookConfig'

const Contact = () => {
  return (
    <FacebookProvider appId={configFacebook.apiId}>
      <MessageUs
        messengerAppId={configFacebook.apiId}
        pageId="314219968779578"
      />
    </FacebookProvider>
  )
}

export default Contact
