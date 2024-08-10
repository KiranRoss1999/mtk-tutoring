const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    isTutor: Boolean
    tutor: Tutor
    bookings: [Booking]
  }

  type Tutor {
    _id: ID
    user: User
    pricing: [Pricing]
    availability: [Availability]
    bookings: [Booking]
  }

  type Booking {
    _id: ID
    user: User
    tutor: Tutor
    timeslot: TimeSlot
    dateBooked: String
  }

  type Pricing {
    oneLesson: Float
    tenLessons: Float
  }

  type Availability {
    day: String
    timeslots: [TimeSlot]
  }

  type TimeSlot {
    startTime: String
    endTime: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(id: ID!): User
    tutor(id: ID!): Tutor
    tutors: [Tutor]
    users: [User]
    bookings: [Booking]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
