import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface ListCreditsParameters {
  assignee: number;
  assignor: number;
  cession_number: string;
  page: number;
  page_size: number;
  registry: number;
  search: string;
  status: string;
}
const url = "/api/credits/";
export default function ListCredits(params: ListCreditsParameters) {
  try {
    const req = axios.get(baseRequest + url, {
      data: params,
    });
    console.log("ListCredits: ", req);
    return req;
  } catch (error) {
    console.log("error", error);
    return error;
  }
}
