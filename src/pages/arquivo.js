import React, { useState, useEffect, useReducer } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Filter from '../components/PageHeading/Filter'
import HeadingMenu from '../components/PageHeading/HeadingMenu'
import SimpleCard from '../components/Card/Minimum'
import SuccessAlert from '../components/Common/Alert/Success'
import ErrorAlert from '../components/Common/Alert/Error'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'

const Archive = ({ data }) => {
  const title = 'Arquivo'

  const postNode = {
    title: title + config.siteTitle,
  }

  const [posts, setPosts] = useState(data.allBloggerPost.edges)

  const initialState = {
    category: '',
    by: '',
    order: '',
    author: '',
  }

  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  )

  const handleFilterPosts = (name, value) => {
    setFilterInput({ [name]: value })
  }

  const clearState = e => {
    setFilterInput({ ...initialState })
    e.preventDefault()
  }

  const filterPosts = list => {
    return list.filter(item => {
      return (
        item.node.childMarkdownRemark.frontmatter.labels
          .toLowerCase()
          .includes(filterInput.category.toLowerCase()) &&
        item.node.author.displayName
          .toLowerCase()
          .includes(filterInput.author.toLowerCase())
      )
    })
  }

  const postsList = filterPosts(posts)

  return (
    <Layout
      pageHeading={
        <>
          <HeadingMenu title={title} path={'arquivo'} />
          <Filter
            searchValue={filterInput}
            onClickValue={handleFilterPosts}
            clearState={clearState}
          />
        </>
      }
    >
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      {
        // <SEO postNode={postNode} pagePath="contact" customTitle />
      }
      {Object.keys(postsList).length > 0 ? (
        <SuccessAlert
          title={Object.keys(postsList).length + ' resultados em '}
          success={title}
        />
      ) : (
        <ErrorAlert title={'NÃO FORAM ENCONTRADOS RESULTADOS'} />
      )}
      <SimpleCard posts={postsList} />
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
          author {
            displayName
          }
          childMarkdownRemark {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
              slug
              labels
            }
            excerpt
          }
        }
      }
    }
  }
`

export default Archive
