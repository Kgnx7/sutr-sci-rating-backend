const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors({
  origin: process.env.ORIGIN || "*",
}));

app.use(helmet());
app.use(logger('dev'));

app.set('trust proxy', 1);
app.use(session({
  secret: process.env.SESSION_SECRET,
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

require('./server/config/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

module.exports = app;