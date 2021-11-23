import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const CardPlayer = ({ player }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 245,
      margin: "10px",
    },
  });
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {player.first_name} {player.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            h_in: {player.h_in}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            h_meters: {player.h_meters}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
