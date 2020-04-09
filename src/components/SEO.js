import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import configFacebook from '../utils/facebookConfig'

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
            }
          }
        }
      }
    `
  )

  const defaultImage = site.siteMetadata.rssMetadata.site_url + site.siteMetadata.image_url
  const metaDescription = description || site.siteMetadata.rssMetadata.description
  const metaImage = image || defaultImage

  return (
    <Helmet
      htmlAttributes={{
        lang: `pt-br`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.rssMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.rssMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* General tags */}
      <meta name="image" content={image} />
      <meta name="description" content={metaDescription} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />

      {/* Facebook tags*/}
      <meta content={configFacebook.apiId} property="fb:app_id" />
      <meta content="100005017326032" property="fb:admins" />
      <meta content="1839690008" property="fb:admins" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
