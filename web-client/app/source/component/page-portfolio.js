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

const PortfolioPage = ({classes}) =>
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
                  <Icon color='secondary'>work</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>Projects</Typography>
              </Grid>
            </Grid>

          </Box>
        </Grid>

        <Grid item spacing={2}>
          <Paper square elevation={3}>
            <Box bgcolor='primary.main' p={2}>
              {/* Job Title */}
              <Box pb={0} color='secondary.main'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='stretch'
                  flexWrap='wrap'>
                <Typography variant='h6'>Project Name</Typography>
                <Typography>Jan 2017 - May 2020</Typography>
              </Box>

              {/* Bullets */}
              <Box pt={1} color='text.light'>
                <Typography>Project Description</Typography>
              </Box>
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(PortfolioPage)
