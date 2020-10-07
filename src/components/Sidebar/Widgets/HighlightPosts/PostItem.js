import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PostItem = ({ childMarkdownRemark, labels, featuredImage }) => {
  return (
    <div className="twitch-stream-wrapper">
      <Link
        to={childMarkdownRemark.frontmatter.slug}
        className="twitch-stream card"
      >
        <StyledBackgroundSection
          url={featuredImage.childImageSharp.fluid.srcWebp}
          className="twitch-stream__overlay twitch-stream__overlay--bg0 effect-duotone effect-duotone--lead"
        >
          <div className="effect-duotone__layer">
            <div className="effect-duotone__layer-inner" />
          </div>
        </StyledBackgroundSection>
        <div className="twitch-stream__body">
          <span className="twitch-stream__title--sec mb-1">{labels[0]}</span>
          <span className="twitch-stream__subtitle--sec">
            {childMarkdownRemark.frontmatter.title}
          </span>
        </div>
      </Link>
    </div>
  )
}

const Line = styled.span`
  border: 0.1em solid #ff6711;
  margin: 5px 0;
  width: 10%;
`

const StyledBackgroundSection = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
`

export default PostItem
