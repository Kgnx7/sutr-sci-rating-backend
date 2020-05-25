const passport = require("passport")
const { User } = require('../models');

exports.login = (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }

    if (!user) {
      return res.status(401).json(info);
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      user.password = null;

      res.json(user);
    });

  })(req, res);
};

exports.logout = (req, res) => {
  req.logout();
  res.end();
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.session.passport.user;

    const user = await User.findByPk(userId);

    user.password = null;

    res.json(user);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};