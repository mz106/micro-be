const UserService = require("../services/userService");
const { registerUser } = require("../controllers/userControllers");
const { comparePass, hashPass } = require("../middleware/");

module.exports = (app) => {
  const service = new UserService();

  // user signup
  // app.post("/register", async (req, res) => {
  //   const result = await service.RegisterUser(req.body);

  //   res.status(201).json({ message: "success", result });
  // });
  app.post("/register", hashPass, registerUser);
};
