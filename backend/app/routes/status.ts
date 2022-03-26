import { APIRoute } from "../types/API";
import { HTTPMethod } from "../types/HTTP";

export default {
    method: HTTPMethod.GET,
    url: "/status",
    // middleware: [],
    controller: () => {
        return {};
    },
} as APIRoute;
