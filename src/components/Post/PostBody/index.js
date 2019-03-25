import React from 'react'
import PostCategory from './PostCategory'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

const PostBody = ({ body, content, labels }) => {
  const { frontmatter, html } = body
  return (
    <div className="card__content">
      <PostCategory label={labels[0]} />
      <PostHeader header={frontmatter} />
      <PostContent content={content} />
      <PostFooter labels={labels} />
    </div>
  )
}

export default PostBody
