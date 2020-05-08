const LocalStrategy = require("passport-local").Strategy,
  User = require("../models").users,
  passport = require("passport");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      User.findOne({
        where: { email },
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: "Неверные данные" });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: "Неверный пароль" });
        }

        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  done(null, { username: username });
});

module.exports = passport;