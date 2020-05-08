const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;