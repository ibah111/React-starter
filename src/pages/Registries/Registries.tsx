import { DataGridPremium } from "@mui/x-data-grid-premium";
import useGridRegistries from "./useGridRegistries";

export default function Registries() {
  const props = useGridRegistries();
  return (
    <>
      <DataGridPremium {...props} />
    </>
  );
}
