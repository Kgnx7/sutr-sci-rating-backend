const passport = require("passport")

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
      const { id, email, username } = user;
      res.json({ id, email, username });
    });

  })(req, res);
};

exports.logout = (req, res) => {
  req.logout();
  res.end();
};