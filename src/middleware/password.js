const bcrypt = require("bcrypt");
const { User } = require("../models");

const saltRounds = Math.floor(Math.random() * 8) + 6; //rng between 8-12

function hashPassword(plainTextPassword) {
  const hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  return hash;
}

async function validatePassword(uname, pw) {
  const user = await User.findOne({
    where: { username: uname },
  });
  if (!user) {
    throw "User does not exist";
  } else {
    const match = await bcrypt.compare(pw, user.password);
    return match;
  }
}

module.exports = { hashPassword, validatePassword };
