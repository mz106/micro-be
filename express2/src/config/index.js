require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.SQL_URI,
};
