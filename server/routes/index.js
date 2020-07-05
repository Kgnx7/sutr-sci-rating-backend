module.exports = (app) => {
  app.use('/api/auth', require('./auth.route'))
  app.use('/api/users', require('./users.route'))
  app.use('/api/faculties', require('./faculties.route'))
  app.use('/api/positions', require('./positions.route'))
  app.use('/api/departments', require('./departments.route'))
  app.use('/api/accessGroups', require('./accessGroups.route'))
  app.use('/api/academicRanks', require('./academicRanks.route'))
  app.use('/api/employmentTypes', require('./employmentTypes.route'))
  app.use('/api/specialties', require('./specialties.route'))
  app.use('/api/degreetypes', require('./degreetypes.route'))
  app.use('/api/academicDegrees', require('./academicDegrees.route'))
  app.use('/api/riaTypes', require('./riaTypes.route'))
}
