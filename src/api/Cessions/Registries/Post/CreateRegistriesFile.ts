import { baseRequest } from "../../../../utils/baseRequest";

interface CreateRegistriesFileParams {
  check_inn: boolean;
  check_adress: boolean;
  check_fssp: boolean;
  name: string;
  comment: string;
  /**
   * @todo
   * binary string
   */
  file: string;
  cession: string;
  status: string;
}

const url = "/api/cessions/registries/upload/";

export default async function CreateRegistriesFile(
  params: CreateRegistriesFileParams
) {
  try {
    const req = await baseRequest.post(url, {
      data: params,
    });
    console.log("CreateRegistriesFile req", req);
    return req;
  } catch (error) {
    console.log("CreateRegistriesFile error", error);
    return error;
  }
}
