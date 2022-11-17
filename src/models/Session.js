const { Sequelize } = require("sequelize");
const { db, DataTypes } = require("../db/db.js");
const formatDate = require("../middleware/formatDate");

const Session = db.define("sessions", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: formatDate(),
  },
  type: {
    type: DataTypes.ENUM("push", "pull", "legs"),
    allowNull: false,
    defaultValue: "uncategorised",
  },
  userId: { type: Sequelize.UUID, allowNull: false },
});

module.exports = { Session };
