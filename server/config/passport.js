const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const collectUserInfo = require("../utils/queries/collectUserInfo");
const db = require("../models");

const { sequelize, Sequelize, User, Department } = db;

passport.use(
  new LocalStrategy(
    { usernameField: "login", passwordField: "password" },
    async (login, password, done) => {
      try {

        const user = await User.findOne({
          where: { login }
        });

        if (!user) {
          return done(null, false, { message: "Неверный логин" });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: "Неверный пароль" });
        }

        const userInfo = await collectUserInfo(user);

        return done(null, userInfo);

      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {

    const user = await User.findByPk(id);

    const userInfo = await collectUserInfo(user);

    done(null, userInfo);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;