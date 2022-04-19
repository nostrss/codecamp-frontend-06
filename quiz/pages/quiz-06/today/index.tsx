// 1. /pages/quiz06/today/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요.
// 2. 각 행을 클릭하면 클릭된 데이터를 로컬 스토리지에 저장해 보세요.
// ⇒ 단, 클릭된 날짜와 시간을 "YYYY-MM-DD" 형태의 키로 저장해야 합니다.
// 3. 로컬 스토리지에 저장된 데이터 중, 오늘 날짜에 해당하는 데이터만 뽑아서 페이지 우측에 나타내 보세요.

import styled from '@emotion/styled';
import { gql, useQuery } from '@apollo/client';
import { IBoard } from '../../../src/commons/types/generated/types';
import { useEffect, useState } from 'react';
import { date } from 'yup';

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

const WrapperCol = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const WrapperRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const WrapperRowHover = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  :hover {
    background-color: lightgray;
  }
`;

const BodyDiv = styled.div`
  width: 33%;
  height: auto;
  border: 1px solid gray;
  font-size: 16px;
`;

export default function Boards() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const already = JSON.parse(localStorage.getItem(DATE) || '[]');
    setIsToday(already);
  }, []);

  const onClickCart = (el) => (event) => {
    console.log(el);
    const today = JSON.parse(localStorage.getItem(DATE) || '[]');
    const tmp = isToday.filter((item: IBoard) => item._id === el._id);
    if (tmp.length === 1) {
      return;
    }
    const { __typename, ...rest } = el;
    today.push(rest);
    localStorage.setItem(DATE, JSON.stringify(today));
    setIsToday(today);
  };

  return (
    <WrapperRow>
      <WrapperCol>
        {data?.fetchBoards.map((el: IBoard) => (
          <WrapperRow key={el._id}>
            <WrapperRowHover onClick={onClickCart(el)}>
              <BodyDiv>{el.writer}</BodyDiv>
              <BodyDiv>{el.title}</BodyDiv>
              <BodyDiv>{el.contents}</BodyDiv>
            </WrapperRowHover>
          </WrapperRow>
        ))}
      </WrapperCol>
      <WrapperCol>
        <h2>오늘 본 상품</h2>
        {isToday.map((el: IBoard) => (
          <WrapperRow>
            <BodyDiv>{el.writer}</BodyDiv>
            <BodyDiv>{el.title}</BodyDiv>
            <BodyDiv>{el.contents}</BodyDiv>
          </WrapperRow>
        ))}
      </WrapperCol>
    </WrapperRow>
  );
}
