const db = require("../models");
const User = db.users;
const Group = db.groups;

exports.findAll = (req, res) => {

  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Не удалось найти пользователей!",
      });
    });
};

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
    attributes: ["id", "email", "access_group"],
    include: [Group]
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Не удалось найти пользователя!",
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.access_group || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Неверные данные!",
    });
    return;
  }

  User.create({
    password: req.body.password,
    email: req.body.email,
    access_group: req.body.access_group,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};