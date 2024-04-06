import { GridColDef } from "@mui/x-data-grid-premium";
import RegistriesItemsRawModel from "./RegistriesItemsRaw.model";

export default function RegistryDetailPanelColumns(): GridColDef<RegistriesItemsRawModel>[] {
  const columns: GridColDef<RegistriesItemsRawModel>[] = [
    {
      field: "id",
      headerName: "id",
      type: "number",
    },
    {
      type: "boolean",
      field: "processed",
      headerName: "Процесс",
    },
    {
      field: "creadit.date",
      headerName: "Дата кредита",
      valueGetter(params) {
        return params.row.credit?.date || " ";
      },
    },
    {
      field: "creadit.name",
      headerName: "Номер кредита",
      valueGetter(params) {
        return params.row.credit?.number || " ";
      },
    },
    {
      field: "debtor.dob",
      headerName: "Должник: Когда добавлен?",
      valueGetter: (params) => {
        return params.row.debtor?.dob || " ";
      },
    },
    {
      field: "debtor.gender",
      headerName: "Должник: Пол",
      valueGetter: (params) => {
        return params.row.debtor?.gender || " ";
      },
    },
    {
      field: "debtor.fio",
      headerName: "Должник: FIO",
      valueGetter: (params) => {
        const FIO =
          params.row.debtor?.last_name +
          " " +
          params.row.debtor?.first_name +
          " " +
          params.row.debtor?.middle_name;
        return FIO || " ";
      },
    },
    {
      field: "debtor.actual",
      headerName: "Должник: Адрес проживания",
      valueGetter: (params) => {
        return params.row.debtor?.address_actual_main || " ";
      },
    },
    {
      field: "debtor.address_registration_main",
      headerName: "Должник: Адрес регистрации",
      valueGetter: (params) => {
        return params.row.debtor?.address_registration_main || " ";
      },
    },
    {
      field: "debtor_personal_data.inn",
      headerName: "Должник(документы): ИНН",
      valueGetter: (params) => {
        return params.row.debtor_personal_data?.inn || " ";
      },
    },
    {
      field: "debtor_personal_data.passport_issue_date",
      headerName: "Должник(документы): Дата выдачи паспорта",
      valueGetter: (params) => {
        return params.row.debtor_personal_data?.passport_issue_date || " ";
      },
    },
    {
      field: "debtor_personal_data.passport_issued",
      headerName: "Должник(документы): passport_issued",
      valueGetter: (params) => {
        return params.row.debtor_personal_data?.passport_issued || " ";
      },
    },
    {
      field: "debtor_personal_data.passport_series",
      headerName: "Должник(документы): Серия пасспорта",
      valueGetter: (params) => {
        return params.row.debtor_personal_data?.passport_series || " ";
      },
    },
    {
      field: "debtor_personal_data.passport_number",
      headerName: "Должник(документы): Номер пасспорта",
      valueGetter: (params) => {
        return params.row.debtor_personal_data?.passport_number || " ";
      },
    },
    {
      field: "debtor_personal_data.snils",
      headerName: "Должник(документы): СНИЛС",
      valueGetter: (params) => {
        return params.row.debtor_personal_data?.snils || " ";
      },
    },
  ];
  return columns.map((items) => ({
    headerAlign: "center",
    center: "center",
    ...items,
  }));
}
