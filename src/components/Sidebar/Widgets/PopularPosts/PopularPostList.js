import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SimpleCard from '../../../Card/Simple'

const Card = ({ posts, basePath }) => {
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
                    date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
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
            limit++ < 5 && <SimpleCard key={post.id} {...post} basePath={basePath} />
        )
      }
    />
  )
}

export default Card
