const { UserModel } = require("../models/index");

class UserRepository {
  async CreateUser(username, password, salt = 10) {
    console.log(
      "create user: " + "username: " + username + " password: " + password
    );
    try {
      const user = await UserModel.create({ username, password });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserRepository;
