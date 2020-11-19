import React, {Component, Fragment} from 'react'
import {
  withStyles,
  Avatar,
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Typography,
  Button,
  Box
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

        <Typography variant='h6' color='secondary' >
                  <Button
                          color='secondary'
                          href='https://vladbortnik.dev'>
                    <Box ml={1}>Vlad Bortnik</Box>
                  </Button>
                  <Button
                          color='secondary'
                          href='/static/resume.pdf'>
                    <Box ml={1}>[resume.pdf]</Box>
                  </Button>
        </Typography>
      </Toolbar>
      <NavTabs />
    </AppBar>
  </ErrorBoundary>

export default withStyles(styles)(NavAppBar)
