const { Session } = require("../models");

async function findSession(req, res, next) {
  req.session = await Session.findByPk(req.params.id);
  if (!req.session) {
    res.status(500).json("Session does not exist!");
  } else {
    next();
  }
}

module.exports = findSession;
