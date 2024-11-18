const { UserRepository } = require("../database/");

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async RegisterUser({ username, password }) {
    console.log("registeruser controllers: ", username, password);
    const user = await this.repository.CreateUser(username, password);
    return user;
  }
}

module.exports = UserService;
