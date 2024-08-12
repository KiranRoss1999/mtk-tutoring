const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
test-models
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
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

const Booking = model('Booking', bookingSchema);

module.exports = Booking;

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
  timeSlot: {
    startTime: {
      type: String,
      required: true,
      match: [/^([01]\d|2[0-3]):([0-5]\d)$/, "Must match HH:MM format"],
    },
    endTime: {
      type: String,
      required: true,
      match: [/^([01]\d|2[0-3]):([0-5]\d)$/, "Must match HH:MM format"],
    },
  },
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
 main
