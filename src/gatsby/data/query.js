module.exports.data = {
  posts: `{
        allBloggerPost(
          sort: { fields: [published], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              title
              labels
              slug
              published(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }`,
  pages: `
   {
        allBloggerPage {
          edges {
            node {
              slug
            }
          }
        }
      }
  `,
  tags: `
   {
        allBloggerPost(limit: 2000) {
          group(field: labels) {
            fieldValue
            totalCount
            edges {
              node {
                id
              }
            }
          }
        }
      }
  `,
}
