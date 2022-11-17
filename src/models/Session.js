const { db, DataTypes } = require("../db/db.js");
const formatDate = require("../middleware/formatDate");

const Session = db.define("sessions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = { Session };
