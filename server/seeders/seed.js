const db = require("../config/connection");
const { User, Tutor } = require("../models");
const userSeeds = require("./userSeeds.json");
const tutorSeeds = require("./tutorSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");

  await cleanDB("Tutor", "tutors");

  await User.create(userSeeds);
  await Tutor.create(tutorSeeds);

  console.log("Completed! :D");
  process.exit(0);
});
