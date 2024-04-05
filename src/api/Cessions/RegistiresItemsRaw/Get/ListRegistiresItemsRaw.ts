import { baseRequest } from "../../../../utils/baseRequest";

enum ListRegistiresItemsRawEnum {
  without_error = "without_errors",
  with_errors = "with_errors",
}

interface ListRegistiresItemsRawParams {
  page: number;
  page_number: number;
  id: string;
  category?: ListRegistiresItemsRawEnum;
}

const url = "/api/cessions/registries/{id}/items-raw/";

export default async function ListRegistiresItemsRaw(
  params: ListRegistiresItemsRawParams
) {
  try {
    const req = await baseRequest.get(url, {
      data: params,
    });
    console.log("ListRegistiresItemsRaw req", req);
    return req;
  } catch (error) {
    console.log("ListRegistiresItemsRaw error", error);
    return error;
  }
}
