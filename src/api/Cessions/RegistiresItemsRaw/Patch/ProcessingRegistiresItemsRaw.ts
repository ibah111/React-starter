import { baseRequest } from "../../../../utils/baseRequest";

class ProcessingRegistiresItemsRawRequestBody {
  check_inn: boolean;
  check_adress: boolean;
  check_fssp: boolean;
}

interface ProcessingRegistiresItemsRawParams {
  id: string;
  item_id: number;
  data: ProcessingRegistiresItemsRawRequestBody;
}

export default async function ProcessingRegistiresItemsRaw(
  params: ProcessingRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/${params.item_id}/processing/`;
  try {
    const req = await baseRequest.patch(url, {
      data: params.data,
    });
    console.log("ProcessingRegistiresItemsRaw req", req);
    return req;
  } catch (error) {
    console.log("ProcessingRegistiresItemsRaw error: ", error);
    return error;
  }
}
