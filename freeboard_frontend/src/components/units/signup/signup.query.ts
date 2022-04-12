import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      picture
    }
  }
`;
