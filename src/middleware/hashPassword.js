const bcrypt = require("bcrypt");
const saltRounds = Math.floor(Math.random() * 8) + 6; //rng between 8-12

console.clear();

async function hashPassword(plainTextPassword) {
  bcrypt.hash(plainTextPassword, saltRounds).then(function (hash) {
    console.log(hash);
  });
}

module.exports = hashPassword;
