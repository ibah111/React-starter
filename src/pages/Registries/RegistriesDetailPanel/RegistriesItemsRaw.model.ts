export default class RegistriesItemsRawModel {
  id: number;
  credit: number;
  errors: {
    debtor: string;
    debtor_personal_data: string;
    credit: string;
  };
}
