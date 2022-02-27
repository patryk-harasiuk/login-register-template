import express from "express";

import { createAPIError } from "./lib/error";
import { responseWithSuccess, closeWithError } from "lib/http";
import routes from "./routes";

const app = express();

app.use(express.json({ strict: true }));

for (let route of routes) {
  app[route.method.toLocaleLowerCase()](route.url, (res, req, next) => {
    try {
      const response = route.controller(res, req, next);

      return responseWithSuccess(res, response);
    } catch (error) {
      return closeWithError(res, createAPIError(error));
    }
  });
}

app
  .listen(4000, () => {
    console.log("⚡ Server listening on port 4000 ⚡");
  })
  .on("error", (error) => {
    console.error(error);
  });
