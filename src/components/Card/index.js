import React from 'react'
import Card from './Card'
import CardList from './CardList'

const CardPosts = ({ isFirstPage, posts, featuredPost }) => {
  return (
    <React.Fragment>
      {isFirstPage ? (
        <CardList>
          <Card {...featuredPost} featured />
          {posts.slice(1).map(({ node: post }) => (
            <Card key={post.id} {...post} />
          ))}
        </CardList>
      ) : (
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} />
          ))}
        </CardList>
      )}
    </React.Fragment>
  )
}

export default CardPosts
