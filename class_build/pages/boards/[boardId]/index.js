import { useRouter } from 'next/router';
import Head from 'next/head';
import { gql, request } from 'graphql-request';

export default function BoardsDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property='og:title' content={props.myboardData?.title} />
        <meta property='og:description' content={props.myboardData?.contents} />
        <meta property='og:image' content={props.myboardData?.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지입니다. 게시글 ID는 {router.query.boardId}
        입니다.
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
      images
    }
  }
`;

// 이 페이지는 서버사이드 렌더링 할래!!
export const getServerSideProps = async () => {
  // 데이터를 요청할 것!!!
  // const {data} = use
  const result = await request(
    'https://backend06.codecamp.co.kr/graphql',
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  );

  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};