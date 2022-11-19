// external db
const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.json")["dev"];

location = "local";

if (location == "local") {
  const localdb = new Sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: "./src/db/gym-tracker.sqlite",
    logging: false,
  });

  console.log(`  -  Currently using local sqlite db`);
  db = localdb;
} else if (location == "external") {
  const externaldb = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
      port: config.port,
      host: config.server,
      dialect: config.dialect,
      logging: false,
    }
  );

  console.log(`  -  Currently using external ${config.dialect} db`);
  db = externaldb;
}

module.exports = { db, DataTypes };
