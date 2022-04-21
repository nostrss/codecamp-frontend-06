import { gql } from '@apollo/client';

export const CREAT_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      remarks
      contents
    }
  }
`;

// mutation{
//   createUseditem(
//     createUseditemInput:{
//       name: "진택",
//       contents: "상품등록테스트"
//       price: 1000,
//       tags: ["태그1","태그2"],
//       remarks: "리마크가 모야"
//     }
//   ){
//     _id
//     name
//   }
// }
