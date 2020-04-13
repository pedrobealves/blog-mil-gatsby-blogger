import React from 'react'
import SimpleCardList from './SimpleCardList'
import SimpleCard from './SimpleCard'

const CardPosts = ({ posts, basePath }) => {
  return (
    <SimpleCardList>
      {posts.map(({ node: post }) => (
        <SimpleCard key={post.id} {...post} basePath={basePath} />
      ))}
    </SimpleCardList>
  )
}

export default CardPosts
