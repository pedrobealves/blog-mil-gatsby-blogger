import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SortLabels from './SortLabels'

const TagCloud = () => {
  return (
    <aside className="widget widget--sidebar card widget-tagcloud">
      <div className="widget__title card__header">
        <h4>Tags</h4>
      </div>
      <div className="widget__content card__content">
        <div className="tagcloud">
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
            render={(data) => <SortLabels labels={data} />}
          />
        </div>
      </div>
    </aside>
  )
}

export default TagCloud
