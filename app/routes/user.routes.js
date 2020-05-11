module.exports = (app) => {
  const users = require("../controllers/user.controller.js"),
    router = require("express").Router(),
    isAuthenticated = require("../middleware/isAuthenticated");

  router.get("/list", users.findAll);

  router.get("/find/:id", isAuthenticated, users.findOne);
  router.post("/create", users.create);

  app.use("/api/users", router);
};