const path = require("path");
const fs = require("fs").promises;
const { db } = require("./db");
const { Exercise, User, Session } = require("../models/index");

const seed = async () => {
  await db.sync({ force: true });

  const userSeedPath = path.join(__dirname, "./mocks/users.json");
  const exerciseSeedPath = path.join(__dirname, "./mocks/exercises.json");
  const sessionSeedPath = path.join(__dirname, "./mocks/sessions.json");

  const buffer = await fs.readFile(userSeedPath);
  const exerciseBuffer = await fs.readFile(exerciseSeedPath);
  const sessionBuffer = await fs.readFile(sessionSeedPath);

  const { usersData } = JSON.parse(String(buffer));
  const { exercisesData } = JSON.parse(String(exerciseBuffer));
  const { sessionsData } = JSON.parse(String(sessionBuffer));

  const UserPromises = usersData.map((user) => User.create(user));
  const SessionPromises = sessionsData.map((session) =>
    Session.create(session)
  );
  const ExercisePromises = exercisesData.map((exercise) =>
    Exercise.create(exercise)
  );

  await Promise.all(UserPromises);
  await Promise.all(ExercisePromises);
  await Promise.all(SessionPromises);

  console.log("Database info populated!");
};

module.exports = seed;
