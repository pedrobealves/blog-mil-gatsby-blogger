import React from 'react'
import { graphql } from 'gatsby'
import { startCase } from 'lodash'
import SEO from '../components/SEO'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card/Complete'
import Pagination from '../components/Pagination'

const TagTemplate = ({ data, pageContext }) => {
  /*const posts = orderBy(
    data.contentfulTag.post,
    // eslint-disable-next-line
    [(object) => new moment(object.publishDateISO)],
    ['desc']
  )

  const { title } = data.contentfulTag
  const numberOfPosts = posts.length
  const skip = pageContext.skip
  const limit = pageContext.limit*/

  const { humanPageNumber, basePath } = pageContext

  const posts = data.allBloggerPost.edges

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
    <>
      <Layout>
        <SEO postData={postData} />
        {!isFirstPage && (
          <Helmet>
            <title>{`${config.siteTitle} | Página ${humanPageNumber}`}</title>
          </Helmet>
        )}
        <Card
          posts={posts}
          basePath={basePath}
          featuredPost={featuredPost}
          isFirstPage={isFirstPage}
        />
        <Pagination context={pageContext} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($tag: String!) {
    allBloggerPost(
      limit: 2000
      sort: { fields: [published], order: DESC }
      filter: { labels: { in: [$tag] } }
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
            excerpt(pruneLength: 190)
            timeToRead
          }
        }
      }
    }
  }
`

export default TagTemplate
