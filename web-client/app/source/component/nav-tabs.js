import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {
  withStyles,
  Avatar,
  Divider,
  Tabs,
  Tab,
  ListItemIcon,
  Icon,
  SwipeableDrawer,
  Box,
  Grid,
  Typography,
} from 'material-ui'

import {AppContextConsumer} from './../context/app-context'
import ErrorBoundary from './error-boundary'
import {theme} from './../theme'


const styles = theme => ({
  icon: {
    color: theme.palette.secondary.main
  },
  avatar: {
    height: '180px',
    width: '250px',
  }
})

const NavTabs = ({classes}) =>
  <ErrorBoundary>
    <Fragment>
      <AppContextConsumer>
        {({dispatch, user}) => (
          <Tabs
            scrollButtons="on"
            variant="scrollable"
            value={location.pathname}
            onChange={(event, value) => dispatch({type: 'SET_ACTIVE_TAB', tab: value})}>
            <Tab value='/' label='resume' component={Link} to='/' />
            <Tab value='/portfolio' label='portfolio' component={Link} to='/portfolio' />
            <Tab value='/contacts' label='contacts' component={Link} to='/contacts' />
          </Tabs>
        )}
      </AppContextConsumer>

      <AppContextConsumer>
        {({dispatch, drawer, actions}) => (
          <SwipeableDrawer open={drawer.isOpen}
                           onClose={event => actions.closeDrawer()}
                           onOpen={event => actions.openDrawer()}>
            <Box width={250}
                 height='100%'
                 bgcolor='primary.main'
                 color='secondary.main'
                 tabIndex={0}
                 role="button"
                 onClick={event => actions.closeDrawer()}
                 onKeyDown={event => actions.closeDrawer()}>
                <Grid container>
                  <Grid item>
                    <Avatar variant='square' className={classes.avatar} src="/static/face.jpeg" />
                  </Grid>

                  <Grid item spacing={2}>
                    <Box ml={12} mt={2}>
                      <Typography variant='h5'>skills</Typography>
                    </Box>

                    <Box color={'text.light'}>
                      <ul>
                        <li>
                          Programming languages: Python, C++, Java, HTML, CSS, JavaScript, SQL
                        </li>

                        <li>
                          Databases: Postgres, MySQL, SQLite
                        </li>

                        <li>
                          Frameworks: Flask, Django, REST API
                        </li>

                        <li>
                          Opera]ng Systems/Servers: Linux/Unix, Google Cloud Plaiorm, Docker Containers
                        </li>

                        <li>
                          Other: Bash, SSL, SSH, git, hashing, etc.
                        </li>
                      </ul>
                    </Box>
                  </Grid>
                </Grid>
            </Box>
          </SwipeableDrawer>
        )}
      </AppContextConsumer>
    </Fragment>
  </ErrorBoundary>

export default withStyles(styles)(NavTabs)
