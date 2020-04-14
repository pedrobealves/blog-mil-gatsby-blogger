import React from 'react';
import Helmet from 'react-helmet';

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
    cover,
    site
  }) => {

    function baseSchema()  {

    const organizationSchemaOrgJSONLD = 
        {
        "@context": "http://schema.org",
        "@type": "Organization",
        url: site.rssMetadata.site_url,
        name: site.rssMetadata.title,
        sameAs: site.social.fbPage,
        logo: site.rssMetadata.image_url
        }

    const websiteSchemaOrgJSONLD = 
        {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: site.rssMetadata.site_url,
        name: site.rssMetadata.title,
        description: site.rssMetadata.description,
        alternateName: site.rssMetadata.title_alt
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
          '@id': site.rssMetadata.site_url,
          name: 'Home',
          image:site.rssMetadata.image_url,
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
    alternateName: site.rssMetadata.title_alt,
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
      name: site.rssMetadata.title,
      url: site.rssMetadata.site_url,
      logo: {
        '@type': 'ImageObject',
        url: site.rssMetadata.image_url,
        width: site.rssMetadata.image_url_width,
        height: site.rssMetadata.image_url_height
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