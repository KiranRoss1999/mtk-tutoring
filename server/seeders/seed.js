const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Users", "users");

  await User.create(userSeeds);

  console.log("Completed! :D");
  process.exit(0);
});
