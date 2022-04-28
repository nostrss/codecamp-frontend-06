import { gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean, $search: String) {
    fetchUseditems(page: $page, isSoldout: $isSoldout, search: $search) {
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
