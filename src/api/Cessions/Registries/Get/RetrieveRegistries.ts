import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface RetrieveRegistriesParams {
  id: number;
}

export default function RetrieveRegistries(params: RetrieveRegistriesParams) {
  const url = `/api/cessions/registries/${params.id}/`;
  try {
    const req = axios.get(baseRequest + url);
    console.log("RetrieveRegistries", req);
  } catch (error) {
    console.log("RetrieveRegistries error", error);
    return error;
  }
}
