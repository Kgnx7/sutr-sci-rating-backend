const db = require("../models");
const User = db.users;

exports.login = (req, res) => {
  if (!req.user) {
    res.json(req.message);
  }
  req.login(req.user, (err) => {
    if (err) {
      return next(err);
    }
    const { id, email, username } = req.user.dataValues;
    res.json({ id, email, username });
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.end();
};