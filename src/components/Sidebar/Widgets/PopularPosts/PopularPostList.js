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
                cover {
                  childImageSharp {
                    fixed(width: 80, height: 80) {
                      ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                  }
                }
                childMarkdownRemark {
                  frontmatter {
                    title
                    slug
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
