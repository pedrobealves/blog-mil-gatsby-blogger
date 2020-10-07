import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SelectPosts from './SelectPosts'

const Card = (props) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allBloggerPost {
            edges {
              node {
                labels
                id
                featuredImage {
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
      render={(data) => <SelectPosts data={data} {...props} />}
    />
  )
}

export default Card
