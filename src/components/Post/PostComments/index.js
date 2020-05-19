import React from 'react'
import FacebookComment from './FacebookComment'

const PostComments = props => {
  return (
    <div className="post-comments card card--lg">
      <header className="post-commments__header card__header">
        <h4>Comentários</h4>
      </header>
      <div className="post-comments__content card__content">
        <FacebookComment {...props} />
      </div>
    </div>
  )
}

export default PostComments
