import express from "express";

import routes from "./routes";

const app = express();

app.use(express.json({ strict: true }));

for (let route of routes) {
  app[route.method.toLocaleLowerCase()]((res, req, next) => {
    console.log(req.url);

    res.send("ok");
  });
}

app
  .listen(4000, () => {
    console.log("⚡ Server listening on port 4000 ⚡");
  })
  .on("error", (error) => {
    console.error(error);
  });
