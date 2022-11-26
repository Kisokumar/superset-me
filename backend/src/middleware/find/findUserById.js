const { User } = require("../../models");

async function findUser(req, res, next) {
  req.user = await User.findByPk(req.params.userId);
  if (!req.user) {
    res.status(404).json("User not found!");
  } else {
    next();
  }
}

module.exports = findUser;
