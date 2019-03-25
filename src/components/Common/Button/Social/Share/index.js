import React from 'react'
import FacebookShare from './Facebook'
import Other from './Other'

const componentName = props => {
  const shareButtons = props => ({
    facebook: <FacebookShare {...props} />,
    twitter: <Other {...props} />,
  })

  return shareButtons(props)[props.type]
}

export default componentName
