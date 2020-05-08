module.exports = (app) => {
  const router = require("express").Router(),
    auth = require("../controllers/auth.controller.js"),
    passport = require("passport");

  router.post("/login", passport.authenticate('local'), auth.login);
  router.get("/logout", auth.logout);

  app.use("/api/auth", router);
};