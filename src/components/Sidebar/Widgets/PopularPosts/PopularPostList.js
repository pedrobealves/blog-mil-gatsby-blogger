import React from 'react'
import PopularPost from './PopularPost'
import { StaticQuery, graphql } from 'gatsby'

const Card = ({ posts }) => {
  let arr = []
  let limit = 0

  posts.map(({ node: post }) => arr.push(post.path))

  return (
    <StaticQuery
      query={graphql`
        {
          allBloggerPost {
            edges {
              node {
                labels
                childMarkdownRemark {
                  frontmatter {
                    title
                    slug
                    cover
                  }
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allBloggerPost.edges.map(
          ({ node: post }) =>
            arr.includes(post.childMarkdownRemark.frontmatter.slug) &&
            limit++ < 5 && <PopularPost key={post.id} {...post} />
        )
      }
    />
  )
}

export default Card
