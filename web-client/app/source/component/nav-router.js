import React, {Component, Fragment} from 'react'
import {Router, Route, Link} from 'react-router-dom'
import history from './../history'

import ErrorBoundary from './error-boundary'
import NavAppBar from './nav-app-bar'
import ResumePage from './page-resume'
import PortfolioPage from './page-portfolio'
import ContactsPage from './page-contacts'


const NavRouter = () =>
  <ErrorBoundary>
    <Router history={history}>
      <Route path='/' render={({location}) => (
        <Fragment>
          <NavAppBar />

          <Route exact path='/' component={ResumePage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/contacts' component={ContactsPage} />
        </Fragment>
      )} />
    </Router>
  </ErrorBoundary>

export default NavRouter
