import PostListUI from './postlist.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './postlist.queries';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

export default function PostListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onClickTitle = (event: MouseEvent<HTMLElement>) => {
    router.push(`/boards/post/${event.target.id}`);
  };
  return <PostListUI data={data} onClickTitle={onClickTitle} />;
}
