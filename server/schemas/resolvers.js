const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
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
        
        const booking = {
          bookedDay: bookedDay, 
          bookedMonth: bookedMonth, 
          timeSlot: timeSlot
        };

        return User.findByIdAndUpdate(context.user_id, 
          {
            $addToSet: {bookings: booking},
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
