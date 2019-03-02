import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Card from './PopularPostList'

const PopularPosts = () => {
  return (
    <aside className="widget widget--sidebar card widget-popular-posts">
      <div className="widget__title card__header">
        <h4>Popular</h4>
      </div>
      <div className="widget__content card__content">
        <ul className="posts posts--simple-list">
          <StaticQuery
            query={graphql`
              query {
                allAnalyticsPost {
                  edges {
                    node {
                      path
                      totalCount
                    }
                  }
                }
              }
            `}
            render={data => <Card posts={data.allAnalyticsPost.edges} />}
          />{' '}
        </ul>
      </div>
    </aside>
  )
}

export default PopularPosts
