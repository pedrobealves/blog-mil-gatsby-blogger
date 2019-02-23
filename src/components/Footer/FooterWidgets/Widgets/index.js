import React from 'react'

const Widgets = props => {
  return (
    <div className="col-sm-12 col-md-3">
      <div className="footer-col-inner">{props.children}</div>
    </div>
  )
}

export default Widgets
