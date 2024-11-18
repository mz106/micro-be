const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", proxy("http://localhost:5002"));

app.listen(5001, () => {
  console.log("Gateway is Listening to Port 5001");
});

// const HTTP = require("http");
// const fetch = require("node-fetch");

// const app = express();

// app.use(express.json());

// app.get("/express3", async (req, res) => {
//   console.log("express3 hit");
//   const url = "http://localhost:5003";
//   //   const result = await HTTP.get(url, (response) => {
//   //     response.on("data", (chunk) => {
//   //       const resData = JSON.parse(chunk);
//   //       //   console.log(resData);
//   //       return resData;
//   //     });
//   //   });
//   //   console.log("result: ", result);
//   //   //   res.status(200).json(result);
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(response);
//   console.log(data);
//   res.status(200).json({ message: "success", data });
// });

// app.get("/express2", async (req, res) => {
//   console.log("express2 hit");
//   const url = "http://localhost:5002";
//   //   const http = await HTTP.get(url, async (response) => {
//   //     const resData = response.on("data", (chunk) => {
//   //       const data = JSON.parse(chunk);
//   //       //   console.log(resData.message);
//   //       //   res.status(200).json({ message: resData.message });
//   //       return data;
//   //     });
//   //     return resData;
//   //   });
//   //   console.log(http.json());
// });

// app.get("/express1health", (req, res) => {
//   res.status(200).json("express1 is healthy");
// });

// app.listen(5001, () => {
//   console.log("express1 is listening");
// });
