const express = require("express");
const { Session, User, Exercise } = require("../models");
// const findSession = require("../middleware/findSession");
// const findUser = require("../middleware/findUser");

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

module.exports = userRouter;
