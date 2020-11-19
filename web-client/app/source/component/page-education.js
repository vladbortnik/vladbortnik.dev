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
  },
  hackerrank: {
    color: '#ffffff'
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
  }
}

const EducationPage = ({classes}) =>
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
                  <Icon color='secondary'>school</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>Education</Typography>
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
                <Typography variant='h6'>Brooklyn College | City University of New York</Typography>
                <Typography>Jan 2017 - Dec 2019</Typography>
              </Box>

              {/* Bullets */}
              <Box pt={1} color='text.light'>
                <Typography>BS in Computer Science</Typography>
                <ul className={classes.bullets}>
                  <li>Relevant Coursework:
                    <ul>
                      <li>C++ (Advanced)</li>
                      <li>Algorithms</li>
                      <li>Data Structures</li>
                      <li>Comp. Architecture</li>
                      <li>Operating Systems</li>
                      <li>Software Development of Large Scale Projects (using Java)</li>
                      <li>Software Engineering</li>
                      <li>OOP (Graduate Level, Java)</li>
                    </ul>
                  </li>
                  <li>Degree GPA: 3.9</li>
                  <li>Honors:</li>
                  <ul>
                    <li>Upsilon Pi Epsilon Honor Society for CIS</li>
                    <li>Dean’s List</li>
                  </ul>
                  <li className={classes.hackerrank}>HackerRank: Gold Badge (Python)</li>
                </ul>
              </Box>
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>

      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(EducationPage)
