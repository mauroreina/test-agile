import React from "react";
import {
  CssBaseline,
  Box,
  Container,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import useCounterTime from "./hook";

export const CounterTime = () => {
  const {
    setStartTime,
    time,
    handleInput,
    listings,
    saveActivity,
    nameActivity,
  } = useCounterTime();
  return (
    <>
      <CssBaseline />
      <Container fixed mb={5}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }} mb={5}>
          <Grid spacing={2} mb={5} mt={5}>
            <Grid xs={12} spacing={2} mb={5}>
              Save task to Redux and show with Selector
            </Grid>
            <Grid xs={12} spacing={2}>
              <TextField
                id="outlined-basic"
                label="Task"
                variant="outlined"
                value={nameActivity}
                onChange={(e) => handleInput(e)}
              />
              <TextField
                id="outlined-basic"
                label="Time"
                variant="outlined"
                value={time}
              />
              <Button variant="text" onClick={() => setStartTime(true)}>
                Start time
              </Button>
              <Button variant="text" onClick={() => saveActivity()}>
                Stop time
              </Button>
            </Grid>
            <Grid xs={12} spacing={2}>
              {listings.map((listing) => (
                <Grid xs={12} spacing={2}>
                  {`${listing.activity} - ${listing.time} `}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
