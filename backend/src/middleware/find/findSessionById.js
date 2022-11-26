const { Session } = require("../../models");

async function findSessionById(req, res, next) {
  req.session = await Session.findByPk(req.params.sessionId);
  if (!req.session) {
    res.status(500).json("Session does not exist!");
  } else {
    next();
  }
}

module.exports = findSessionById;
