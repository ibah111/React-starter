import { baseRequest } from "../../../../utils/baseRequest";

interface DestroyRegistiresItemsRawParams {
  id: string;
  item_id: number;
}

export default async function DestroyRegistiresItemsRaw(
  params: DestroyRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/${params.item_id}/`;
  try {
    const req = await baseRequest.delete(url);
    return req;
  } catch (error) {}
}
