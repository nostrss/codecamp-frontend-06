// fetchUseditems(
//   isSoldout: Boolean
//   search: String
//   page: Int
//   ): [Useditem!]!

// query{
//   fetchUseditems{
//     _id
//     name
//     remarks
//     price
//     tags
//     pickedCount
//     seller  {_id,name}
//     }
// }

import { gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      price
      tags
      pickedCount
      seller {
        _id
        name
      }
    }
  }
`;
