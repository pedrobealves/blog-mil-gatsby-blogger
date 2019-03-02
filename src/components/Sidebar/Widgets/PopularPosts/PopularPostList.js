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
          allMarkdownRemark {
            edges {
              node {
                excerpt
                frontmatter {
                  title
                  slug
                  cover
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allMarkdownRemark.edges.map(
          ({ node: post }) =>
            arr.includes('/' + post.frontmatter.slug) &&
            limit++ < 5 && <PopularPost key={post.id} {...post} />
        )
      }
    />
  )
}

export default Card
