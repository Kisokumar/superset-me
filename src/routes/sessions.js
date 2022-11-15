const express = require("express");
const { Session, User, Exercise } = require("../models");
const findSessionById = require("../middleware/findSessionById");
// const findUser = require("../middleware/findUserById");

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

// get session by id
sessionRouter.get("/:sessionId", findSessionById, async (req, res) => {
  try {
    const session = { session: req.session };
    res.status(200).send(session);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = sessionRouter;
