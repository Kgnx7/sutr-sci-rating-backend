const { object, number } = require('yup');

module.exports = object().shape({
  id: number().required(),
  data: object().required()
});