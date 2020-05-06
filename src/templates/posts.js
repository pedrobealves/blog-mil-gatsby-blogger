import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Card from '../components/Card/Complete'
import Slider from '../components/Slider'
import { startCase } from 'lodash'

const Index = ({ data, pageContext }) => {
  const posts = data.allBloggerPost.edges
  const { humanPageNumber, basePath } = pageContext
  const isFirstPage = humanPageNumber === 1
  let featuredPost

  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }

  const postData = {
    title: startCase(basePath),
  }

  return (
    <Layout>
      <SEO postData={postData} />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} | Página ${humanPageNumber}`}</title>
        </Helmet>
      )}
      <Slider posts={posts} featuredPost={featuredPost} />
      <Card
        posts={posts}
        basePath={basePath}
        featuredPost={featuredPost}
        isFirstPage={isFirstPage}
      />
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allBloggerPost(
      sort: { fields: [published], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          labels
          cover {
            childImageSharp {
              fluid(maxWidth: 773, maxHeight: 408) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          author {
            displayName
            image {
              url
            }
          }
          published(formatString: "MMMM DD, YYYY", locale: "pt-BR")
          childMarkdownRemark {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              slug
            }
            html
            excerpt(pruneLength: 100)
            timeToRead
          }
        }
      }
    }
  }
`

export default Index
