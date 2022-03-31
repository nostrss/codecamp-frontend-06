import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { Fragment, useState } from 'react';

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

const MyRow = styled.div`
  display: flex;
  font-size: 20px;
`;

const MyColumn = styled.div`
  width: 25%;
  font-size: 13px;
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [startPage, setStartPage] = useState(1);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: Number(startPage - 10) });
  };
  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: Number(startPage - 10) });
  };

  return (
    <Fragment>
      {data?.fetchBoards.map((el, index) => (
        <MyRow key={el._id}>
          <MyColumn>{index}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((el, index) =>
        index + startPage <= lastPage ? (
          <span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {'  '} {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </Fragment>
  );
}
