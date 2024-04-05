import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";
import { RegistryModel } from "../../../../models/Registry.model";

interface ListRegistriesParams {
  page: number;
  pageSize: number;
}

export default async function ListRegistries(params: ListRegistriesParams) {
  const url = `/api/cessions/registries/`;
  try {
    const req: RegistryModel = await axios.get(baseRequest + url, {
      data: { ...params },
    });
    console.log("ListRegistries", req);
    return req;
  } catch (error) {
    console.log("ListRegistries", error);
    return error;
  }
}
