// fetchUseditemQuestions(
//   page: Int
//   useditemId: ID!
//   ): [UseditemQuestion!]!

// query{
//   fetchUseditemQuestions(
//     useditemId :"62669025a8255b002988c895"
//   ){
// _id
// contents
// user{
//   _id
//   name
// }
// createdAt

//   }
// }

import { gql } from '@apollo/client';

export const FETCH_QUESTION = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;
