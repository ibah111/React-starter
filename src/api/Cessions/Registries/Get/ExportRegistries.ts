import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface ExportRegistriesParams {
  id: number;
}
export default async function ExportRegistries(params: ExportRegistriesParams) {
  const url = `/api/cessions/registries/${params.id}/export/`;
  try {
    const req = await axios.get(baseRequest + url);
    console.log("ExportRegistries", req);
    return req;
  } catch (error) {
    console.log("ExportRegistries error: ", error);
  }
}
