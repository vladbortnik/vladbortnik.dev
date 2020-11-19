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

const ExperiencePage = ({classes}) =>
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
                <Typography variant='h6' color='secondary'>Work Experience</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

 {/* ----------------------------------------------------------------------------------- */}

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
                <Typography variant='h6'>BACK-END DEVELOPER at Npartner, LLC | Document Processing Project (NDA)</Typography>
                <Typography>Jan 2020 - Present</Typography>
              </Box>

              {/* Bullets */}
              <Box pt={1} color='text.light'>
                <Typography>Commercial Web ApplicaJon that works with Big Data.</Typography>
                <ul className={classes.bullets}>
                  <li>Authentication module, Identity and Access Management (IAM)</li>
                  <li>Automation Unit Testing on Python (pytest) </li>
                  <li>Creation REST API with Flask framework</li>
                  <li>Designing Data Model with SQLAlchemy (Postgres)</li>
                  <li>Setting up Continuous Integration with Docker Containers</li>
                  <li>Deployment on Google Cloud Platform, SSL, SSH </li>
                </ul>
              </Box>

              {/* Link and chips */}
              <Box flexWrap='wrap'
                  display='flex'>
                {/* Link */}
                <Box ml={1} mt={2}>
                  <Button variant='outlined'
                          color='secondary'
                          href='http://github.com/vladbortnik'>
                    <Icon color='secondary'>language</Icon>
                    <Box ml={1}>repository</Box>
                  </Button>
                </Box>

                {/* chips */}
                <Box display='flex'>
                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>schedule</Icon>}
                          label='Contract'
                          className={classes.chipSchedule}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>room</Icon>}
                          label='Remote'
                          className={classes.chipLocation}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='Python'
                          className={classes.chipSkill}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='Flask'
                          className={classes.chipSkill}/>
                  </Box>
                </Box> {/* END OF chips */}
              </Box> {/* END OF Link and chips */}
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>

 {/* ----------------------------------------------------------------------------------- */}

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
                <Typography variant='h6'>Strive for College | Mentor</Typography>
                <Typography>Jan 2020 - Present</Typography>
              </Box>

              {/* Bullets */}
              <Box pt={1} color='text.light'>
                <Typography>Volunteer Mentor Position in Non-Profit Organization</Typography>
                <li>Helped a number of high school grads & freshmen to get used to the new environment</li>
                <li>Was able to direct young men to choose right direcVon in future career path</li>
              </Box>

              {/* Link and chips */}
              <Box flexWrap='wrap'
                  display='flex'>

                {/* Link */}
                <Box ml={1} mt={2}>
                  <Button variant='outlined'
                          color='secondary'
                          href='https://striveforcollege.org'>
                    <Icon color='secondary'>language</Icon>
                    <Box ml={1}>striveforcollege.org</Box>
                  </Button>
                </Box>
                {/* chips */}
                <Box display='flex'>
                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>schedule</Icon>}
                          label='Part Time'
                          className={classes.chipSchedule}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>room</Icon>}
                          label='New York'
                          className={classes.chipLocation}/>
                  </Box>
                </Box> {/* END OF chips */}
              </Box> {/* END OF Link and chips */}
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>

 {/* ----------------------------------------------------------------------------------- */}

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
                <Typography variant='h6'>College Project Book-Finder</Typography>
                <Typography>Aug 2019 - Dec 2019</Typography>
              </Box>

              {/* Bullets */}
              <Box pt={1} color='text.light'>
                <Typography>The Project allows BC Students to buy & sell textbooks with no commission</Typography>
                <ul className={classes.bullets}>
                  <li>Development of fully functional website, validation, cookies</li>
                  <li>SQL, Python, HTML, CSS, JavaScript is being used</li>
                  <li>Deployment on Google Cloud Platform, SSL, SSH</li>
                  <li>DNS configuration, Domain Name & Load Balancer Setup</li>
                </ul>
              </Box>

              {/* Link and chips */}
              <Box flexWrap='wrap'
                  display='flex'>
                {/* Link */}
                <Box ml={1} mt={2}>
                  <Button variant='outlined'
                          color='secondary'
                          href='http://book-finder.us'>
                    <Icon color='secondary'>language</Icon>
                    <Box ml={1}>book-finder.us</Box>
                  </Button>
                </Box>

                {/* chips */}
                <Box flexWrap='wrap' display='flex'>
                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>schedule</Icon>}
                          label='College Project'
                          className={classes.chipSchedule}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>room</Icon>}
                          label='New York'
                          className={classes.chipLocation}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='Python'
                          className={classes.chipSkill}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='HTML'
                          className={classes.chipSkill}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='Flask'
                          className={classes.chipSkill}/>
                  </Box>
                </Box> {/* END OF chips */}
              </Box> {/* END OF Link and chips */}
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>

 {/* ----------------------------------------------------------------------------------- */}

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
                <Typography variant='h6'>Stock Photo Project</Typography>
                <Typography>Aug 2016 - Dec 2016</Typography>
              </Box>

              {/* Bullets */}
              <Box pt={1} color='text.light'>
                <ul className={classes.bullets}>
                  <li>First commercial project</li>
                  <li>Automation Unit Testing on Python</li>
                  <li>Deployment on Google Cloud Platform, SSL, SSH</li>
                </ul>
              </Box>

              {/* Link and chips */}
              <Box flexWrap='wrap'
                  display='flex'>
                {/* Link */}
                <Box ml={1} mt={2}>
                  <Button variant='outlined'
                          color='secondary'
                          href='https://shalletstock.com'>
                    <Icon color='secondary'>language</Icon>
                    <Box ml={1}>shalletstock.com</Box>
                  </Button>
                </Box>

                {/* chips */}
                <Box display='flex'
                     flexWrap='wrap'>
                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>schedule</Icon>}
                          label='Part Time'
                          className={classes.chipSchedule}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>room</Icon>}
                          label='New York'
                          className={classes.chipLocation}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='Python'
                          className={classes.chipSkill}/>
                  </Box>

                  <Box ml={1} mt={2}>
                    <Chip icon={<Icon color='action'>code</Icon>}
                          label='Flask'
                          className={classes.chipSkill}/>
                  </Box>
                </Box> {/* END OF chips */}
              </Box> {/* END OF Link and chips */}
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(ExperiencePage)
