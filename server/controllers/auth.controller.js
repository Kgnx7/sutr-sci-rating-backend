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

      user.password = null;

      res.json(user);
    });

  })(req, res);
};

exports.logout = (req, res) => {
  req.logout();
  res.end();
};

exports.getUser = (req, res) => {
  try {
    // const user = await sequelize.query(
    //   `select u.*, p.title as position from users as u left join positions as p on (u.position = p.id) where u.id = ${id}`,
    //   { type: Sequelize.QueryTypes.SELECT }
    // );
    console.log(req.user);
    // console.log(user);
    // done(null, user);
  } catch (error) {
    // done(error);
  }
};