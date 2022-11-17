const express = require("express");
const { Session, User, Exercise } = require("../models");
const findUserById = require("../middleware/findUserById");
const findSessionsByUserId = require("../middleware/findSessionsByUserId");
const findSessionsByUsername = require("../middleware/findSessionsByUsername");

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

// get user by username
userRouter.get("/username/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    if (user != null) {
      res.status(200).send(user);
    } else {
      res.status(404).send("user not found!");
    }

    console.log(user.id);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all previous sessions by userId
userRouter.get("/:userId/sessions", findSessionsByUserId, async (req, res) => {
  try {
    const sessions = { sessions: req.sessions };
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all previous sessions by userName
userRouter.get(
  "/username/:username/sessions",
  findSessionsByUsername,
  async (req, res) => {
    try {
      const sessions = { sessions: req.sessions };
      res.status(200).send(sessions);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

userRouter.put("/new", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
    });
    if (!user) {
      const newUser = await User.create(req.body);
      res.status(200).send(`Successfully created user: ${newUser.username}`);
    } else {
      res.status(500).send("Username already in use!");
    }
  } catch (error) {
    res.status(500).send("Could not create user.");
  }
});

module.exports = userRouter;
