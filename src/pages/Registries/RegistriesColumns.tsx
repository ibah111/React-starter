import CustomIconButton from "../../components/IconButton/IconButton";
import { RegistryModel } from "../../models/Registry.model";
import { GridColDef } from "@mui/x-data-grid-premium";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { RegEvent, RegistriesEvents } from "./Registries";

interface RegistriesColumnsProps {
  eventTarget: EventTarget;
  refresh: VoidFunction;
}

export default function RegistriesColumns({
  eventTarget,
  refresh,
}: RegistriesColumnsProps) {
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
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      getActions: (params) => [
        <CustomIconButton
          name={"Удалить"}
          Icon={DeleteIcon}
          func={() => {
            eventTarget.dispatchEvent(
              new RegEvent(RegistriesEvents.delete, params.row.id)
            );
          }}
        />,
        <CustomIconButton
          name={"Скачать"}
          Icon={DownloadIcon}
          func={() => {
            alert(`Скачиваю реестр ${params.row.id}`);
          }}
        />,
      ],
    },
  ];
  return columns.map<GridColDef<RegistryModel>>((items) => ({
    ...items,
    headerAlign: "center",
    align: "center",
    width: 150,
  }));
}
