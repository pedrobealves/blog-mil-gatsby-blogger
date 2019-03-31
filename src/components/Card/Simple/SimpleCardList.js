import React from 'react'

const SimpleCard = props => {
  return (
    <ul className="posts posts--simple-list posts--simple-list--search">
      {props.children}
    </ul>
  )
}

export default SimpleCard
