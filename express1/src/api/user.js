module.exports = (app) => {
  //user signup
  app.post("/user", async (req, res) => {
    res.status(201).json({ message: "hello from /user post signup" });
  });
};
