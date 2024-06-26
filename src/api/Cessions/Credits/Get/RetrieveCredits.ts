import { baseRequest } from "../../../../utils/baseRequest";

interface RetrieveCreditsParameters {
  id: number;
}
const url = "/api/credits/";
export default async function RetrieveCredits(
  params: RetrieveCreditsParameters
) {
  const urlId = `${url}${params.id}`;
  try {
    const req = await baseRequest.get(urlId);
    console.log("RetrieveCredits: ", req);
    return req;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
}
