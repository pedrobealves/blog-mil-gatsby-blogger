import React from 'react';
import Helmet from 'react-helmet';
import config from '../../utils/siteConfig'

export default React.memo(
  ({
    isBlogPost,
    title,
    description,
    metaURL,
    image,
    date,
    updated,
    author,
    cover
  }) => {

    function baseSchema()  {

    const organizationSchemaOrgJSONLD = 
        {
        "@context": "http://schema.org",
        "@type": "Organization",
        url: config.siteUrl,
        name: config.siteTitle,
        sameAs: config.fbPage,
        logo: config.shareImage
        }

    const websiteSchemaOrgJSONLD = 
        {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: config.siteUrl,
        name: config.siteTitle,
        description: config.siteDescription,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
        }

    return {
        organizationSchemaOrgJSONLD,
        websiteSchemaOrgJSONLD
    }
}


    function schemaPost()  {

  const breadcrumbSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': config.siteUrl,
          name: 'Home',
          image: config.shareImage,
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': metaURL,
          name: title,
          image,
        },
      },
    ],
  }

  const blogPostingSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    url: metaURL,
    name: title,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    headline: title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': metaURL,
    },
    author: {
      '@type': 'Person',
      name: author.displayName,
      image: author.image.url
    },
    image: {
      '@type': 'ImageObject',
      url: image,
      width: cover.childImageSharp.fluid.presentationWidth,
      height: cover.childImageSharp.fluid.presentationHeight
    },
    datePublished: date,
    dateModified: updated,
    inLanguage: 'pt-br',
    publisher: {
      '@type': 'Organization',
      name: config.siteTitle,
      url: config.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: config.shareImage,
        width: config.shareImageWidth,
        height: config.shareImageHeight
      },
    },
    description: description,
  }

  return {
    breadcrumbSchemaOrgJSONLD, 
    blogPostingSchemaOrgJSONLD
  }

}


    const schema = isBlogPost
      ? [
          baseSchema().organizationSchemaOrgJSONLD,
          baseSchema().websiteSchemaOrgJSONLD,
          schemaPost().breadcrumbSchemaOrgJSONLD,
          schemaPost().blogPostingSchemaOrgJSONLD
        ]
      : [baseSchema().organizationSchemaOrgJSONLD,
        baseSchema().websiteSchemaOrgJSONLD]
      
            
    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  },
);