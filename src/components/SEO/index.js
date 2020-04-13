import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg';

const SEO = ({ postData={}, isBlogPost }) => {

  const { site } = useStaticQuery(
    graphql`
      query {
       site {
            siteMetadata {
                title
                siteUrl
                rssMetadata {
                    author
                    description
                    feed_url
                    title
                    site_url
                    image_url
                    copyright
                }
                social {
                    twitter
                    fbAppID
                    fbPage
                    siteFBAppIDAdmins
                }
            }
        }
      }
    `
  )

  const title = postData.title || site.siteMetadata.title ;
  const metaURL = postData.slug ? site.siteMetadata.siteUrl + postData.slug : site.siteMetadata.siteUrl
  const image = postData.cover ? site.siteMetadata.siteUrl + postData.cover.childImageSharp.fluid.src : ''
  const metaDescription = postData.meta_desc || site.siteMetadata.rssMetadata.description
  const metaImage = image || site.siteMetadata.rssMetadata.image_url

  return (
              <React.Fragment>

 <Helmet
      htmlAttributes={{
        lang: `pt-br`,
      }}
      title={postData.title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      {/* General tags */}
      <meta name='description' content={metaDescription} />
      <meta name='image' content={metaImage} />
      
     
    
      {/* OpenGraph tags */}
      <meta property='og:url' content={metaURL} />
      {isBlogPost && <meta property="og:type" content="article" />}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={metaImage} />


      {/* Facebook tags*/}
      <meta
        property='fb:app_id'
        content={site.siteMetadata.social.fbAppID ? site.siteMetadata.social.fbAppID : ''}
      />

      {
          site.siteMetadata.social.siteFBAppIDAdmins
          && site.siteMetadata.social.siteFBAppIDAdmins.map(element => 
            <meta content={element} property="fb:admins" />
          )
      }

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={site.siteMetadata.social.twitter ? site.siteMetadata.social.twitter : ''}
      />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={metaImage} />
    </Helmet>
    <SchemaOrg
            isBlogPost={isBlogPost}
            metaURL = {metaURL}
            title={title}
            description={metaDescription}
            image={metaImage}
            date={postData.date}
            updated={postData.updated}
            author={postData.author}
            cover={postData.cover}
            site={site.siteMetadata}
          />
    </React.Fragment>
  )
}

export default SEO