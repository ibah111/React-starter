import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface ListRegistriesParams {
  page: number;
  pageSize: number;
}

export default function ListRegistries(params: ListRegistriesParams) {
  const url = `/api/cessions/registries/`;
  try {
    const req = axios.get(baseRequest + url, {
      data: { ...params },
    });
    console.log("ListRegistries", req);
    return req;
  } catch (error) {
    console.log("ListRegistries", error);
    return error;
  }
}
