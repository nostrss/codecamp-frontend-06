import { gql, useMutation, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: '6264a504a8255b002988c272' },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: '6264a504a8255b002988c272' },
      // 방법: 1
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: '6264a504a8255b002988c272' },
        },
      ],

      // 유저의 속도가 느린경우 확실히 차이가 난다
      // 방법: 2
      // optimisticResponse: {
      //   likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      // },

      update(cache, { data }) {
        // FETCH_BOARD를 내가 캐치해서 직접 데이터를 변경하겠다.
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: '6264a504a8255b002988c272' },
          data: {
            fetchBoard: {
              // _id, __typename이 필수값이다.
              _id: '6264a504a8255b002988c272',
              __typename: 'Board',
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재카운트(좋아요):{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
