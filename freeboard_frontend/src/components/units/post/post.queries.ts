import { gql } from '@apollo/client';

export const FETCH_POST = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      createdAt
      title
      images
      contents
      youtubeUrl
      likeCount
      dislikeCount
    }
  }
`;
