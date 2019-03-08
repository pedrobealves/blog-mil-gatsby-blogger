import React from 'react'

const PostFooter = ({ labels }) => {
  return (
    <footer className="post__footer">
      <div className="post__tags">
        {labels.slice(0, 25).map((label, { index }) => (
          <a
            key={index}
            href="#"
            className="btn btn-primary btn-outline btn-xs"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default PostFooter
