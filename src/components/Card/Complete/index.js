import React from 'react'
import Card from './Card'
import CardList from './CardList'

const CardPosts = ({ isFirstPage, posts, featuredPost, basePath}) => {
  return (
    <React.Fragment>
      {isFirstPage ? (
        <CardList>
          <Card {...featuredPost} featured basePath={basePath}/>
          {posts.slice(1).map(({ node: post }) => (
            <Card key={post.id} {...post} basePath={basePath}/>
          ))}
        </CardList>
      ) : (
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} basePath={basePath}/>
          ))}
        </CardList>
      )}
    </React.Fragment>
  )
}

export default CardPosts
