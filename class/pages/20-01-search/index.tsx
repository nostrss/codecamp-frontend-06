import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { ChangeEvent, Fragment, useState } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../src/commons/types/generated/types';

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 400px;
  font-size: 16px;
`;

export default function MapBoard() {
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const [search, setSearch] = useState('');
  const [startPage, setStartPage] = useState(1);

  const onClickSearch = () => {
    refetch({ search, page: 1 });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <Fragment>
      검색어 입력 : <input type='text' onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column> {el._id}</Column>
          <Column> {el.writer}</Column>
          <Column> {el.title} </Column>
        </Row>
      ))}
      {new Array(10).fill(1).map((el, index) => (
        <span
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </span>
      ))}
    </Fragment>
  );
}
