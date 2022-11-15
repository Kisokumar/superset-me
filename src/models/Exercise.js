const { db, DataTypes } = require("../db/db.js");

const Exercise = db.define("exercises", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
  repsDone: DataTypes.INTEGER,
  weightDone: DataTypes.INTEGER,
  muscleGroup: DataTypes.ENUM(
    "chest",
    "triceps",
    "back",
    "biceps",
    "shoulders",
    "legs"
  ),
  sessionId: { type: DataTypes.INTEGER, allowNull: false },
});

//exports
module.exports = { Exercise };
