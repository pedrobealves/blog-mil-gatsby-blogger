import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Card from './PopularPostList'
import SimpleCard from '../../../Card/Simple'

const SelectPosts = ({ data, posts, basePath }) => {
    let arr = []
    posts.map(({ node: post }) => arr.push(post.path))
    
    let pst = [];
  
    posts.forEach(element => {
        data.allBloggerPost.edges.map(
           ({node}) => node.childMarkdownRemark.frontmatter.slug == element.node.path && pst.push(node) 
        )
    })

  return (
           pst.slice(0,5).map(
          (post) =>
             <SimpleCard key={post.id} {...post} basePath={basePath} />
        )
  )
}

export default SelectPosts
