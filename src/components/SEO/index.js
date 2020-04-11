import React from 'react'
import config from '../../utils/siteConfig'
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


  const title = site.title || postData.title ;
  const metaURL = postData ? site.siteMetadata.siteUrl + postData.slug : site.siteMetadata.siteUrl
  const image = postData.cover ? site.siteMetadata.siteUrl + postData.cover.childImageSharp.fluid.src : ''
  const metaDescription = site.siteMetadata.rssMetadata.description || postData.meta_desc
  const metaImage = image || site.siteMetadata.rssMetadata.image_url

  return (
              <React.Fragment>

 <Helmet
      htmlAttributes={{
        lang: `pt-br`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      {/* General tags */}
      <meta name='description' content={metaDescription} />
      <meta name='image' content={image} />
      {/* Schema.org tags */}
      {/*<script type='application/ld+json'>
        {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(blogPostingSchemaOrgJSONLD)}
      </script>
       <script type='application/ld+json'>
        {JSON.stringify(websiteSchemaOrgJSONLD)}
      </script>
       <script type='application/ld+json'>
        {JSON.stringify(organizationSchemaOrgJSONLD)}
    </script>*/
    }
      {/* OpenGraph tags */}
      <meta property='og:url' content={metaURL} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={image} />


      {/* Facebook tags*/}
      <meta
        property='fb:app_id'
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />
      <meta content="100005017326032" property="fb:admins" />
      <meta content="1839690008" property="fb:admins" />


      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={image} />
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
            site={site}
          />
    </React.Fragment>
  )
}

export default SEO