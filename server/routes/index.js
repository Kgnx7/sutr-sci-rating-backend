const auth = require('./auth.route');
const users = require('./users.route');
const positions = require('./positions.route');

module.exports = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/positions', positions);
};