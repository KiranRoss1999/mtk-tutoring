const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    bookings: [Booking]
  }

  type Booking {
    bookedDay: String
    bookedMonth: String
    timeSlot: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBooking(bookedDay: String!, bookedMonth: String!, timeSlot: String!): User
  }
`;

module.exports = typeDefs;
