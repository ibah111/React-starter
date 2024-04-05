import { GridColDef } from "@mui/x-data-grid-premium";
import RegistriesItemsRawModel from "./RegistriesItemsRaw.model";

export default function RegistryDetailPanelColumns(): GridColDef<RegistriesItemsRawModel>[] {
  const columns: GridColDef<RegistriesItemsRawModel>[] = [
    {
      field: "",
    },
  ];
  return columns.map((items) => ({
    headerAlign: "center",
    center: "center",
    ...items,
  }));
}
