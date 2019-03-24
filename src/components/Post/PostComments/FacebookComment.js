import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook'
import configFacebook from '../../../utils/facebookConfig'

const componentName = ({ pagePath }) => {
  return (
    <FacebookProvider wait appId={configFacebook.apiId}>
      <Comments href={'https://www.blogmil.net/' + pagePath} width={'100%'} />
    </FacebookProvider>
  )
}

export default componentName
