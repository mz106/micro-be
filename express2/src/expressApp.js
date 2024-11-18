const express = require("express");
const { user } = require("./api/");
const { UserModel } = require("./database/models/index");

module.exports = async (app) => {
  app.use(express.json());
  UserModel.sync();
  user(app);
};
