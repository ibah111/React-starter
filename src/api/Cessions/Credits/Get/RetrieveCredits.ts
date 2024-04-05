import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface RetrieveCreditsParameters {
  id: number;
}
const url = "/api/credits/";
export default function RetrieveCredits(params: RetrieveCreditsParameters) {
  const urlId = `${url}${params.id}`;
  try {
    const req = axios.get(baseRequest + urlId);
    console.log("RetrieveCredits: ", req);
    return req;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
}
