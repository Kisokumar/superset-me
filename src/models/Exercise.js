const { db, DataTypes } = require("../db/db.js");

const Exercise = db.define("excercises", {
  name: DataTypes.STRING,
  muscleGroup: DataTypes.STRING,
});

//exports
module.exports = { Exercise };
