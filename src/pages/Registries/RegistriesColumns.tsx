import { RegistryModel } from "../../models/Registry.model";
import { GridColDef } from "@mui/x-data-grid-premium";

export default function RegistriesColumns() {
  const columns: GridColDef<RegistryModel>[] = [
    {
      field: "id",
      headerName: "ID",
      valueGetter(params) {
        return params.row.id;
      },
    },
    {
      field: "cession",
      headerName: "cession??",
    },
    {
      field: "created_by",
      headerName: "Кем создано",
    },
    {
      field: "file.name",
      headerName: "Имя файла",
      valueGetter(params) {
        return params.row.file.name;
      },
    },
    {
      field: "status.name",
      headerName: "Статус",
      valueGetter(params) {
        return params.row.status.name;
      },
    },
  ];
  return columns.map<GridColDef<RegistryModel>>((items) => ({
    ...items,
    headerAlign: "center",
  }));
}
