import React from 'react'
import logo from '../../../images/logo.png'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Logo = ({ section }) => {
  return (
    <div className={section + '-logo'}>
      <Link to={'/'}>
        <StaticQuery
          query={graphql`
            query {
              desktop: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => {
            const imageData = data.desktop.childImageSharp.fluid
            return (
              <img
                src={imageData.srcWebp}
                alt="Blog MIL"
                className={section + '-logo__img w-75'}
              />
            )
          }}
        />
      </Link>
    </div>
  )
}

export default Logo
