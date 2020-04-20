import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Link,StaticQuery, graphql } from "gatsby"

const AuthorPage = ({
  data: {
    allBloggerPost: { group }
  },
  onClickValue
}) => (
     <ul>
        {group.map(author => (
          <li  
          onClick={() => onClickValue('author',author.fieldValue)} 
          key={author.fieldValue}
          >
              <span>{author.fieldValue}</span>
          </li>
        ))}
      </ul>
)
export default props => (
  <StaticQuery
    query={graphql`
      query {
           allBloggerPost(limit: 2000) {
            group(field: author___displayName) {
                fieldValue
                totalCount
            }
           }
     }
    `}
    render={data => <AuthorPage data={data} {...props} />}
  />
)
AuthorPage.propTypes = {
  data: PropTypes.shape({
    allBloggerPost: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}