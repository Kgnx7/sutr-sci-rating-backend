module.exports = (app) => {
  const groups = require("../controllers/group.controller.js"),
    router = require("express").Router();
    // isAuthenticated = require("../middleware/isAuthenticated");

  router.get("/list", groups.findAll);
  router.post("/create", groups.create);

  app.use("/api/groups", router);
};