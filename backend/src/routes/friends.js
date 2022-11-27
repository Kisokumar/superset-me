// router for followers or 'friends'
const express = require("express");
const { Session, User } = require("../models");
const findSessionById = require("../middleware/find/findSessionById");
const findUserById = require("../middleware/find/findUserById");

const friendRouter = express.Router();

friendRouter.get("/", async (req, res) => {
  try {
    const output = "Specify user ID";
    res.status(200).send(output);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all friends
friendRouter.get("/:userId", findUserById, async (req, res) => {
  try {
    const friends = req.user.friends;
    if (friends) {
      console.log(friends);
      res.status(200).send(output.friends);
    } else {
      res.status(404).send("Friends not found :(");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// add friend - need logic to check if friend already exists
friendRouter.put("/add/byUsername", async (req, res) => {
  try {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const user = await User.findOne({
      where: { username: sender },
    });
    if (user.friends) {
      listOfFriends = user.friends + receiver + ";";
      User.update({ friends: listOfFriends }, { where: { id: sender } });
      res.status(200).send(user.friends);
    } else {
      let listOfFriends = receiver + ";";
      User.update({ friends: listOfFriends }, { where: { id: sender } });
      const user = await User.findByPk(sender);
      res.status(200).send(user.friends);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// add friend - need logic to check if friend already exists
friendRouter.put("/add/byId", async (req, res) => {
  try {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const user = await User.findByPk(sender);
    const user1 = await User.findByPk(receiver);
    if (user && user1) {
      if (user.friends) {
        listOfFriends = user.friends + receiver + ";";
        User.update({ friends: listOfFriends }, { where: { id: sender } });
        res.status(200).send(user.friends);
      } else {
        let listOfFriends = receiver + ";";
        User.update({ friends: listOfFriends }, { where: { id: sender } });
        const user = await User.findByPk(sender);
        res.status(200).send(user.friends);
      }
    } else {
      res.status(404).send("Either sender or receiver does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = friendRouter;
