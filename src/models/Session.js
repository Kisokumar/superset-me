const { db, DataTypes } = require("../db/db.js");

const Session = db.define("sessions", {
  date: DataTypes.STRING,
  muscleGroup: DataTypes.ENUM("push", "pull", "legs"),
});

module.exports = { Session };
