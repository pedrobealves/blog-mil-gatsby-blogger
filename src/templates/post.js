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
    labels,
    published,
    tags,
  } = data.bloggerPost
  const postNode = data.bloggerPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />
      <Container>
        <PostBody body={childMarkdownRemark} labels={labels} />
      </Container>
      <SharingButtons />
      <PostAuthor />
      <RelatedPosts previous={previous} next={next} />
      <PostComments />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bloggerPost(slug: { eq: $slug }) {
      title
      id
      slug
      labels
      cover {
        childImageSharp {
          fluid(maxWidth: 773, maxHeight: 408) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      author {
        displayName
        image {
          url
        }
      }
      childMarkdownRemark {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
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
