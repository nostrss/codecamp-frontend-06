// 이동된 페이지에서 로컬스토리지에 저장된 데이터를 목록 형태로 화면에 나타내 보세요.

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { IBoard } from '../../../src/commons/types/generated/types';

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

const BodyDiv = styled.div`
  width: 20%;
  height: auto;
  border: 1px solid gray;
  font-size: 16px;
`;

export default function Basket() {
  const [isCart, setIsCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('basket') || '[]');
    setIsCart(cart);
  }, []);

  return (
    <WrapperCol>
      <h1>나의 게시물 담기 내역</h1>
      <WrapperRow>
        <BodyDiv>NO</BodyDiv>
        <BodyDiv>작성자</BodyDiv>
        <BodyDiv>제목</BodyDiv>
        <BodyDiv>내용</BodyDiv>
      </WrapperRow>
      {isCart.map((el: IBoard, index) => (
        <WrapperRow key={el._id}>
          <BodyDiv>{index + 1}</BodyDiv>
          <BodyDiv>{el.writer}</BodyDiv>
          <BodyDiv>{el.title}</BodyDiv>
          <BodyDiv>{el.contents}</BodyDiv>
        </WrapperRow>
      ))}
    </WrapperCol>
  );
}
