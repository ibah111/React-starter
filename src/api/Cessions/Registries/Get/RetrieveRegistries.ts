import { baseRequest } from "../../../../utils/baseRequest";

interface RetrieveRegistriesParams {
  id: number;
}

export default async function RetrieveRegistries(
  params: RetrieveRegistriesParams
) {
  const url = `/api/cessions/registries/${params.id}/`;
  try {
    const req = await baseRequest.get(url);
    console.log("RetrieveRegistries", req);
  } catch (error) {
    console.log("RetrieveRegistries error", error);
    return error;
  }
}
