import { gql, useMutation, useQuery } from '@apollo/client';

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  console.log(useMutation(DELETE_BOARD));
  console.log(deleteBoard);
  console.log(useMutation(CREATE_BOARD));

  const { data } = useQuery(FETCH_BOARDS);

  // async 위치 주의 괄호에 가장 가까운쪽에
  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      // data = cache에서 꺼내온 data
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          // 어떤 필드를 수정할지 작성
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField('_id', el) !== deletedId // el._id가 안되므로 readField에서 꺼내기
              );
              console.log(deleteBoard[0]);
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: '영희',
          password: '1234',
          title: '제목입니다~',
          contents: '내용입니다@@@',
        },
      },
      update(cache, { data }) {
        // data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// 1. 구조분해 할당으로 함수 파라미터 받기

// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)
// 파라미터를 객체로 넘기고 함수에서 받을때 구조분해 할당해서 받는다.
// 객체로 받았을 떄 장점
// 1. 순서가 바뀌어도 된다.
// 2. 인자가 누락되어도 된다.

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)
