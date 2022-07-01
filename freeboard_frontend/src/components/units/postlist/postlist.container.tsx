import PostListUI from './postlist.presenter';
import Pagination from '../../commons/pagination/pagination.container';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './postlist.queries';
import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import _ from 'lodash';

export default function PostListContainer() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: BoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  // const thisFunction = useRef();

  const onClickTitle = (data: any) => {
    // console.log(click);
    // console.log(thisFunction);
    router.push(`/boards/post/${data}`);
  };
  // const [click, setClick] = useState(onClickTitle);

  // const click = onClickTitle;
  const onClickMoveWrite = () => {
    router.push('/boards/new');
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    refetch({
      search: data,
      page: 1,
    });
    BoardsCount({
      search: data,
    });
    setKeyword(data);
  }, 200);

  const onChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    const startUtc = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
    setStartDate(startUtc);
    // console.log(event.target.value);
  };

  const onChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    const endUtc = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
    setEndDate(endUtc);
    console.log(event.target.value);
  };

  const onClickSearchDate = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) {
      refetch({
        search: keyword,
        page: 1,
        startDate: startDate,
        endDate: endDate,
      });
      BoardsCount({
        search: keyword,
        startDate: startDate,
        endDate: endDate,
      });
    }
  };

  return (
    <>
      <PostListUI
        data={data}
        onClickTitle={onClickTitle}
        onClickMoveWrite={onClickMoveWrite}
        keyword={keyword}
        setKeyword={setKeyword}
        onChangeSearch={onChangeSearch}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        onClickSearchDate={onClickSearchDate}
      />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
