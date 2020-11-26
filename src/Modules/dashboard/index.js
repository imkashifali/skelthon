import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
    borderRadius:12

  },
  media: {
    height: 190,
  },
}));


export default function Variants() {
  const classes = useStyles();

  return (
   <>
        <Grid container >
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
      </Grid>


      <Grid container >
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
        <Grid item xs={3}>
      <Skeleton className={classes.card} variant="rect" width={280} height={130} />
        </Grid>
      </Grid>
      </> 
       
    
  );
}
