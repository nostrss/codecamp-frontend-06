import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { useState } from 'react';

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(-1);

  const onClickEdit = (event) => {
    setMyIndex(Number(event.target.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
            <MyRow key={el._id}>
              <MyColumn>
                <input type='checkbox' />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {index === myIndex && <div>수정하기 화면입니다</div>}
        </div>
      ))}
    </div>
  );
}
