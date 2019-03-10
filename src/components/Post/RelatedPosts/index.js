import React from 'react'
import RelatedCard from './RelatedCard'

const RelatedPosts = ({ previous, next }) => {
  return (
    <div className="post-related row">
      {previous && <RelatedCard prev={previous} />}
      {next && <RelatedCard next={next} />}
    </div>
  )
}

export default RelatedPosts
