import React from 'react'
import IconLink from './Link'
import CounterButton from './Counter'
import ShareButton from './Share'
import social from '../../../../utils/social'
import PropTypes from 'prop-types'

const SocialButton = props => {
  return (
    <>
      {props.counter && <CounterButton {...props} {...social[props.type]} />}
      {props.link && <IconLink {...props} {...social[props.type]} />}
      {props.share && <ShareButton {...props} {...social[props.type]} />}
    </>
  )
}

export { SocialButton }
