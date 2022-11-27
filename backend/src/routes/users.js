const express = require("express");
const { Session, User, Exercise } = require("../models");
const findUserById = require("../middleware/find/findUserById");
const findSessionsByUserId = require("../middleware/find/findSessionsByUserId");
const findSessionsByUsername = require("../middleware/find/findSessionsByUsername");
const { validatePassword, hashPassword } = require("../middleware/password");

const userRouter = express.Router();

// get all users
userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
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
      res.status(200).json(user);
    } else {
      res.status(404).send("user not found!");
    }
  } catch (error) {
    res.status(500).json(error);
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
      res.status(200).json("Successfully deleted user");
    } else {
      res.status(404).json("User not found!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all previous sessions by userId
userRouter.get(
  "id/:userId/sessions",
  findSessionsByUserId,
  async (req, res) => {
    try {
      const sessions = { sessions: req.sessions };
      res.status(200).send(sessions);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

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

// get user by userId
userRouter.get("/id/:userId", findUserById, async (req, res) => {
  try {
    const user = { user: req.user };
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get username by userId
userRouter.get("/id/:userId/username", findUserById, async (req, res) => {
  try {
    const user = { user: req.user };
    res.status(200).send(user.user.username);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get UserId by Username
userRouter.get("/username/:username/id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    if (user) {
      res.status(200).send(user.id);
    } else {
      res.status(404).json("User not found!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete user by userId
userRouter.delete("/id/:userId", findSessionsByUserId, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const sessions = { sessions: req.sessions };
    if (sessions) {
      let arr = sessions.sessions;
      arr.map(async function (element, index, array) {
        const session = await Session.destroy({ where: { id: element.id } });
      }, 80);
    }

    if (user != null) {
      const user = await User.destroy({
        where: { id: req.params.userId },
      });
      res.status(200).json("Successfully deleted");
    } else {
      res.status(404).json("User not found!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;
