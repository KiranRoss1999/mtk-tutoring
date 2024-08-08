const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Tutor {
    _id: ID
    user: User
    pricing: [Pricing]
    availability: [Availability]
  }

  type TimeSlot {
    startTime: String
    endTime: String
  }

  type Availability {
    day: String
    timeSlots: [TimeSlot]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    tutor(id: ID!): Tutor
    tutors: [Tutor]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
