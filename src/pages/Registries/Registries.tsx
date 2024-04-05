import { DataGridPremium } from "@mui/x-data-grid-premium";
import useGridRegistries from "./useGridRegistries";
import CustomPagination from "../../components/DataGridComponents/CustomPagination";
import RegistriesToolbar from "./RegistriesToolbar/RegistriesToolbar";
import React from "react";
import DeleteRegControl from "./DeleteRegControl";
import DeleteRegDialog from "./DeleteRegDialog";
import RegistriesDetailPanel from "./RegistriesDetailPanel/RegistriesDetailPanel";

export enum RegistriesEvents {
  delete = "delete",
  download = "download",
}

export class RegEvent<Value = number | string | object> extends Event {
  constructor(type: RegistriesEvents, value: Value) {
    super(type);
    this.value = value;
  }
  value: Value;
}

export default function Registries() {
  const DialogTarget = React.useMemo(() => new EventTarget(), []);

  const { refresh, ...props } = useGridRegistries(DialogTarget);

  const DeleteRegControlDialog = DeleteRegControl({
    DialogTarget,
    refresh,
  });
  return (
    <>
      <DataGridPremium
        {...props}
        slots={{
          pagination: CustomPagination,
          toolbar: RegistriesToolbar,
        }}
        slotProps={{}}
        getDetailPanelContent={(params) => {
          return RegistriesDetailPanel(params.row.id);
        }}
      />
      {DeleteRegControlDialog.open && (
        <DeleteRegDialog
          open={DeleteRegControlDialog.open}
          regId={DeleteRegControlDialog.regId}
          onClose={DeleteRegControlDialog.closeDeleteRegDialog}
        />
      )}
    </>
  );
}
