import express from "express";

const app = express();

app.use(express.json({ strict: true }));

app
  .listen(4000, () => {
    console.log("⚡ Server listening on port 4000 ⚡");
  })
  .on("error", (error) => {
    console.error(error);
  });
