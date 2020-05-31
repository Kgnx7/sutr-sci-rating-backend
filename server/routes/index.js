module.exports = (app) => {
  app.use('/api/auth', require('./auth.route'));
  app.use('/api/users', require('./users.route'));
  app.use('/api/positions', require('./positions.route'));
  app.use('/api/departments', require('./departments.route'));
  app.use('/api/staffs', require('./staffs.route'));
  app.use('/api/academicDegrees', require('./academicDegrees.route'));
  app.use('/api/academicRanks', require('./academicRank.route'));
  app.use('/api/faculties', require('./faculties.route'));
};