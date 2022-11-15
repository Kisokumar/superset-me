const express = require("express");
const { Session, User, Exercise } = require("../models");
const findUserById = require("../middleware/findUserById");
const findSessionByUserId = require("../middleware/findSessionsByUserId");

const userRouter = express.Router();

// get all sessions
userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user by userId
userRouter.get("/:userId", findUserById, async (req, res) => {
  try {
    const user = { user: req.user };
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get sessions by userId
userRouter.get("/:userId/sessions", findSessionByUserId, async (req, res) => {
  try {
    const sessions = { sessions: req.sessions };
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;
