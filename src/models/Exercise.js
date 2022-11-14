const { db, DataTypes } = require("../db/db.js");

const Exercise = db.define("excercises", {
  name: DataTypes.STRING,
  repsDone: DataTypes.INTEGER,
  weightDone: DataTypes.INTEGER,
  muscleGroup: DataTypes.STRING,
});

//exports
module.exports = { Exercise };
