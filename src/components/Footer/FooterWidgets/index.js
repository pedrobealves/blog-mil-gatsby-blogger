import React from 'react'
import Logo from '../../Common/Logo'
import WidgetContactInfo from './Widgets/WidgetElements/WidgetContactInfo'
import WidgetPopularPosts from './Widgets/WidgetElements/WidgetPopularPosts'
import WidgetInstagram from './Widgets/WidgetElements/WidgetInstagram'
import Widgets from './Widgets'

const FooterWidgets = () => {
  return (
    <div className="footer-widgets">
      <div className="footer-widgets__inner">
        <div className="container">
          <div className="row">
            <Widgets>
              <Logo section="footer" />
            </Widgets>
            <Widgets>
              <WidgetContactInfo />
            </Widgets>
            <Widgets>
              <WidgetPopularPosts />
            </Widgets>
            <Widgets>
              <WidgetInstagram />
            </Widgets>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterWidgets
