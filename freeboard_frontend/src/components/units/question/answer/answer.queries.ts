// query{
//   fetchUseditemQuestionAnswers(
//     useditemQuestionId : "626698aea8255b002988c8ca"
//   ){
//     _id
//     contents
//     user{
//       name
//     }
//     createdAt
//   }
// }

// fetchUseditemQuestionAnswers(
//   page: Int
//   useditemQuestionId: ID!
//   ): [UseditemQuestionAnswer!]!

import { gql } from '@apollo/client';

export const FETCH_ANSWER = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
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
