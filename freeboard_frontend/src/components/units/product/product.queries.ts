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
      images
      tags
      seller {
        _id
        name
      }
      useditemAddress {
        lat
        lng
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const BUY_PRODUCT = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      price
    }
  }
`;

// mutation{
//   createPointTransactionOfBuyingAndSelling(
//     useritemId:"62695264a8255b002988d48a"
//   ){
//     _id
//     name
//     price
//   }
// }
