export class RegistryModel {
  id: number;
  cession: string;
  created_by: string;
  creadits_count: string;
  file: {
    name: string;
    url: string;
  };
  status: {
    code: string;
    color: string;
    name: string;
  };
}
