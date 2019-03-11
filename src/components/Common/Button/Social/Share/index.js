import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const componentName = ({ url, icon, text, type }) => {
  return (
    <a href={url} className={`btn btn-default btn-${type} btn-icon btn-block`}>
      <FontAwesomeIcon icon={icon} />
      <span className="post-sharing__label hidden-xs">{text}</span>
    </a>
  )
}

export default componentName
