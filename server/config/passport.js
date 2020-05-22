const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const passport = require("passport");

const { sequelize, Sequelize, User } = db;

passport.use(
  new LocalStrategy(
    { usernameField: "login", passwordField: "password" },
    async (login, password, done) => {
      try {
        const user = await sequelize.query(
          `select u.*, p.title as position from users as u 
            left join positions as p on (u.position = p.id)
            where u.login = "${login}"`,
          {
            type: Sequelize.QueryTypes.SELECT,
            model: User,
            plain: true
          }
        );

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

passport.deserializeUser(async (id, done) => {
  try {
    const user = await sequelize.query(
      `select u.*, p.title as position from users as u 
        left join positions as p on (u.position = p.id)
        where u.id = ${id}`,
      { type: Sequelize.QueryTypes.SELECT, plain: true }
    );

    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;