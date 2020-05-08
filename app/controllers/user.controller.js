const db = require("../models");
const User = db.users;

exports.findOne = (req, res) => {
  const id = req.params.id;

  if (id === undefined) {
    res.status(400).send({
      message: "Неверные данные!",
    });
    return;
  }

  User.findOne({
    where: { id },
    attributes: ["id", "username", "email"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Не удалось создать пользователя!",
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Неверные данные!",
    });
    return;
  }

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};