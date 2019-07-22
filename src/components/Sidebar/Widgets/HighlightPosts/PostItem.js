import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PostItem = ({ childMarkdownRemark, labels, cover }) => {
  return (
    <div className="highlight-card twitch-stream-wrapper">
      <Link to={childMarkdownRemark.frontmatter.slug} className="twitch-stream card">
        <StyledBackgroundSection
          url={cover.childImageSharp.fluid.srcWebp}
          className="twitch-stream__overlay twitch-stream__overlay--bg0 effect-duotone effect-duotone--orange"
        >
          <div className="effect-duotone__layer">
            <div className="effect-duotone__layer-inner" />
          </div>
        </StyledBackgroundSection>
        <div className="twitch-stream__body">
          <h5 className="twitch-stream__title">
            {childMarkdownRemark.frontmatter.title}
          </h5>
        </div>
      </Link>
    </div>
  )
}

const StyledBackgroundSection = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
`

export default PostItem
