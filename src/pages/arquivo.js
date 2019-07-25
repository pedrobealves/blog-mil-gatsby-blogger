import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Filter from '../components/PageHeading/Filter'
import HeadingMenu from '../components/PageHeading/HeadingMenu'
import SimpleCard from '../components/Card/Minimum'
import SuccessAlert from '../components/Common/Alert/Success'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'

const Archive = ({ data }) => {
  const posts = data.allBloggerPost.edges

  const title = 'Arquivo'

  const postNode = {
    title: title + config.siteTitle,
  }

  return (
    <Layout
      pageHeading={
        <>
          <HeadingMenu title={title} path={'archive'} />
          <Filter />
        </>
      }
    >
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <SuccessAlert
        title={Object.keys(posts).length + ' resultados em '}
        success={title}
      />
      <SimpleCard posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allBloggerPost(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          id
          labels
          childMarkdownRemark {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
              slug
            }
            excerpt
          }
        }
      }
    }
  }
`

export default Archive
