import { APIRoute } from "../types/API";
import { HTTPMethod } from "../types/HTTP";
import { validateTokenMiddleware } from "../middlewares/auth";

export default {
    method: HTTPMethod.GET,
    url: "/status",
    middleware: [validateTokenMiddleware],
    controller: () => {
        return {};
    },
} as APIRoute;
