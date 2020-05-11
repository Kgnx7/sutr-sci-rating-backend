const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();


const app = express();
var corsOptions = {
  origin: process.env.ORIGIN || "*",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ forse: true });

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 10 * 60 * 1000
  },
  rolling: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./app/config/passport');

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/group.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});