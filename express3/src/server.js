const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "hello from express3" });
});

app.get("/express3health", (req, res) => {
  res.status(200).json({ message: "express3 healthy" });
});

app.listen(5003, () => {
  console.log("express3 listening");
});
