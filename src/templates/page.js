import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Post'
import PostBody from '../components/Post/PostBody'
import SharingButtons from '../components/Post/SharingButtons'
import RelatedPosts from '../components/Post/RelatedPosts'
import PostAuthor from '../components/Post/PostAuthor'
import PostComments from '../components/Post/PostComments'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    childMarkdownRemark,
    author,
    published,
    content,
    tags,
  } = data.bloggerPage
  const postNode = data.bloggerPage

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} postSEO /> */}{' '}
      <Container>
        <PostBody body={childMarkdownRemark} content={content} />
      </Container>
      <SharingButtons pagePath={slug} />
      <RelatedPosts previous={previous} next={next} />
      <PostComments pagePath={slug} published={published} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bloggerPage(slug: { eq: $slug }) {
      title
      id
      slug
      content
      author {
        id
        displayName
        image {
          url
        }
      }
      childMarkdownRemark {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
          slug
        }
        html
        excerpt
        timeToRead
      }
    }
  }
`

export default PostTemplate
