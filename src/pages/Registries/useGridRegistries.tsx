import {
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import React from "react";
import { RegistryModel } from "../../models/Registry.model";
import RegistriesColumns from "./RegistriesColumns";
import ListRegistries from "../../api/Cessions/Registries/Get/ListRegistries";

interface GridResult<T extends GridValidRowModel> {
  columns: GridColDef<T>[];
  rows: T[];
  onPaginationModelChange: (
    model: GridPaginationModel,
    details: GridCallbackDetails<any>
  ) => void;
  paginationModel: GridPaginationModel;
  refresh: () => void;
  loading: boolean;
}

export default function useGridRegistries(): GridResult<RegistryModel> {
  const columns = RegistriesColumns();
  const [loading, setLoading] = React.useState(false);
  const [rows, setRows] = React.useState<RegistryModel[]>([]);
  const [paginationModel, onPaginationModelChange] =
    React.useState<GridPaginationModel>({
      page: 0,
      pageSize: 25,
    });
  const refresh = React.useCallback(() => {
    setLoading(true);
    return ListRegistries({
      ...paginationModel,
    })
      .then((result) => {
        if (result) {
          //@ts-ignore
          const res = result.data as RegistryModel[];
          setRows(res);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [paginationModel]);
  /**
   * отрисовка компонента
   */
  React.useEffect(() => {
    refresh();
  }, [refresh]);
  return {
    loading,
    columns,
    onPaginationModelChange,
    paginationModel,
    rows,
    refresh,
  };
}
