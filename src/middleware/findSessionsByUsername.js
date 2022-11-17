const { Session } = require("../models");
const { User } = require("../models");

async function findSessionsByUsername(req, res, next) {
  const user = await User.findOne({ where: { username: req.params.username } });
  const id = user.id;

  req.sessions = await Session.findAll({
    where: { userId: id },
  });
  if (!req.sessions) {
    res.status(500).json("Session does not exist!");
  } else {
    next();
  }
}

module.exports = findSessionsByUsername;
