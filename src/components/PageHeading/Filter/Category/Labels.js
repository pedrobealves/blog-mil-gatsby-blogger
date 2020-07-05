import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Link, StaticQuery, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allBloggerPost: { group },
  },
  onClickValue,
}) => (
  <ul>
    {group.map((label) => (
      <li
        onClick={() => onClickValue('category', label.fieldValue)}
        key={label.fieldValue}
      >
        <span>{label.fieldValue}</span>
      </li>
    ))}
  </ul>
)
export default (props) => (
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
    render={(data) => <TagsPage data={data} {...props} />}
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
