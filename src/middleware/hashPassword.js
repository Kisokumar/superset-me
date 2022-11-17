const bcrypt = require("bcrypt");
const saltRounds = Math.floor(Math.random() * 8) + 6; //rng between 8-12

console.clear();

function hashPassword(plainTextPassword) {
  const hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  return hash;
}

module.exports = hashPassword;
