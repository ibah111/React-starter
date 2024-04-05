import axios from "axios";
import { baseRequest } from "../../../../utils/baseRequest";

enum ListRegistiresItemsRawEnum {
  without_error = "without_errors",
  with_errors = "with_errors",
}

interface ListRegistiresItemsRawParams {
  category: ListRegistiresItemsRawEnum;
  page: number;
  page_number: number;
  id: string;
}

const url = "/api/cessions/registries/{id}/items-raw/";

export default async function ListRegistiresItemsRaw(
  params: ListRegistiresItemsRawParams
) {
  try {
    const req = await axios.get(baseRequest + url, {
      data: params,
    });
    console.log("ListRegistiresItemsRaw req", req);
    return req;
  } catch (error) {
    console.log("ListRegistiresItemsRaw error", error);
    return error;
  }
}
