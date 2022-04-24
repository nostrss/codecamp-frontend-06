import { gql } from '@apollo/client';

// fetchUseditemsOfTheBest: [Useditem!]!

export const FETCH_BEST_PRODUCT = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
    }
  }
`;
