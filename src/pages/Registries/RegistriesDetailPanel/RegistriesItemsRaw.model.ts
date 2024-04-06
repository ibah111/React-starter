export default class RegistriesItemsRawModel {
  id?: number;
  errors?: any;
  processed?: boolean;
  credit?: {
    date?: string;
    number?: string;
  };
  debtor?: {
    dob?: string;
    gender?: string;
    last_name?: string;
    first_name?: string;
    middle_name?: string;
    address_actual_main?: string;
    address_registration_main?: string;
  };
  debtor_personal_data?: {
    inn?: number;
    passport_issue_date?: string;
    passport_issued?: string;
    passport_number?: number;
    passport_series?: number;
    snils?: string;
  };
}
