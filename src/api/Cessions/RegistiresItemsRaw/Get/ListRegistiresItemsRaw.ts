import { baseRequest } from "../../../../utils/baseRequest";

enum ListRegistiresItemsRawEnum {
  without_error = "without_errors",
  with_errors = "with_errors",
}

interface ListRegistiresItemsRawParams {
  id: string;
  page?: number;
  page_number?: number;
  category?: ListRegistiresItemsRawEnum;
}

export default async function ListRegistiresItemsRaw(
  params: ListRegistiresItemsRawParams
) {
  const url = `/api/cessions/registries/${params.id}/items-raw/`;
  try {
    console.log("params: ", params);
    const req = await baseRequest.get(url, {
      data: params,
    });
    return req;
  } catch (error) {
    console.log("ListRegistiresItemsRaw error", error);
    return error;
  }
}
