import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook'
import configFacebook from '../../../utils/facebookConfig'

const PostComments = ({ pagePath }) => {
  return (
    <div className="post-comments card card--lg">
      <header className="post-commments__header card__header">
        <h4>Comments (18)</h4>
      </header>
      <div className="post-comments__content card__content">
        <FacebookProvider wait appId={configFacebook.apiId}>
          <Comments href={'https://www.blogmil.net/' + pagePath} />
        </FacebookProvider>
      </div>
    </div>
  )
}

export default PostComments
