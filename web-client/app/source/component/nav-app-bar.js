import React, {Component, Fragment} from 'react'
import {
  withStyles,
  Avatar,
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Typography
} from 'material-ui'

import ErrorBoundary from './error-boundary'
import {AppContextConsumer} from './../context/app-context'
import NavTabs from './nav-tabs'


const styles = {
}

const NavAppBar = ({classes}) =>
  <ErrorBoundary>
    <AppBar position='sticky'>
      <Toolbar color='primary'>
        <AppContextConsumer>
          {({dispatch, drawer, actions}) => (
            <IconButton onClick={event => actions.openDrawer()} color='secondary'>
              <Icon>menu</Icon>
            </IconButton>
          )}
        </AppContextConsumer>

        <Typography variant='h6' color='secondary'>
          Vlad Bortnik
        </Typography>
      </Toolbar>
      <NavTabs />
    </AppBar>
  </ErrorBoundary>

export default withStyles(styles)(NavAppBar)
