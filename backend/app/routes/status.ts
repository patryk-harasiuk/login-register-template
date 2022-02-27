import { APIRoute } from "types/API";
import { HTTPMethod } from "../types/HTTP";

export default {
  method: HTTPMethod.GET,
  url: "/status",
  controller: () => {
    return {};
  },
} as APIRoute;
