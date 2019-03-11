import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Header from '../components/Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import '../styles/assets/fonts/font-awesome/icons'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="template-basketball d-block">
            <div className="site-wrapper clearfix">
              <div className="site-overlay" />
              <Header />
              <div className="site-content">
                <div className="container">
                  <div className="row">
                    <div className="content col-md-8">{children}</div>
                    <Sidebar />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </>
      </ThemeProvider>
    </div>
  )
}

export default Template
