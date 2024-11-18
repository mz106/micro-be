const express = require("express");
const { user } = require("./api/");

module.exports = async (app) => {
  app.use(express.json());

  user(app);
};
