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
  `
}
