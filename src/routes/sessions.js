const express = require("express");
const { Session, User, Exercise } = require("../models");
// const findSession = require("../middleware/findSession");
// const findUser = require("../middleware/findUser");

const sessionRouter = express.Router();

// get all sessions
sessionRouter.get("/", async (req, res) => {
  try {
    const allSessions = await Session.findAll();
    res.status(200).send(allSessions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = sessionRouter;
