let { object, string, number } = require('yup')

module.exports = object().shape({
  name: string().required(),
})
