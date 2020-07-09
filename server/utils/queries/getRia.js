const {
  User,
  RiaType,
  RsType,
  RiaStatus,
  RsState,
  FundSource,
  Document,
  Ria,
} = require('../../models')

module.exports = async (key, value) => {
  const ria = await Ria.findOne({
    where: { [key]: value },
    include: [
      {
        model: RiaType,
        attributes: ['title'],
        as: 'riaType',
      },
      {
        model: RsType,
        attributes: ['title'],
        as: 'rsType',
      },
      {
        model: RiaStatus,
        attributes: ['title'],
        as: 'riaStatus',
      },
      {
        model: User,
        attributes: ['title'],
        as: 'users',
      },
      {
        model: RsState,
        attributes: ['title'],
        as: 'states',
      },
      {
        model: FundSource,
        attributes: ['title'],
        as: 'fundSources',
      },
      // {
      //   model: Document,
      //   attributes: ['path'],
      //   as: 'documents',
      // },
    ],
  })

  return ria
}
