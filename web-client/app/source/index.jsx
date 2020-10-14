import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  CssBaseline,
  ThemeProvider
} from 'material-ui'

import {AppContextProvider} from './context/app-context'
import ErrorBoundary from './component/error-boundary'
import NavRouter from './component/nav-router'
import {theme} from './theme'


class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <AppContextProvider>
          <CssBaseline>
            <ThemeProvider theme={theme}>
              <NavRouter />
            </ThemeProvider>
          </CssBaseline>
        </AppContextProvider>
      </ErrorBoundary>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
