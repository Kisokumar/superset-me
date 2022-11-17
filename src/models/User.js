const { Sequelize } = require("sequelize");
const { db, DataTypes } = require("../db/db");
const uniqueIdGenerator = require("../middleware/uniqueIdGenerator");

const User = db.define("users", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  firstname: { type: DataTypes.STRING, allowNull: true },
  lastname: { type: DataTypes.STRING, allowNull: true },
});

module.exports = { User };
