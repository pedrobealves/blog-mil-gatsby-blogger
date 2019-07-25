import React from 'react'
import SimpleCardList from './SimpleCardList'
import SimpleCard from './SimpleCard'

const CardPosts = ({ posts }) => {
  return (
    <SimpleCardList>
      {posts.map(({ node: post }) => (
        <SimpleCard key={post.id} {...post} />
      ))}
    </SimpleCardList>
  )
}

export default CardPosts
