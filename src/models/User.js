const { db, DataTypes } = require("../db/db");

const User = db.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  firstname: { type: DataTypes.STRING, allowNull: true },
  lastname: { type: DataTypes.STRING, allowNull: true },
});

module.exports = { User };
