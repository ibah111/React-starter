import { RegistryModel } from "../../models/Registry.model";
import { GridColDef } from "@mui/x-data-grid-premium";

export default function RegistriesColumns() {
  const columns: GridColDef<RegistryModel>[] = [
    {
      field: "filename",
      headerName: "Название файла",
    },
    {
      field: "created_at",
      headerName: "Когда создано",
    },
    {
      field: "credits_count",
      headerName: "Кол-во кредитных договоров",
    },
    {
      field: "created_by",
      headerName: "Кем создано",
    },
    {
      field: "status",
      headerName: "Статус",
    },
    {
      field: "actions",
      headerName: "Операции",
      type: "actions",
    },
  ];
  return columns.map<GridColDef<RegistryModel>>((items) => ({
    ...items,
    headerAlign: "center",
  }));
}
