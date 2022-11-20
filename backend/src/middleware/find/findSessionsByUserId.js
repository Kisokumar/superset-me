const { Session } = require("../../models");

async function findSessionByUserId(req, res, next) {
  req.sessions = await Session.findAll({
    where: { userId: req.params.userId },
  });
  if (!req.sessions) {
    res.status(500).json("Session does not exist!");
  } else {
    next();
  }
}

module.exports = findSessionByUserId;
