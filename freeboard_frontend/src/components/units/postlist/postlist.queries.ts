import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $search: String
    $page: Int
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoards(
      search: $search
      page: $page
      endDate: $endDate
      startDate: $startDate
    ) {
      _id
      title
      writer
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoardsCount(search: $search, endDate: $endDate, startDate: $startDate)
  }
`;
