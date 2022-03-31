import { Fragment } from 'react';
import Board from '../../src/components/units/board/14-board-pagination/board';
import Pagination from '../../src/components/units/board/14-board-pagination/pagination';
import { useQuery, gql } from '@apollo/client';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  return (
    <Fragment>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </Fragment>
  );
}
