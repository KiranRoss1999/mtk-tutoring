
const { User, Booking } = require("../models");

const { User, Tutor, Booking } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('bookings');
      }
      throw AuthenticationError;
    },

    users: async () => {
      return await User.find({}).populate("tutor").populate("bookings");
    },
    tutors: async () => {
      return await Tutor.find({}).populate("user").populate("bookings");
    },
    bookings: async () => {
      return await Booking.find({}).populate("user").populate("tutor");
    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBooking: async (parent, {bookedDay, bookedMonth, timeSlot}, context) => {
      if(context.user) {
        
        const booking = new Booking ({
          bookedDay: bookedDay, 
          bookedMonth: bookedMonth, 
          timeSlot: timeSlot
        });

        await User.findByIdAndUpdate(context.user_id, {
            $push: {bookings: booking},
        });

        return booking;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
