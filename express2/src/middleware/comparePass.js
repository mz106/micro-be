const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    console.log("hello from compare pass");
    next();
  } catch (error) {
    console.log(error);
  }
};
