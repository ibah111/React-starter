import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface ExportRegistriesParams {
  id: number;
}
export default function ExportRegistries(params: ExportRegistriesParams) {
  const url = `/api/cessions/registries/${params.id}/export/`;
  try {
    const req = axios.get(baseRequest + url);
    console.log("ExportRegistries", req);
    return req;
  } catch (error) {
    console.log("ExportRegistries error: ", error);
  }
}
