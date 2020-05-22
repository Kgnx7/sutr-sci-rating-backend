const { object, number } = require('yup');

exports.editReq = object().shape({
  id: number().required(),
  data: object().required()
});