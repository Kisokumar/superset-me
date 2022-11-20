const express = require("express");
const cors = require("cors");
const { db } = require("../db/db");

const sessionRouter = require("../routes/sessions");
const userRouter = require("../routes/users");
const friendRouter = require("../routes/friends");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    var header = "<h3>Welcome to the Superset.me API!</h3>";
    var subheading = "<h4>Available endpoints:</h4>";
    var userendpoints =
        "<h9>User endpoints:</h9><p> GET /users/ - Get all the users</p><p>GET /users/:userId - Get user by id</p><p>GET /users/username/:username - Get user by username</p> <p>GET /users/userId/sessions - Get sessions by userId</p> <p>GET /users/username/:username/sessions - Get sessions by username</p>";
    const page = header + subheading + userendpoints;
    res.send(page);
});

app.use("/sessions", sessionRouter);
app.use("/users", userRouter);
app.use("/friends", friendRouter);

module.exports = app;
