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
      pickedCount
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

export const PICK_TOGLE = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
