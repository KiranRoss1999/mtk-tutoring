import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      bookings
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      bookings {
        _id
        userId
        bookedDay
        bookedMonth
        timeSlot
      }
    }
  } 
`;
