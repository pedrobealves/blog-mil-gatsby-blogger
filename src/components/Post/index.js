import React from 'react'

const Post = props => {
  return (
    <article className="card card--lg post post--single">
      {props.children}
    </article>
  )
}

export default Post
