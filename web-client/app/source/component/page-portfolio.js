import React, {Component, Fragment} from 'react'

import ErrorBoundary from './error-boundary'

import {
  Grid,
  Box,
  Icon,
  Paper,
  Typography,
  withStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
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
    // backgroundColor: theme.palette.primary.light,
    backgroundImage: 'url(/static/images/background.jpg)',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    opacity: 0.9,
  },
}

const PortfolioPage = ({classes}) =>
  <ErrorBoundary>
    {/* Set Box Padding same as the Grid Item spacing */}
    <Box className={classes.content} p={2}>
      <Grid container
            className={classes.container}
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
              <Box p={2} color='secondary.main'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='stretch'
                  flexWrap='wrap'>
                <Typography variant='h6'>BACK-END DEVELOPER at Npartner, LLC | Document Processing Project (NDA)
</Typography>
                <Typography>Jan 2020 - Present</Typography>
              </Box>

              {/* cards */}
              <Box pb={0} color='secondary.main'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-around'
                  alignItems='flex-start'
                  flexWrap='wrap'>
                <Card className={classes.card}>
                  <CardHeader title="Airflow Pipeline"
                              subheader="September 14, 2020">
                  </CardHeader>

                  <CardMedia className={classes.media}
                            image="/static/images/airflow.png"
                            title="img1"></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Created and maintained document processing pipeline using Airflow and Python. Processed 300K documents for further analysis and data mining.
                    </Typography>
                  </CardContent>
                </Card>

                <Card className={classes.card}>
                  <CardHeader title="Authentication"
                              subheader="September 2, 2020">
                  </CardHeader>

                  <CardMedia className={classes.media}
                            image="/static/images/auth.png"
                            title="img1"></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Completed Authentication and Authorization for multiple user roles with JSON Web Tokens, hashing, encryption and according to the best practices. Streamlined the registration process for hundreds of users.
                    </Typography>
                  </CardContent>
                </Card>

                <Card className={classes.card}>
                  <CardHeader title="Data Modeling"
                              subheader="November 8, 2020">
                  </CardHeader>

                  <CardMedia className={classes.media}
                            image="/static/images/data.png"
                            title="img1"></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Implemented the data and optimized the data structure for efficient queries. Increased the efficiency of the analytics team and discoverability of the data for the top management of the company.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>

        <Grid item spacing={2}>
          <Paper square elevation={3}>
            <Box bgcolor='primary.main' p={2}>
              {/* Job Title */}
              <Box p={2} color='secondary.main'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='stretch'
                  flexWrap='wrap'>
                <Typography variant='h6'>BACK-END DEVELOPER at Npartner, LLC | Photo Stock Backend and API, Shalletstock.com
</Typography>
                <Typography>Aug 2016 - Dec 2016</Typography>
              </Box>

              {/* cards */}
              <Box pb={0} color='secondary.main'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-around'
                  alignItems='flex-start'
                  flexWrap='wrap'>
                <Card className={classes.card}>
                  <CardHeader title="Login and Signup"
                              subheader="Aug 4, 2016">
                  </CardHeader>

                  <CardMedia className={classes.media}
                            image="/static/images/shallet1.png"
                            title="img1"></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Created login and signup features with Python and Flask framework. Allowed users to register on the website and upload the images.
                    </Typography>
                  </CardContent>
                </Card>

                <Card className={classes.card}>
                  <CardHeader title="Authentication"
                              subheader="September 22, 2016">
                  </CardHeader>

                  <CardMedia className={classes.media}
                            image="/static/images/shallet2.png"
                            title="img1"></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Setting up the Postgres database, modeling the data and creating REST API. Automated the testing with pytest and increased the general reliability of the project. 
                    </Typography>
                  </CardContent>
                </Card>

                <Card className={classes.card}>
                  <CardHeader title="Deployment and Maintainence"
                              subheader="October 1, 2016">
                  </CardHeader>

                  <CardMedia className={classes.media}
                            image="/static/images/shallet3.png"
                            title="img1"></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Deployed the project to the Google Cloud production server. Setting up the DNS, encryption certificates and Docker containers for easy maintenence of the website.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box> {/* END OF Paper Box */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </ErrorBoundary>

export default withStyles(styles)(PortfolioPage)
