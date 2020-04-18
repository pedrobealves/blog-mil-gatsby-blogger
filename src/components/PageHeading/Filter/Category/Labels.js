import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Link,StaticQuery, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allBloggerPost: { group }
  }
}) => (
     <ul>
        {group.map(label => (
          <li key={label.fieldValue} data-option="" data-value={label.fieldValue}>
              <span>{label.fieldValue} ({label.totalCount})</span>
          </li>
        ))}
      </ul>
)
export default props => (
  <StaticQuery
    query={graphql`
      query {
        allBloggerPost(limit: 2000) {
            group(field: labels) {
                fieldValue
                totalCount
            }
   }
  }
    `}
    render={data => <TagsPage data={data} {...props} />}
  />
)
TagsPage.propTypes = {
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