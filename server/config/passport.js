const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const passport = require("passport");

const { sequelize, Sequelize, User } = db;

const getUserQuery = `
  select u.*, p.title as position, c.title as cathedra, ad.title as academicDegree, ar.title as academicRank, s.title as staff
  from users as u 
  left join positions as p on (u.position = p.id)
  left join сathedras as c on (u.cathedra = c.id)
  left join academicdegrees as ad on (u.academicdegree = ad.id)
  left join academicranks as ar on (u.academicrank = ar.id)
  left join staffs as s on (u.staff = s.id)
`;

passport.use(
  new LocalStrategy(
    { usernameField: "login", passwordField: "password" },
    async (login, password, done) => {
      try {
        const user = await sequelize.query(
          `${getUserQuery} where u.login = "${login}"`,
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
      `${getUserQuery} where u.id = ${id}`,
      { type: Sequelize.QueryTypes.SELECT, plain: true }
    );

    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;