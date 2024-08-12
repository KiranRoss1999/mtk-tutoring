import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOKING = gql `
  mutation saveBooking(
    $bookedDay: String!,
    $bookedMonth: String, 
    $timeSlot: String!
  ) {
    saveBooking(
      bookedDay: $bookedDay,
      bookedMonth: $bookedMonth,
      timeSlot: $timeSlot
    ) {
      bookedDay
      bookedMonth
      timeSlot
    }
  }
`;