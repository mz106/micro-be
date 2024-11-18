const express = require("express");
const expressApp = require("./expressApp");

const StartServer = async () => {
  const app = express();

  await expressApp(app);

  app
    .listen(5002, () => {
      console.log("express1 listening on port 5001");
    })
    .on("error", (err) => {
      console.log(err);
    });
};

StartServer();
