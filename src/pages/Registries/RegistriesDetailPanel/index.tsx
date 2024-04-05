import { Stack, Paper } from "@mui/material";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import React from "react";
import RegistryDetailPanelColumns from "./RegistryDetailPanelColumns";
import RegistriesItemsRawModel from "./RegistriesItemsRaw.model";
import ListRegistiresItemsRaw from "../../../api/Cessions/RegistiresItemsRaw/Get/ListRegistiresItemsRaw";

interface RegistriesDetailPanelProps {
  id: number;
}

export default function RegistriesDetailPanel({
  id,
}: RegistriesDetailPanelProps) {
  const [loading, setLoading] = React.useState(false);
  const [rows, setRows] = React.useState<RegistriesItemsRawModel[]>([]);
  const request = React.useCallback(async () => {
    setLoading(true);
    return await ListRegistiresItemsRaw({
      id: String(id),
      page: 0,
      page_number: 0,
    })
      .then((res) => {
        if (res) {
          //@ts-ignore
          setRows(res.data!);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [id]);
  React.useEffect(() => {
    request();
  }, [request]);
  return <RegistryCard func={request} rows={rows} loading={loading} />;
}

interface RegistryCardParams {
  func: VoidFunction;
  rows: RegistriesItemsRawModel[];
  loading: boolean;
}

function RegistryCard({ func, rows, loading }: RegistryCardParams) {
  const columns = RegistryDetailPanelColumns();
  return (
    <Stack
      sx={{ py: 2, height: "100%", boxSizing: "border-box" }}
      direction="column"
    >
      <Paper sx={{ flex: 1, mx: "auto", width: "90%", p: 1 }}>
        <Stack direction="column" spacing={1} sx={{ height: 1 }}>
          <DataGridPremium
            loading
            density="compact"
            columns={columns}
            rows={rows}
            sx={{ flex: 1 }}
            hideFooter
            autoHeight
            getRowId={(row) => row.id!}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
