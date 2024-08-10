const { Schema, model} = require("mongoose");

const bookingSchema = new Schema({
  dateBooked: {
    type: String,
    required: true
  },
  timeSlot: {
    type: String,
    required: true,
  },
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;