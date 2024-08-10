const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    isTutor: Boolean
  }

  type Tutor {
    _id: ID
    user: User
    prices: [Pricing]
    availabilities: [Availability]
  }

  type Pricing {
    oneLesson: Float
    tenLessons: Float
  }

  type Availability {
    day: String
    timeslots: [Timeslot]
  }

  type Timeslot {
    startTime: String
    endTime: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    tutor(id: ID!): Tutor
    tutors: [Tutor]
    users: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
