const { Sequelize } = require("sequelize");
const { DB_URL } = require("../config");

// module.exports = () => {
//   const connection = new Sequelize(DB_URL);
//   connection.authenticate();
//   console.log("db is listening");
//   return connection;
//   // return "hello world";
//   // return await new Sequelize(DB_URL).authenticate();
// };

const connection = new Sequelize(DB_URL);

connection.authenticate();
console.log("db is listening");

module.exports = connection;
