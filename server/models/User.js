const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const Booking = require('./Booking');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
test-models
  bookings: [Booking.schema],

  isTutor: {
    type: Boolean,
    require: true,
    default: false,
  },
  tutor: {
    type: Schema.Types.ObjectId,
    ref: "Tutor",
  },
  booking: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
  },

});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

const User = model("User", userSchema);

module.exports = User;
