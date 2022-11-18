const { Sequelize } = require("sequelize");
const { db, DataTypes } = require("../db/db.js");

const Session = db.define("sessions", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("push", "pull", "legs"),
    allowNull: false,
    defaultValue: "uncategorised",
  },
  userId: { type: Sequelize.UUID, allowNull: false },
});

module.exports = { Session };
