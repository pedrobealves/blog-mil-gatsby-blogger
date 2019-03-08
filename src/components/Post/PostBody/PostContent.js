import React from 'react'

const PostContent = ({ content }) => {
  return (
    <div
      className="post__content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostContent
