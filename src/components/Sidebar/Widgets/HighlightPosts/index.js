import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostItem from './PostItem'
import { highlight } from '../../../../utils/sidebar'

const HighlightPost = () => {
  return (
    <aside className="widget widget--sidebar">
      <StaticQuery
        query={graphql`
          {
            allBloggerPost {
              edges {
                node {
                  id
                  labels
                  cover {
                    childImageSharp {
                      fluid(maxWidth: 773, maxHeight: 408) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
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
            ({ node: post }, index) =>
              highlight.posts.includes(post.id) && (
                <PostItem key={index} {...post} />
              )
          )
        }
      />
    </aside>
  )
}

export default HighlightPost
