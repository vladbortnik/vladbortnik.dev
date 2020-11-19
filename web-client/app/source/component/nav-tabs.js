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
    height: '280px',
    width: '400px',
  },
  drawer: {
    margin: '10px'
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
            <Tab value='/' label='home' component={Link} to='/' />
            <Tab value='/experience' label='experience' component={Link} to='/experience' />
            <Tab value='/education' label='education' component={Link} to='/education' />
            <Tab value='/portfolio' label='portfolio' component={Link} to='/portfolio' />
            <Tab value='/skills' label='skills' component={Link} to='/skills' />
          </Tabs>
        )}
      </AppContextConsumer>

      <AppContextConsumer>
        {({dispatch, drawer, actions}) => (
          <SwipeableDrawer open={drawer.isOpen}
                           onClose={event => actions.closeDrawer()}
                           onOpen={event => actions.openDrawer()}>
            <Box width={400}
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
                    <Box bgcolor='primary' p={2}>
                      <Grid container
                            alignItems='center'>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>Contacts</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item spacing={2}>
                    <Box bgcolor='primary' p={2}>
                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>mail</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>vladbortnik@pm.me</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>link</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>http://linkedin.com/in/vlad--bortnik</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>link</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>http://github.com/vladbortnik</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>phone</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>+1(929)842-4228 (Mobile)</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>phone</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>+1(929)842-4228 (Skype)</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>phone</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>vladbortnik@pm.me (Skype)</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>phone</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>+1(929)842-4228 (Whatsapp)</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>phone</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>+1(929)842-4228 (Viber)</Typography>
                        </Grid>
                      </Grid>

                      <Grid container alignItems='center'>
                        <Grid item>
                          <Box pr={1}>
                            <Icon color='secondary'>room</Icon>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' color='secondary'>New York Metro Area</Typography>
                        </Grid>
                      </Grid>
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
