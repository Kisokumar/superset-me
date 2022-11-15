const { db, DataTypes } = require("../db/db.js");

const Session = db.define("sessions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: { type: DataTypes.STRING, allowNull: false },
  type: DataTypes.ENUM(
    "chest",
    "triceps",
    "back",
    "biceps",
    "shoulders",
    "legs"
  ),
  userId: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = { Session };
