const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./src/db/gym-tracker.sqlite",
  logging: false,
});

module.exports = { db, DataTypes };
