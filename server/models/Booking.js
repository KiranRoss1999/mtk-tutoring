const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  dateBooked: [
    {
      type: Date,
      required: true,
    },
  ],
  tutor: {
    type: Schema.Types.ObjectId,
    ref: "Tutor",
    required: true,
  },
  timeSlot: [
    {
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },
  ],
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
