import { baseRequest } from "../../../../utils/baseRequest";

interface UpdateRegistiresItemsRawParams {
  id: string;
  item_id: string;
  data: string;
}

export default async function UpdateRegistiresItemsRaw(
  params: UpdateRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/${params.item_id}/`;
  try {
    const req = await baseRequest.patch(url, {
      data: params.data,
    });
    return req;
  } catch (error) {
    console.log("UpdateRegistiresItemsRaw error", error);
    return error;
  }
}
