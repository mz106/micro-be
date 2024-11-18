const { DataTypes } = require("sequelize");
const { databaseConnection } = require("../index");

const User = databaseConnection.define("User", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
