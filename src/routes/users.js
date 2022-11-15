const express = require("express");
const { Session, User, Exercise } = require("../models");
// const findSession = require("../middleware/findSession");
const findUser = require("../middleware/findUser");

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

// get user by id
userRouter.get("/:id", findUser, async (req, res) => {
  try {
    const user = { user: req.user };
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;
