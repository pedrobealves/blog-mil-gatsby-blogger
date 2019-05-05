import React from 'react'
import HeaderTopBar from './HeaderTopBar'
import HeaderSecondary from './HeaderSecondary'
import HeaderPrimary from './HeaderPrimary'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const HeaderMobile = () => {
  return (
    <header className="header">
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "background.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          const imageData = data.desktop.childImageSharp.fluid
          return <StyledBackgroundSection height={'100%'} fluid={imageData} />
        }}
      />
      <HeaderTopBar />
      <HeaderSecondary />
      <HeaderPrimary />
    </header>
  )
}

const StyledBackgroundSection = styled(Img)`
  position: absolute !important;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%) contrast(1.5);
  opacity: 0.1;
  width: 100%;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props =>
      props.fit || 'cover'} !important; object-position: ${props =>
  props.position || '50% 50%'} !important;'
  }
`

export default HeaderMobile
