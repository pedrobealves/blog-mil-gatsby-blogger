import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Card from '../components/Card'
import Slider from '../components/Slider'

const Index = ({ data, pageContext }) => {
  const posts = data.allBloggerPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Slider posts={posts} featuredPost={featuredPost} />
      <Card
        posts={posts}
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
          author {
            displayName
            image {
              url
            }
          }
          published(formatString: "MMMM DD, YYYY")
          childMarkdownRemark {
            frontmatter {
              title
              date
              slug
              cover
            }
            html
            excerpt
            timeToRead
          }
        }
      }
    }
  }
`

export default Index
