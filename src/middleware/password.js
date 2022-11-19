const bcrypt = require("bcrypt");
const saltRounds = Math.floor(Math.random() * 8) + 6; //rng between 8-12

function hashPassword(plainTextPassword) {
  const hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  return hash;
}

function validatePassword(plainTextPassword) {
  const hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  return hash;
}

module.exports = { hashPassword, validatePassword };
