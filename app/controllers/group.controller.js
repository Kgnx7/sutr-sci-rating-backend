const db = require("../models");
const Group = db.groups;

exports.findAll = (req, res) => {

  Group.findAll()
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
  if (!req.body.title) {
    res.status(400).send({
      message: "Неверные данные!",
    });
    return;
  }

  Group.create({
    title: req.body.title,
  })
    .then((group) => {
      res.json(group);
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};