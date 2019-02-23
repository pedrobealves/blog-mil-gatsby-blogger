import React from 'react'

const WidgetInstagram = () => {
  return (
    <div className="widget widget--footer widget-instagram">
      <h4 className="widget__title">Instagram Widget</h4>
      <div className="widget__content">
        <ul id="instagram-feed" className="widget-instagram__list" />
        <a
          href="https://www.instagram.com/dan.fisher.dev"
          className="btn btn-sm btn-instagram btn-icon-right"
        >
          Follow Our Instagram <i className="icon-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default WidgetInstagram
