const express = require("express");
const { db } = require("./db/db");
const seed = require("./db/seed");

const sessionRouter = require("./routes/sessions");
const userRouter = require("./routes/users");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Superset.me API!");
});

// app.use("/sessions", sessionRouter);
// app.use("/users", userRouter);

port = 3000;

const resetDb = true;

app.listen(port, () => {
  if (resetDb === true) {
    seed();
  }
  console.log(`App listening on ${port}`);
});
