import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook'
import configFacebook from '../../../utils/facebookConfig'

const componentName = ({ pagePath, published }) => {
  const getURL = () => {
    const date = new Date(published)
    const ssl = ['http://', 'https://']
    const domain = ['www.blogmil.net', 'bgmil.blogspot.com.br']
    const year = date.getFullYear()
    const month = date.getMonth()

    if (year < 2015 || (year === 2015 && month >= 1)) return ssl[0] + domain[1]

    if (year < 2018) return ssl[0] + domain[0]

    return ssl[1] + domain[0]
  }

  return (
    <FacebookProvider wait appId={configFacebook.apiId}>
      <Comments href={getURL() + pagePath} width={'100%'} />
    </FacebookProvider>
  )
}

export default componentName
