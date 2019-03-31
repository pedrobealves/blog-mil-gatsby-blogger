// custom typefaces
import React from 'react'
import 'typeface-montserrat'
import { ThemeProvider } from './src/context/ThemeContext'

require('bootstrap/dist/css/bootstrap.css')
require('./src/styles/assets/scss/style-basketball.scss')

// const lsDark = JSON.parse(localStorage.getItem('dark'))

// lsDark && require('./src/styles/assets/scss/style-basketball-dark.scss')

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
