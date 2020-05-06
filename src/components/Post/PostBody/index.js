import React from 'react'
import PostCategory from './PostCategory'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

const PostBody = ({ body: { frontmatter, html }, content, labels }) => {
  return (
    <div className="card__content">
      {labels && <PostCategory label={labels[0]} />}
      <PostHeader header={frontmatter} />
      <PostContent content={content} />
      {labels && <PostFooter labels={labels} />}
    </div>
  )
}

export default PostBody
