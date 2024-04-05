import { baseRequest } from "../../../../utils/baseRequest";
import { RegistryModel } from "../../../../models/Registry.model";

interface ListRegistriesParams {
  page: number;
  pageSize: number;
}

export default async function ListRegistries(params: ListRegistriesParams) {
  const url = `/api/cessions/registries/`;
  try {
    console.log("baseRequest", baseRequest);
    const req: RegistryModel = await baseRequest.get(url, {
      data: { ...params },
    });
    console.log("ListRegistries", req);
    return req;
  } catch (error) {
    console.log("ListRegistries", error);
    return error;
  }
}
