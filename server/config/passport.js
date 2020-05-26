const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const passport = require("passport");
const getUser = require("../utils/queries/getUser");

const { sequelize, Sequelize, User, Department } = db;
// const getUserQuery = `
//   select u.*, p.title as position, c.title as Department, ad.title as academicDegree, ar.title as academicRank, s.title as staff
//   from Users as u 
//   left join Positions as p on (u.position = p.id)
//   left join Cathedras as c on (u.Department = c.id)
//   left join AcademicDegrees as ad on (u.academicDegree = ad.id)
//   left join AcademicRanks as ar on (u.academicrank = ar.id)
//   left join Staffs as s on (u.staff = s.id)
// `;

passport.use(
  new LocalStrategy(
    { usernameField: "login", passwordField: "password" },
    async (login, password, done) => {
      try {
        // const user = await sequelize.query(
        //   `${getUserQuery} where u.login = "${login}"`,
        //   {
        //     type: Sequelize.QueryTypes.SELECT,
        //     model: User,
        //     plain: true
        //   }
        // );

        const user = await getUser('login', login);

        // var attributes = ['id', 'login'];
        // const user = await User.findOne({
        //   where: { login },
        //   attributes,
        //   include: {
        //     attributes: ['title'],
        //     // through: { attributes: ['title'] },
        //     model: Department,
        //   },
        //   required: true,
        // })

        if (!user) {
          return done(null, false, { message: "Неверный логин" });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: "Неверный пароль" });
        }

        return done(null, user);

      } catch (error) {
        console.log(error);
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
    // const user = await sequelize.query(
    //   `${getUserQuery} where u.id = ${id}`,
    //   { type: Sequelize.QueryTypes.SELECT, plain: true }
    // );
    const user = await User.findByPk(id);

    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;