import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface UpdateRegistiresItemsRawParams {
  id: string;
  item_id: string;
  data: string;
}

export default function UpdateRegistiresItemsRaw(
  params: UpdateRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/${params.item_id}/`;
  try {
    const req = axios.patch(baseRequest + url, {
      data: params.data,
    });
    return req;
  } catch (error) {
    console.log("UpdateRegistiresItemsRaw error", error);
    return error;
  }
}
