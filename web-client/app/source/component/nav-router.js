import React, {Component, Fragment} from 'react'
import {Router, Route, Link} from 'react-router-dom'
import history from './../history'

import ErrorBoundary from './error-boundary'
import NavAppBar from './nav-app-bar'
import HomePage from './page-home'
import ExperiencePage from './page-experience'
import EducationPage from './page-education'
import PortfolioPage from './page-portfolio'
import SkillsPage from './page-skills'


const NavRouter = () =>
  <ErrorBoundary>
    <Router history={history}>
      <Route path='/' render={({location}) => (
        <Fragment>
          <NavAppBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/experience' component={ExperiencePage} />
          <Route exact path='/education' component={EducationPage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/skills' component={SkillsPage} />
        </Fragment>
      )} />
    </Router>
  </ErrorBoundary>

export default NavRouter
