const config = require('./src/utils/siteConfig')
let bloggerConfig

try {
  bloggerConfig = require('./.blogger')
} catch (e) {
  bloggerConfig = {
    production: {
      apiKey: process.env.API_KEY,
      blogId: process.env.BLOG_ID,
    },
  }
} finally {
  const { apiKey, blogId } = bloggerConfig.production
  if (!apiKey || !blogId) {
    throw new Error('Blogger api key and blog id need to be provided.')
  }
}

let analyticsConfig

try {
  analyticsConfig = require('./.analytics')
} catch (e) {
  analyticsConfig = {
    production: {
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.CLIENT_EMAIL,
      viewId: process.env.VIEW_ID,
    },
  }
} finally {
  const { privateKey, clientEmail, viewId } = analyticsConfig.production
  if (!privateKey || !clientEmail || !viewId) {
    throw new Error(
      'Analytics private api key, client email and view id need to be provided.'
    )
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-blogger',
      options:
        process.env.NODE_ENV === 'development'
          ? bloggerConfig.development
          : bloggerConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: `gatsby-source-google-analytics-reporting-api`,
      options:
        process.env.NODE_ENV === 'development'
          ? analyticsConfig.development
          : analyticsConfig.production,
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `static${config.siteLogo}`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = 'GatsbyJS GCN Starter'
          return ret
        },
        query: `
    {
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
  `,
        feeds: [
          {
            serialize(ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allBloggerPost.edges.map(edge => ({
                date: edge.node.publishDate,
                title: edge.node.title,
                description: edge.node.childMarkdownRemark.excerpt,

                url: rssMetadata.site_url + '/' + edge.node.slug,
                guid: rssMetadata.site_url + '/' + edge.node.slug,
                custom_elements: [
                  {
                    'content:encoded': edge.node.childMarkdownRemark.html,
                  },
                ],
              }))
            },
            query: `
              {
            allBloggerPost(limit: 1000, sort: {fields: [published], order: DESC}) {
               edges {
                 node {
                   title
                   slug
                   published(formatString: "MMMM DD, YYYY")
                     childMarkdownRemark {
                       html
                       excerpt(pruneLength: 80)
                     
                   }
                 }
               }
             }
           }
      `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // develop: true,
        whitelist: [
          'header-logo',
          'post-related__prev',
          'post-related__next',
          'btn-social-counter--facebook',
          'btn-social-counter--rss',
          'social-links__link--facebook',
          'social-links__link--twitter',
          'social-links__link--instagram',
          'btn-facebook',
          'btn-twitter',
        ],
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    'gatsby-plugin-netlify',
  ],
}
