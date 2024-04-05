import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

interface DestroyRegistiresItemsRawParams {
  id: string;
  item_id: number;
}

export default function DestroyRegistiresItemsRaw(
  params: DestroyRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/${params.item_id}/`;
  try {
    const req = axios.delete(baseRequest + url);
    return req;
  } catch (error) {}
}
