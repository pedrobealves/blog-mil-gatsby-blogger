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
import ReadingProgress from '../components/Post/ReadingProgress'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    childMarkdownRemark,
    labels,
    author,
    published,
    content,
    tags,
  } = data.bloggerPost

  const postNode = data.bloggerPost
  const previous = pageContext.prev
  const next = pageContext.next
  const target = React.createRef();

  return (
    <>
      <ReadingProgress target={target} slug={slug} />
      <Layout>
        <Helmet>
          <title>{`${title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} postNode={postNode} postSEO />
        <Container>
          <div className={`post`} ref={target}>
            <PostBody
              body={childMarkdownRemark}
              content={content}
              labels={labels}
            />
          </div>
        </Container>
        <SharingButtons pagePath={slug} />
        <PostAuthor {...author} />
        <RelatedPosts previous={previous} next={next} />
        <PostComments pagePath={slug} published={published} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    bloggerPost(slug: { eq: $slug }) {
      title
      id
      slug
      labels
      content
      published
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
