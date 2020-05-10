const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define(
    "Group",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["title"],
        },
      ],
      tableName: "groups",
    }
  );

  return Group;
}