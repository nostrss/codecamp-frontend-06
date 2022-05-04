import { gql, useMutation, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

import Head from 'next/head';
export default function OpenGraphPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: '6264a504a8255b002988c272' },
  });

  return (
    <div>
      <Head>
        <meta property='og:title' content={data?.fetchBoard.likeCount} />
        <meta
          property='og:description'
          content='나만의 사이트에 오신것을 환영합니다'
        />
        <meta property='og:image' content='' />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
      <h2>{data?.fetchBoard.likeCount}</h2>
    </div>
  );
}
