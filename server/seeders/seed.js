const db = require("../config/connection");
const { User, Tutor } = require("../models");
const userSeeds = require("./userSeeds.json");
const tutorSeeds = require("./tutorSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");
  // await cleanDB("Tutor", "tutors");

  // using insertMany method instead of create as more appropriate for large datasets
  await User.insertMany(userSeeds);
  // await Tutor.insertMany(tutorSeeds);

  console.log("Completed! :D");
  process.exit(0);
});
