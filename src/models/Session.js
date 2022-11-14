const { db, DataTypes } = require("../db/db.js");

const Session = db.define("sessions", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  date: DataTypes.STRING,
  muscleGroup: DataTypes.ENUM("push", "pull", "legs"),
  userId: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = { Session };
