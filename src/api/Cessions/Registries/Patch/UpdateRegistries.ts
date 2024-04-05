import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

class UpdateRegistriesData {
  name: string;
  check_inn: boolean;
  check_adress: boolean;
}

interface UpdateRegistriesParams {
  id: number;
  data: UpdateRegistriesData;
}

export default function UpdateRegistries(params: UpdateRegistriesParams) {
  const url = `/api/cessions/registries/${params.id}/`;
  try {
    const req = axios.patch(baseRequest + url, {
      data: params.data,
    });
    console.log("UpdateRegistries", req);
    return req;
  } catch (error) {
    console.log("UpdateRegistries error: ", error);
    return error;
  }
}
