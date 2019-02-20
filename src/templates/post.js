import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const { title, slug, childMarkdownRemark, published, tags } = data.bloggerPost
  const postNode = data.bloggerPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Hero
        title={title}
        image={childMarkdownRemark.frontmatter.cover}
        height={'50vh'}
      />
      <Container>
        <PostDate date={published} />
        <PageBody body={childMarkdownRemark} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bloggerPost(slug: { eq: $slug }) {
      title
      slug
      published(formatString: "MMMM DD, YYYY")
      childMarkdownRemark {
        frontmatter {
          cover
        }
        html
        excerpt(pruneLength: 320)
      }
    }
  }
`

export default PostTemplate
