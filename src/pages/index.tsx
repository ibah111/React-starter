import { Grid } from "@mui/material";
import React from "react";
import SwitchTheme from "../components/ThemeProvider/SwitchTheme/SwitchTheme";

export default function Main() {
  return (
    <>
      <Grid container height={"100vh"} direction={"column"} spacing={1}>
        <Grid container item spacing={1}>
          <Grid item>
            <SwitchTheme />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
