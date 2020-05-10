const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

db.users = require("./user.model.js")(sequelize, Sequelize);
db.groups = require("./group.model.js")(sequelize, Sequelize);

db.groups.hasMany(db.users, { foreignKey: 'access_group' })
db.users.belongsTo(db.groups, { foreignKey: 'access_group' })

module.exports = db;