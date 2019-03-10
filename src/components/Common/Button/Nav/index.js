import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const propTypes = {
  to: PropTypes.string,
}

const NavButton = props => {
  return <Link {...props} className="btn-nav" />
}

NavButton.propTypes = propTypes

export default NavButton
