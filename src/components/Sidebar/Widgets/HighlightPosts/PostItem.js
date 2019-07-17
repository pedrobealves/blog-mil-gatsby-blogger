import React from 'react'
import { Link } from 'gatsby'

const PostItem = ({ childMarkdownRemark, labels, cover }) => {
  return (
    <Link to={`${childMarkdownRemark.frontmatter.slug}`}>
      <article>
        <div className="thumb-info thumb-info-no-borders thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom border-radius-0 mt-2">
          <div className="thumb-info-wrapper thumb-info-wrapper-opacity-6">
            <img src={cover.childImageSharp.fluid.srcWebp} />
            <div className="thumb-info-title bg-transparent py-1 px-1">
              <div className="thumb-info-inner mt-1">
                <h5 className="text-light line-height-2 text-4 font-weight-bold mb-0">
                  {childMarkdownRemark.frontmatter.title}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostItem
