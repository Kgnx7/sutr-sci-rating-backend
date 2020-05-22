module.exports = (app) => {
  app.use('/api/auth', require('./auth.route'));
  app.use('/api/users', require('./users.route'));
  app.use('/api/positions', require('./positions.route'));
  app.use('/api/cathedras', require('./cathedras.route'));
  app.use('/api/stuffs', require('./stuffs.route'));
};