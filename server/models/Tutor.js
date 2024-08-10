const { Schema, model } = require("mongoose");

const tutorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pricing: [
    {
      oneLesson: {
        type: Number,
        required: true,
      },
      tenLessons: {
        type: Number,
        required: true,
      },
    },
  ],
  availability: [
    {
      day: {
        type: String,
        required: true,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      timeSlots: [
        {
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
      ],
    },
  ],
});

const Tutor = model("Tutor", tutorSchema);

module.exports = Tutor;
