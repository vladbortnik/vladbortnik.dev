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
  bullets: {
    marginTop: '0px',
    marginBottom: '0px',
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
                  <Icon color='secondary'>school</Icon>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant='h6' color='secondary'>Skills</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Paper square elevation={3}>
          <Box bgcolor='primary.main' p={2}>
            {/* Job Title */}
            <Box pb={0} color='secondary.main'
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='stretch'
                flexWrap='wrap'>
              <Typography variant='h6'>Technical Skills</Typography>
              <Typography></Typography>
            </Box>

            <Grid item spacing={2}>
              <Box color={'text.light'}>
                <ul className={classes.bullets}>
                  <li>Programming languages:
                    <ul>
                      <li>Python</li>
                      <li>C++</li>
                      <li>Java</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SQL</li>
                    </ul>
                  </li>

                  <li>Databases: Postgres, MySQL, SQLite
                    <ul>
                      <li>Python</li>
                      <li>C++</li>
                      <li>Java</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SQL</li>
                    </ul>
                  </li>

                  <li>Frameworks:
                    <ul>
                      <li>Flask</li>
                      <li>Django</li>
                      <li>REST API</li>
                    </ul>
                  </li>

                  <li>Operating Systems/Servers:
                    <ul>
                      <li>Linux/Unix</li>
                      <li>Google Cloud Platform</li>
                      <li>Docker Containers</li>
                    </ul>
                  </li>

                  <li>Other:
                    <ul>
                      <li>Bash</li>
                      <li>SSL</li>
                      <li>SSH</li>
                      <li>git</li>
                      <li>hashing</li>
                    </ul>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(ContactsPage)
