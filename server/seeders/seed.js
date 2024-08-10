const db = require("../config/connection");
const { User, Tutor, Booking } = require("../models");
const userSeeds = require("./userSeeds.json");
const tutorSeeds = require("./tutorSeeds.json");
const bookingSeeds = require("./bookingSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Tutor", "tutors");
  await cleanDB("Booking", "bookings");

  // using insertMany method instead of create as more appropriate for large datasets
  await User.insertMany(userSeeds);
  await Tutor.insertMany(tutorSeeds);
  await Booking.insertMany(bookingSeeds);

  console.log("Completed! :D");
  process.exit(0);
});
