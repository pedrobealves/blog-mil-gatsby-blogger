import React from 'react'

const HeadingMenu = ({ title, highlight, path }) => {
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1 className="page-heading__title">
              {title} <span className="highlight">{highlight}</span>
            </h1>
            <ol className="page-heading__breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {path}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadingMenu
