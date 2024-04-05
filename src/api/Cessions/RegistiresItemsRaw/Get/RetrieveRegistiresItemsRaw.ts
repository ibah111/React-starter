import { baseRequest } from "../../../../utils/baseRequest";

class RetrieveRegistiresItemsRawData {
  id: number;
  data: string;
  error: string;
  processed: boolean;
}

interface RetrieveRegistiresItemsRawParams {
  id: string;
  item_id: number;
  data: RetrieveRegistiresItemsRawData;
}

export default async function RetrieveRegistiresItemsRaw(
  params: RetrieveRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/${params.item_id}/`;
  try {
    const req = await baseRequest.get(url, {
      data: params.data,
    });
    console.log("RetrieveRegistiresItemsRaw", req);
    return req;
  } catch (error) {
    console.log("RetrieveRegistiresItemsRaw error", error);
    return error;
  }
}
