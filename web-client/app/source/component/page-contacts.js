import React, {Component, Fragment} from 'react'

import ErrorBoundary from './error-boundary'

import {
  Grid,
  Box,
  Icon,
  Paper,
  Typography,
  withStyles,
} from 'material-ui'

import {theme} from './../theme'


const styles = {
  content: {
    // 100 vertical height - (Mobile Toolbar[56px] + Tabs[48px])
    minHeight: 'calc(100vh - 104px)',
    [theme.breakpoints.up('sm')]: {
      // 100 vertical height - (Desktop Toolbar[64px] + Tabs[48px])
      minHeight: 'calc(100vh - 112px)',
    },
    backgroundColor: theme.palette.primary.light,
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}

const ContactsPage = ({classes}) =>
  <ErrorBoundary>
    {/* Set Box Padding same as the Grid Item spacing */}
    <Box className={classes.content} p={2}>
      <Grid container
            direction='column'
            alignItems='stretch'
            spacing={2}>
        <Grid item spacing={2}>
          <Box bgcolor='primary'>
            <Grid container alignItems='center'>
              <Grid item>
                <Box pr={1}>
                  <Icon color='secondary'>link</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>http://link.com</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems='center'>
              <Grid item>
                <Box pr={1}>
                  <Icon color='secondary'>phone</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>111-222-333</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems='center'>
              <Grid item>
                <Box pr={1}>
                  <Icon color='secondary'>room</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>New York</Typography>
              </Grid>
            </Grid>
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
          </Box>
        </Grid>

      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(ContactsPage)
