import { gql } from '@apollo/client';

export const FETCH_BOARD_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      title
      writer
      contents
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
    }
  }
`;
