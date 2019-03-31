import React from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true

class ThemeProvider extends React.Component {
  state = {
    dark: false,
    full: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    this.setState({ dark })
    window.location.reload()
  }

  toggleFull = () => {
    let full = !this.state.full
    localStorage.setItem('full', JSON.stringify(full))
    this.setState({ full })
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }

    // Getting full mode value from localStorage!
    const lsFull = JSON.parse(localStorage.getItem('full'))
    lsFull && this.setState({ full: lsFull })
  }

  render() {
    const { children } = this.props
    const { dark, full } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          full,
          toggleDark: this.toggleDark,
          toggleFull: this.toggleFull,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
