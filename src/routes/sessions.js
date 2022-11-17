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

// create session with id
sessionRouter.put("/new", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.body.userId } });
    if (user) {
      const newSession = await Session.create(req.body);
      res
        .status(200)
        .send(
          `Successfully created new ${newSession.type} session for ${user.username} @ ${newSession.date}!`
        );
    } else {
      res.status(500).send(`User does not exist!`);
    }
  } catch (error) {
    res.status(500).send("Could not create session.");
  }
});

module.exports = sessionRouter;
