import React from 'react'
import Symbol from '../../Common/Symbol'
import WidgetContactInfo from './Widgets/WidgetElements/WidgetContactInfo'
import WidgetInstagram from './Widgets/WidgetElements/WidgetInstagram'
import Widgets from './Widgets'

const FooterWidgets = () => {
  return (
    <div className="footer-widgets">
      <div className="footer-widgets__inner">
        <div className="container">
          <div className="row">
            <Widgets>
              <Symbol section="footer" />
            </Widgets>
            <Widgets>
              <WidgetContactInfo />
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
