import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registries from "../../pages/Registries/Registries";
import Main from "../../pages/Main/Main";
import { Grid } from "@mui/material";
import Navigation from "./DrawerNavigation";

export default function Router() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item container>
          <Navigation />
        </Grid>
        <Grid item container>
          <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/Registries" element={<Registries />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}
