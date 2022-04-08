import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { ChangeEvent, Fragment, useState } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../src/commons/types/generated/types';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

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

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? 'red' : 'black')};
`;

export default function MapBoard() {
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // const [search, setSearch] = useState('');
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState('');

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const getDebounce = _.debounce((data) => {
    // 0.2초동안 아무런 작업이 없으면 실행되는 부분
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    getDebounce(event.target.value);
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  console.log(data);

  return (
    <Fragment>
      검색어 입력 : <input type='text' onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column> {el._id}</Column>
          <Column> {el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split('#$%')
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </Column>
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
