import React from 'react'
import symbol from '../../../images/symbol.svg'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Symbol = ({ section }) => {
  return (
    <div className={section + '-logo'}>
      <Link to={'/'}>
              <img
                src={symbol}
                alt="Blog MIL"
                className={section + '-logo__img w-50'}
              />
      </Link>
    </div>
  )
}

export default Symbol
