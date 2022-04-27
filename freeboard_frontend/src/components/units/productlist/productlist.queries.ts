import { gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean) {
    fetchUseditems(page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      price
      tags
      pickedCount
      images
      seller {
        _id
        name
      }
      buyer {
        name
      }
    }
  }
`;
