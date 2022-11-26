const express = require("express");
const { Session, User, Exercise } = require("../models");
const findUserById = require("../middleware/find/findUserById");
const findSessionsByUserId = require("../middleware/find/findSessionsByUserId");
const findSessionsByUsername = require("../middleware/find/findSessionsByUsername");
const { validatePassword, hashPassword } = require("../middleware/password");

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
      req.body.password = hashPassword(req.body.password);
      const newUser = await User.create(req.body);
      res.status(200).send(`Successfully created user: ${newUser.username}`);
    } else {
      res.status(500).send("Username already in use!");
    }
  } catch (error) {
    res.status(500).send("Could not create user.");
  }
});

userRouter.put("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
    });
    if (user) {
      const match = await validatePassword(
        req.body.username,
        req.body.password
      );
      if (match == true) {
        res.status(200).send(`Successfully logged in as ${user.username}`);
      } else {
        res.status(500).send("Log in unsuccessful.");
      }
    } else {
      res.status(404).send("User does not exist!");
    }
  } catch (error) {
    res.status(500).send("Could not login.");
  }
});

// delete user by username
userRouter.delete("/username/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    if (user != null) {
      const user = await User.destroy({
        where: { username: req.params.username },
      });
      res.status(200).send("Successfully deleted user");
    } else {
      res.status(404).send("User not found!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete user by userId
userRouter.delete("/:userId", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user != null) {
      const user = await User.destroy({
        where: { id: req.params.userId },
      });
      res.status(200).send("Successfully deleted");
    } else {
      res.status(404).send("User not found!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;