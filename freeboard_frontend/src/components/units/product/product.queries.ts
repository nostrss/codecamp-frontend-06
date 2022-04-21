import { gql } from '@apollo/client';

export const FETCH_PRODUCT = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      seller {
        _id
        name
      }
    }
  }
`;

// query{
//   fetchUseditem(
//     useditemId : "62615d33a8255b002988bbd4"
//   ){
//     _id
//     name
//     remarks
//     contents
//   }
// }

// export const BOARD_LIKE = gql`
//   mutation likeBoard($boardId: ID!) {
//     likeBoard(boardId: $boardId)
//   }
// `;
