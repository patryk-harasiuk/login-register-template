import express, { Response, Request, NextFunction } from "express";

import { createAPIError } from "./lib";
import {
    responseWithSuccess,
    closeWithError,
    validateRequestPayload,
} from "./lib";
import routes from "./routes";
import Config from "./lib/config";

const app = express();

app.use(express.json({ strict: true }));

for (let route of routes) {
    app[route.method.toLocaleLowerCase()](
        route.url,
        ...(route.middleware || []),
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                if (route.schema)
                    req.body = await validateRequestPayload(
                        req.body,
                        route.schema
                    );

                const response = await route.controller(req, res, next);

                return responseWithSuccess(res, response);
            } catch (error) {
                return closeWithError(res, createAPIError(error));
            }
        }
    );
}

app.listen(Config.PORT, () => {
    console.log(`⚡ Server listening on port ${Config.PORT} ⚡`);
}).on("error", (error) => {
    console.error(error);
});
