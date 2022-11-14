const { db, DataTypes } = require("../db/db.js");

const Session = db.define("sessions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: { type: DataTypes.STRING, allowNull: false },
  muscleGroup: DataTypes.ENUM("push", "pull", "legs"),
});

module.exports = { Session };
