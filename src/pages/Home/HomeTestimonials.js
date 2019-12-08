import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 300,
  },
}));

export default function HomeTestimonials() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      {/* xs=3 LTG icon */}
        
        <Grid item xs={4}>
          <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography variant="h5" component="h3">
                First -  People that work at LibertyTrustGroup made the experience very pleasant. 
              </Typography>
          </Paper>

        </Grid>


        <Grid item xs={4}>

<Paper className={classes.root}>
    <Typography variant="h5" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
</Paper>

</Grid>



<Grid item xs={4}>

          <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>

        </Grid>


      </Grid>
    </div>
  );
 
}



