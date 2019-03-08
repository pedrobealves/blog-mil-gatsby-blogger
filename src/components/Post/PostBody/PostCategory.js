import React from 'react'

const PostCategory = ({ label }) => {
  return (
    <div className="post__category">
      <span className="label posts__cat-label">{label}</span>
    </div>
  )
}

export default PostCategory
