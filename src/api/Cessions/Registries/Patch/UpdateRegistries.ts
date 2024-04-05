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

export default async function UpdateRegistries(params: UpdateRegistriesParams) {
  const url = `/api/cessions/registries/${params.id}/`;
  try {
    const req = await baseRequest.patch(url, {
      data: params.data,
    });
    console.log("UpdateRegistries", req);
    return req;
  } catch (error) {
    console.log("UpdateRegistries error: ", error);
    return error;
  }
}
