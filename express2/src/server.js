const express = require("express");
const { databaseConnection } = require("./database/index");
const { testtest } = require("./database/index");
console.log(testtest);
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "hello from express2" });
});

app.get("/express2health", (req, res) => {
  res.status(200).json({ message: "express2 healthy" });
});

app.listen(5002, () => {
  console.log("express2 listening");
});
