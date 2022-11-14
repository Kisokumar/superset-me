const { db, DataTypes } = require("../db/db");

const User = db.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = { User };
