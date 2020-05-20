const LocalStrategy = require("passport-local").Strategy,
  User = require("../models").User,
  passport = require("passport");

passport.use(
  new LocalStrategy(
    { usernameField: "login", passwordField: "password" },
    async (login, password, done) => {
      try {
        const user = await User.findOne({
          where: { login },
        });

        console.log(user);

        if (!user) {
          return done(null, false, { message: "Неверный логин" });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: "Неверный пароль" });
        }

        return done(null, user);

      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    }).catch(err => {
      done(err);
    })
});

module.exports = passport;