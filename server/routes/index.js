const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Hello, world!',
  }));

  app.get('/api/users', usersController.list);
};