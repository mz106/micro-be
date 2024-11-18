const { Sequelize } = require("sequelize");
const { DB_URL } = require("../config");

module.exports = async () => {
  new Sequelize(DB_URL);
  console.log("db is listening");
};
