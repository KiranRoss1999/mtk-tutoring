const { Schema} = require("mongoose");

const bookingSchema = new Schema({
  bookedDay: {
    type: String,
    required: true
  },
  bookedMonth: {
    type: String,
    required: true
  },
  timeSlot: {
    type: String,
    required: true,
  },
});

module.exports = bookingSchema;