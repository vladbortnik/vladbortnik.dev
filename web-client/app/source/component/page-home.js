import React, {Component, Fragment} from 'react'
import {
  Grid,
  Box,
  Button,
  Paper,
  Chip,
  Icon,
  Link,
  Typography,
  withStyles,
} from 'material-ui'

import ErrorBoundary from './error-boundary'
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
    position: 'fixed',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bullets: {
    marginTop: '0px',
    marginBottom: '0px',
  },
  chipSchedule: {
    backgroundColor: theme.palette.chip.schedule,
  },
  chipSkill: {
    backgroundColor: theme.palette.chip.skill,
  },
  chipLocation: {
    backgroundColor: theme.palette.chip.location,
  },
  icon: {
    textDecoration: false,
  },
  myVideo: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
  },
}

const HomePage = ({classes}) =>
  <ErrorBoundary>
    <video autoPlay muted loop className={classes.myVideo}>
      <source src="/static/back.mp4" type="video/mp4"></source>
    </video>
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
                  <Icon color='secondary'>face</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>Short Bio</Typography>
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
                <Typography variant='h6'>My name is Vlad Bortnik and I am a recent college graduate with a Bachelor's Degree in Computer Science from Brooklyn College, City University of New York. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances of my company.</Typography>
                <Typography>New York, November 2020</Typography>
              </Box>

            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(HomePage)
