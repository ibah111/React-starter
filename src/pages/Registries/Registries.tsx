import { DataGridPremium } from "@mui/x-data-grid-premium";
import useGridRegistries from "./useGridRegistries";
import { Grid } from "@mui/material";

export default function Registries() {
  const props = useGridRegistries();
  return (
    <Grid item container xs direction={"column"}>
      <DataGridPremium
        {...props}
        sx={{
          height: 400,
          width: "100%",
        }}
      />
    </Grid>
  );
}
