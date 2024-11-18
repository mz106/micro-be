const UserService = require("../services/userService");
console.log("usercontrollers: ", new UserService().RegisterUser);

// class UserControllers {
//   constructor() {
//     this.service = new UserService();
//   }

//   async RegisterController(req, res) {
//     const service = new UserService();
//     const user = await service.RegisterUser(req.body);
//     console.log("user: ", user);
//     res.status(201).json({ message: "success", user });
//   }
// }

// module.exports = UserControllers;
const service = new UserService();

const registerUser = async (req, res) => {
  try {
    const user = await service.RegisterUser(req.body);

    res.status(201).json({ message: "success", user });
  } catch (error) {}
};

module.exports = { registerUser };
