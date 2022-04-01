import { useQuery, useMutation, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { Fragment } from 'react';

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 20%;
`;

export default function MapBoard() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  // const [checked,isChecked] = useState(false)

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
      // 삭제가 되었으니 FETCH_BOARDS를 재쿼리 해달라
    });
  };

  return (
    // fragment에는 key를 쓸수 있다. <>에는 쓸수없다.
    <Fragment>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type='checkbox' />
          </Column>
          <Column> {el.number}</Column>
          <Column> {el.writer}</Column>
          <Column> {el.title} </Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </Fragment>
  );
}
