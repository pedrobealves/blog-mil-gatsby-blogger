import React from 'react'
import MenuItens from '../../Nav/Menu/MenuItens'

const FooterSecondary = () => {
  return (
    <div className="footer-secondary footer-secondary--has-decor">
      <div className="container">
        <div className="footer-secondary__inner">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <ul className="footer-nav">
                <MenuItens />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSecondary
