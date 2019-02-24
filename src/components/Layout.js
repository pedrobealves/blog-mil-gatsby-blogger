import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Header from '../components/Header'
import Footer from './Footer'

import '../styles/assets/fonts/font-awesome/css/font-awesome.min.css'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CSource+Sans+Pro:400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="template-basketball d-block">
            <div className="site-wrapper clearfix">
              <div className="site-overlay" />
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </>
      </ThemeProvider>
    </div>
  )
}

export default Template
