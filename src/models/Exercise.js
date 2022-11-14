const { db, DataTypes } = require("../db/db.js");

const Exercise = db.define("excercises", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
  muscleGroup: DataTypes.STRING,
});

//exports
module.exports = { Exercise };
