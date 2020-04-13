import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Post'
import PostBody from '../components/Post/PostBody'
import SharingButtons from '../components/Post/SharingButtons'
import RelatedPosts from '../components/Post/RelatedPosts'
import PostAuthor from '../components/Post/PostAuthor'
import PostComments from '../components/Post/PostComments'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    childMarkdownRemark,
    author,
    published,
    updated,
    content,
    tags,
  } = data.bloggerPage
  const postNode = data.bloggerPage

  const previous = pageContext.prev
  const next = pageContext.next

  const postData = {
          title,
          meta_title:`${title} | ${config.siteTitle}`,
          meta_desc: childMarkdownRemark.excerpt,
          slug,
          author,
          date:published,
          updated
        }

  return (
    <Layout>
      <SEO postData={postData} />
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
      published
      updated
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
