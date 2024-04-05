import {
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid-premium";
import ImportButton from "./ImportButton";
import { Grid } from "@mui/material";

export default function RegistriesToolbar() {
  return (
    <Grid container spacing={"0.5px"}>
      <Grid item>
        <GridToolbarColumnsButton variant="text" />
      </Grid>
      <Grid item>
        <GridToolbarDensitySelector />
      </Grid>
      <Grid item>
        <GridToolbarFilterButton />
      </Grid>
      <Grid item>
        <GridToolbarExport />
      </Grid>
      <Grid item>
        <ImportButton />
      </Grid>
    </Grid>
  );
}
