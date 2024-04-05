import { baseRequest } from "../../../../utils/baseRequest";
import { RegistryModel } from "../../../../models/Registry.model";

interface ListRegistriesParams {
  page: number;
  pageSize: number;
}

export default async function ListRegistries(params: ListRegistriesParams) {
  const url = `/api/cessions/registries/`;
  try {
    const req: RegistryModel = await baseRequest.get(url, {
      data: { ...params },
    });
    return req;
  } catch (error) {
    console.log("ListRegistries error", error);
    return error;
  }
}
