import express from "express";

import { createAPIError } from "./lib";
import {
    responseWithSuccess,
    closeWithError,
    validateRequestPayload,
} from "./lib";
import routes from "./routes";

const app = express();

app.use(express.json({ strict: true }));

for (let route of routes) {
    app[route.method.toLocaleLowerCase()](route.url, (res, req, next) => {
        try {
            if (route.schema)
                req.body = validateRequestPayload(req.body, route.schema);

            const response = route.controller(res, req, next);

            return responseWithSuccess(res, response);
        } catch (error) {
            return closeWithError(res, createAPIError(error));
        }
    });
}

app.listen(4000, () => {
    console.log("⚡ Server listening on port 4000 ⚡");
}).on("error", (error) => {
    console.error(error);
});
