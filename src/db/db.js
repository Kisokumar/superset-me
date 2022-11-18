const { Sequelize, DataTypes } = require("sequelize");

// local
/*
const db = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./src/db/gym-tracker.sqlite",
  logging: false,
});
*/

// external
const db = new Sequelize("database", "username", "password", {
  host: config.host,
  dialect: "sqlite",
  storage: "./src/db/gym-tracker.sqlite",
  logging: false,
});

module.exports = { db, DataTypes };
