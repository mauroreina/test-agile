import React from "react";
import {
  CssBaseline,
  Box,
  Container,
  TextField,
  Grid,
  Autocomplete,
} from "@mui/material";
import useMain from "./hook";
import { CardPlayer } from "../../components/cardPlayer";

export const Main = () => {
  const { search, findData, dataLabel } = useMain();
  return (
    <>
      <CssBaseline />
      <Container fixed mb={5}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }} mb={5}>
          <Grid spacing={2} mb={5} mt={5}>
            <Grid xs={12} spacing={2} mb={5}>
              Type and select name of the player
            </Grid>
            <Grid xs={12} spacing={2}>
              <Autocomplete
                disablePortal
                id="combo-box"
                options={dataLabel}
                sx={{ width: 300 }}
                onChange={(event, newValue) => findData(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Find and Select Name" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {search.map((s) => (
              <Grid item xs={3}>
                <CardPlayer player={s} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
