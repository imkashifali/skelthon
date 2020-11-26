import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(3),
    borderRadius: 6,
  },
}));

export default function SecondLevel() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Skeleton
            animation="wave"
            className={classes.card}
            variant="rect"
            width={500}
            height={700}
          />
        </Grid>
        <Grid item xs={7}>
          <Skeleton
            className={classes.card}
            variant="rect"
            width={700}
            height={700}
          />
        </Grid>
      </Grid>
    </>
  );
}
