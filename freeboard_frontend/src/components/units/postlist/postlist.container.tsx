import PostListUI from './postlist.presenter';
import Pagination from '../../commons/pagination/pagination.container';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './postlist.queries';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

export default function PostListContainer() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickTitle = (event: MouseEvent<HTMLElement>) => {
    router.push(`/boards/post/${event.target.id}`);
  };

  const onClickMoveWrite = () => {
    router.push('/boards/new');
  };

  return (
    <>
      <PostListUI
        data={data}
        onClickTitle={onClickTitle}
        onClickMoveWrite={onClickMoveWrite}
      />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
