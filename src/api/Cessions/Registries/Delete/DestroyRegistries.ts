import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface DestroyRegistriesParams {
  id: number;
}

export default async function DestroyRegistries(
  params: DestroyRegistriesParams
) {
  const url = `/api/cessions/registries/${params.id}/`;
  try {
    const req = await axios.delete(baseRequest + url);
    console.log("DestroyRegistries", req);
    return req;
  } catch (error) {
    console.log("DestroyRegistries error", error);
    return error;
  }
}
